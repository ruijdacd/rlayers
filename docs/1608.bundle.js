(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[1608],{1608:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>m});var r=n(7294),a=n(8672),l=n(6667),o=(n(2031),n(3025));const s=new l.Z({featureProjection:"EPSG:3857"}),c=fetch("https://public.opendatasoft.com/api/records/1.0/search/?dataset=population-francaise-par-departement-2018&q=&rows=200").then((e=>e.json())),u=(e,t)=>{var n,r;return null!==(r=null===(n=e.records.find((e=>e.fields.code_departement===t)))||void 0===n?void 0:n.fields.population)&&void 0!==r?r:0};function m(){const[e,t]=r.useState({records:[]}),[n,l]=r.useState(null);return r.useEffect((()=>c.then((e=>t(e)))),[]),r.createElement("div",{className:"d-flex flex-row"},r.createElement(o.rO,{className:"example-map",center:(0,r.useMemo)((()=>(0,a.mi)([2,46.5])),[]),zoom:5.75,noDefaultControls:!0,noDefaultInteractions:!0},r.createElement(o.eK,{layer:"toner"}),r.createElement(o.jh,{zIndex:5,format:s,url:"https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements.geojson",onPointerEnter:(0,r.useCallback)((e=>l(e.target)),[]),onPointerLeave:(0,r.useCallback)((e=>n===e.target&&l(null)),[n])},r.createElement(o.P_.P_,{render:(0,r.useCallback)((t=>r.createElement(o.P_.X3,{color:`rgba(0, 0, ${u(e,t.get("code"))/5e3}, 0.75)`})),[e])})),r.createElement(o.jh,{zIndex:10},n?r.createElement("div",null,r.createElement(o.j$,{geometry:n.getGeometry()},r.createElement(o.Cs,{className:"example-overlay",autoPosition:!0},"Population in ",r.createElement("strong",null,n.get("nom"))," in 2018 is"," ",r.createElement("strong",null,u(e,n.get("code")))))):null)))}o.j$.hitTolerance=0}}]);