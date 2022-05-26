"use strict";(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[5602],{5602:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a="import React, {useCallback, useMemo} from 'react';\nimport {fromLonLat} from 'ol/proj';\nimport Feature from 'ol/Feature';\nimport GeoJSON from 'ol/format/GeoJSON';\nimport {Geometry} from 'ol/geom';\nimport 'ol/ol.css';\n\nimport {RMap, RLayerVector, RStyle, RFeature, ROverlay, RLayerStamen} from 'rlayers';\n\n// These are the French internal administrative borders in GeoJSON format\nconst departements =\n    'https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements.geojson';\nconst parser = new GeoJSON({featureProjection: 'EPSG:3857'});\n// Population by French administrative division\n// https://public.opendatasoft.com/explore/dataset/population-francaise-par-departement-2018/\n// Published under Etalab Open License https://www.etalab.gouv.fr/wp-content/uploads/2018/11/open-licence.pdf\nconst inputData =\n    'https://public.opendatasoft.com/api/records/1.0/search/?dataset=population-francaise-par-departement-2018&q=&rows=200';\ntype inputDataType = {records: {fields: {code_departement: string; population: number}}[]};\nconst fetchData = fetch(inputData).then((raw) => raw.json() as Promise<inputDataType>);\nconst getData = (data: inputDataType, dep: string) =>\n    data.records.find((el) => el.fields.code_departement === dep)?.fields.population ?? 0;\n// The default hitbox around the features is 3px wide making narrow gaps between the borders difficult to select\nRFeature.hitTolerance = 0;\n\nexport default function GeoData(): JSX.Element {\n    const [data, setData] = React.useState({records: []} as inputDataType);\n    const [current, setCurrent] = React.useState(null as Feature<Geometry> | null);\n    React.useEffect(() => {\n        fetchData.then((r) => setData(r));\n    }, []);\n    return (\n        <div className='d-flex flex-row'>\n            <RMap\n                className='example-map'\n                initial={useMemo(() => ({center: fromLonLat([2, 46.5]), zoom: 5.75}), [])}\n                noDefaultControls={true}\n                noDefaultInteractions={true}\n            >\n                <RLayerStamen layer='toner' />\n\n                {/* This the internal borders layer, initialized with the GeoJSON\n                 * useCallback is a performance optimization, it allows to always have\n                 * the same function object unless 'current' changes\n                 * without it you will create a new function at every frame rendered */}\n                <RLayerVector\n                    zIndex={5}\n                    format={parser}\n                    url={departements}\n                    onPointerEnter={useCallback((e) => setCurrent(e.target), [])}\n                    onPointerLeave={useCallback(\n                        (e) => current === e.target && setCurrent(null),\n                        [current]\n                    )}\n                >\n                    {/* When styling each feature, compute the color from the population data\n                     * The function is memoized and it is replaced only once - when the population data\n                     * becomes available. Without memoization (useCallback) all the features will need to\n                     * be re-evaluated at every frame */}\n                    <RStyle.RStyle\n                        render={useCallback(\n                            (f) => (\n                                <RStyle.RFill\n                                    color={`rgba(0, 0, ${\n                                        getData(data, f.get('code')) / 5000\n                                    }, 0.75)`}\n                                />\n                            ),\n                            [data]\n                        )}\n                    />\n                </RLayerVector>\n                {/* This is a layer with a single feature - current - that holds the highlighted borders\n                 * It is styled with the default OpenLayers style */}\n                <RLayerVector zIndex={10}>\n                    {current ? (\n                        <div>\n                            <RFeature geometry={current.getGeometry()}>\n                                <ROverlay className='example-overlay' autoPosition={true}>\n                                    Population in <strong>{current.get('nom')}</strong> in 2018 is{' '}\n                                    <strong>{getData(data, current.get('code'))}</strong>\n                                </ROverlay>\n                            </RFeature>\n                        </div>\n                    ) : null}\n                </RLayerVector>\n            </RMap>\n        </div>\n    );\n}\n"}}]);