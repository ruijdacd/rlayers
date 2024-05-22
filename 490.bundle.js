"use strict";(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[490],{490:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r="/* This example reimplements the excellent OpenLayers example by @twpayne\n * from https://openlayers.org/en/latest/examples/igc.html\n * It illustrates various techniques that can be used to greatly improve performance\n *\n * React makes creating complex web applications very easy\n * It also makes very easy writing terribly inefficient code\n * You can get away with it when your DOM is not too complex\n * But when dealing with a canvas-drawn map, every care must be\n * taken to avoid unnecessary re-rendering\n */\n\nimport React, {useCallback} from 'react';\nimport {fromLonLat} from 'ol/proj';\nimport IGC from 'ol/format/IGC';\nimport {getVectorContext} from 'ol/render';\nimport {Geometry, LineString, Point} from 'ol/geom';\nimport {Coordinate} from 'ol/coordinate';\n\nimport {\n    RMap,\n    RLayerTile,\n    RLayerVector,\n    RFeature,\n    RenderEvent,\n    MapBrowserEvent,\n    VectorSourceEvent\n} from 'rlayers';\nimport {RStyle, RStroke, RFill, RCircle, useRStyle} from 'rlayers/style';\nimport 'ol/ol.css';\n\n// This won't work in CodePen\nimport ClementLatour from '!!file-loader!./data/igc/Clement-Latour.igc';\nimport DamienDeBaenst from '!!file-loader!./data/igc/Damien-de-Baenst.igc';\nimport SylvainDhonneur from '!!file-loader!./data/igc/Sylvain-Dhonneur.igc';\nimport TomPayne from '!!file-loader!./data/igc/Tom-Payne.igc';\nimport UlrichPrinz from '!!file-loader!./data/igc/Ulrich-Prinz.igc';\n\ntype InputFormEventType = React.FormEvent<HTMLInputElement>;\n\nconst igcsDesc = [\n    {c: 'rgba(0, 0, 250, 0.7)', i: ClementLatour},\n    {c: 'rgba(0, 50, 200, 0.7)', i: DamienDeBaenst},\n    {c: 'rgba(0, 100, 150, 0.7)', i: SylvainDhonneur},\n    {c: 'rgba(0, 150, 200, 0.7)', i: TomPayne},\n    {c: 'rgba(0, 200, 50, 0.7)', i: UlrichPrinz}\n];\n\n// A constant avoids re-rendering of the component\n// a property initialized with an anonymous object is not constant\n// it will recreate a new instance at every evaluation\nconst origin = fromLonLat([6, 45.7]);\n\n// This part is re-rendered on every pointermove\nexport default function IGCComp(): JSX.Element {\n    const [time, setTime] = React.useState('');\n    const [point, setPoint] = React.useState<Point>(null);\n    const [line, setLine] = React.useState<LineString>(null);\n    const [slider, setSlider] = React.useState(0);\n    const [highlights, setHighlights] = React.useState<Coordinate[]>([]);\n    const [flight, setFlight] = React.useState({\n        start: Infinity,\n        stop: -Infinity,\n        duration: 0\n    });\n    const [igcs, setIgcs] = React.useState(() => {\n        Promise.all(igcsDesc.map((i) => fetch(i.i).then((r) => r.text()))).then((r) => setIgcs(r));\n        return [];\n    });\n\n    const styles = {\n        redCircle: useRStyle(),\n        blueCircle: useRStyle(),\n        // This is a technique for an array of React.RefObjects\n        // It is ugly but it works\n        flightPath: React.useRef<RStyle[]>([])\n    };\n\n    // createRef instead of useRef here will severely impact performance\n    const igcVectorLayer = React.useRef<RLayerVector>();\n    const highlightVectorLayer = React.useRef<RLayerVector>();\n\n    return (\n        <React.Fragment>\n            {React.useMemo(\n                // This is not a dynamic RStyle, these are 5 static RStyle's\n                // Thus the useMemo\n                () =>\n                    igcsDesc.map((igc, idx) => (\n                        <RStyle key={idx} ref={(el) => (styles.flightPath.current[idx] = el)}>\n                            <RStroke color={igc.c} width={3} />\n                        </RStyle>\n                    )),\n                [styles.flightPath]\n            )}\n            <RStyle ref={styles.redCircle}>\n                <RStroke color='red' width={1} />\n                <RCircle radius={6}>\n                    <RFill color='red' />\n                </RCircle>\n            </RStyle>\n            <RStyle ref={styles.blueCircle}>\n                <RCircle radius={6}>\n                    <RFill color='blue' />\n                </RCircle>\n            </RStyle>\n            <RMap\n                className='example-map'\n                initial={{center: origin, zoom: 9}}\n                onPointerMove={useCallback(\n                    (e: MapBrowserEvent<UIEvent>) => {\n                        // This useCallback is very important -> without it\n                        // onPointerMove will be a new anonymous function on every render\n                        const source = igcVectorLayer.current.source;\n                        const feature = source.getClosestFeatureToCoordinate(e.coordinate);\n                        // Did the user move the mouse before the flight paths were loaded?\n                        if (feature === null) return;\n                        const point = feature.getGeometry().getClosestPoint(e.coordinate);\n                        const date = new Date(point[2] * 1000);\n                        setPoint(new Point(point));\n                        setLine(new LineString([e.coordinate, [point[0], point[1]]]));\n                        setTime(\n                            '<strong>' +\n                                feature.get('PLT') +\n                                '</strong><br><em>' +\n                                date.toUTCString() +\n                                '</em>'\n                        );\n                        e.map.render();\n                    },\n                    [igcVectorLayer]\n                )}\n            >\n                <RLayerTile\n                    zIndex={5}\n                    url='https://{a-c}.tile.opentopomap.org/{z}/{x}/{y}.png'\n                    attributions='Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)'\n                />\n                {\n                    // This layer contains the flight paths, we install an `onAddFeature` handler\n                    // to receive all features as their loaded to do additional processing\n                }\n                <RLayerVector\n                    zIndex={10}\n                    ref={igcVectorLayer}\n                    onAddFeature={useCallback(\n                        // This useCallback transforms this function to a constant value\n                        // None of its dependencies change after initialization\n                        (e) => {\n                            const geometry = e.feature.getGeometry() as LineString;\n                            flight.start = Math.min(flight.start, geometry.getFirstCoordinate()[2]);\n                            flight.stop = Math.max(flight.stop, geometry.getLastCoordinate()[2]);\n                            flight.duration = flight.stop - flight.start;\n                            setFlight({...flight});\n                        },\n                        [flight]\n                    )}\n                    onPostRender={useCallback(\n                        // This useCallback is less efficient than the previous one\n                        // as it depends on the state\n                        // LayerVector is re-rendered every time point/line change\n                        (e: RenderEvent) => {\n                            const vectorContext = getVectorContext(e);\n                            vectorContext.setStyle(RStyle.getStyleStatic(styles.redCircle));\n                            if (point && line) {\n                                vectorContext.drawGeometry(point);\n                                vectorContext.drawGeometry(line);\n                            }\n                        },\n                        [point, line, styles.redCircle]\n                    )}\n                >\n                    {React.useMemo(\n                        () => (\n                            // This component appears dynamic to React because of the map but it is in fact constant\n                            // useMemo will render it truly constant\n                            <React.Fragment>\n                                {igcs.map((igc, idx) => (\n                                    <RFeature\n                                        key={idx}\n                                        feature={\n                                            new IGC().readFeatures(igc, {\n                                                featureProjection: 'EPSG:3857'\n                                            })[0]\n                                        }\n                                        style={styles.flightPath.current[idx]}\n                                    />\n                                ))}\n                            </React.Fragment>\n                        ),\n                        // The array trick renders it impossible for React to track the useMemo dependencies\n                        // -> we do it manually\n                        // eslint-disable-next-line react-hooks/exhaustive-deps\n                        [igcs, styles.flightPath, styles.flightPath.current[0]]\n                    )}\n                </RLayerVector>\n                {\n                    // This layer contains the blue circle (the highlighted section)\n                }\n                <RLayerVector zIndex={10} ref={highlightVectorLayer} style={styles.blueCircle}>\n                    {React.useMemo(\n                        () => (\n                            // This component appears dynamic to React because of the map but it is in fact constant\n                            // useMemo will render it truly constant\n                            <React.Fragment>\n                                {highlights.map((coords, i) => (\n                                    <RFeature key={i} geometry={new Point(coords)} />\n                                ))}\n                            </React.Fragment>\n                        ),\n                        [highlights]\n                    )}\n                </RLayerVector>\n            </RMap>\n            <div className='d-flex flex-row mb-3 align-items-center'>\n                <div\n                    className='jumbotron py-1 px-3 m-0 me-3 w-50'\n                    dangerouslySetInnerHTML={{__html: time}}\n                />\n                <div className='w-50'>\n                    <input\n                        type='range'\n                        className='range-slider range-slider--primary w-100'\n                        min='0'\n                        max='100'\n                        value={slider}\n                        onChange={useCallback(\n                            // This useCallback transforms this function to a constant value\n                            // None of its dependencies change after initialization\n                            (e: InputFormEventType) => {\n                                const value = parseInt(e.currentTarget.value);\n                                setSlider(value);\n                                const source = igcVectorLayer.current.source;\n                                const m = flight.start + (flight.duration * value) / 100;\n                                const newHighlights = [];\n                                source.forEachFeature((feature) => {\n                                    if (!feature.get('PLT')) return;\n                                    const geometry = feature.getGeometry() as LineString;\n                                    const coords = geometry.getCoordinateAtM(m, true);\n                                    newHighlights.push(coords);\n                                });\n                                setHighlights(newHighlights);\n                            },\n                            [igcVectorLayer, flight]\n                        )}\n                    />\n                </div>\n            </div>\n        </React.Fragment>\n    );\n}\n"}}]);