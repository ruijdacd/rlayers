"use strict";(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[5155],{5155:(n,o,e)=>{e.r(o),e.d(o,{default:()=>r});const r="import React, {useCallback} from 'react';\nimport {fromLonLat} from 'ol/proj';\nimport {Coordinate} from 'ol/coordinate';\nimport {Polygon, Point} from 'ol/geom';\nimport 'ol/ol.css';\n\nimport {RMap, ROSM, RLayerVector, RFeature, RPopup} from 'rlayers';\nimport {RStyle, RIcon, RFill, RStroke} from 'rlayers/style';\n\nimport locationIcon from './svg/location.svg';\nimport {Feature} from 'ol';\n\nconst coords: Record<string, Coordinate> = {\n    origin: [2.364, 48.82],\n    ArcDeTriomphe: [2.295, 48.8737],\n    PlaceDItalie: [2.355, 48.831],\n    Bastille: [2.369, 48.853],\n    TourEiffel: [2.294, 48.858],\n    Montmartre: [2.342, 48.887]\n};\n\nexport default function Popups(): JSX.Element {\n    return (\n        <RMap className='example-map' initial={{center: fromLonLat(coords.origin), zoom: 11}}>\n            <ROSM />\n            <RLayerVector zIndex={10}>\n                <RFeature geometry={new Point(fromLonLat(coords.ArcDeTriomphe))}>\n                    <RStyle>\n                        <RIcon src={locationIcon} anchor={[0.5, 0.8]} />\n                    </RStyle>\n                    <RPopup trigger={'click'} className='example-overlay'>\n                        <div className='card'>\n                            <p className='card-header'>\n                                <strong>Arc de Triomphe</strong>\n                            </p>\n                            <p className='card-body text-center'>Popup on click</p>\n                        </div>\n                    </RPopup>\n                </RFeature>\n                <RFeature\n                    geometry={\n                        new Polygon([\n                            [\n                                fromLonLat(coords.PlaceDItalie),\n                                fromLonLat(coords.Bastille),\n                                fromLonLat(coords.TourEiffel),\n                                fromLonLat(coords.PlaceDItalie)\n                            ]\n                        ])\n                    }\n                    onClick={useCallback(\n                        (e) =>\n                            e.map.getView().fit(e.target.getGeometry().getExtent(), {\n                                duration: 250\n                            }),\n                        []\n                    )}\n                >\n                    <RStyle>\n                        <RStroke color='yellow' width={4} />\n                        <RFill color='transparent' />\n                    </RStyle>\n                    <RPopup trigger={'hover'} className='example-overlay'>\n                        <p>\n                            <strong>Les catacombes</strong>\n                        </p>\n                        <p>\n                            <em>Popup on hover, pan on click</em>\n                        </p>\n                    </RPopup>\n                </RFeature>\n            </RLayerVector>\n        </RMap>\n    );\n}\n"}}]);