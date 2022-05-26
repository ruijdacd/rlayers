"use strict";(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[9854],{8898:(e,t,s)=>{s.d(t,{b:()=>n});var r=s(7294),o=s(1543),i=s(9026);class n extends r.PureComponent{olEventName(e){return e.substring(2).toLowerCase()}attachEventHandlers(){var e,t;const s=null!==(e=this.eventSources)&&void 0!==e?e:[this.ol],r=Object.keys(this.props).filter((e=>e.startsWith("on"))),o=r.concat(Object.keys(null!==(t=this.handlers)&&void 0!==t?t:{}).filter((e=>!r.includes(e))));for(const e of o){if(void 0===this.handlers&&(this.handlers={}),void 0!==this.handlers[e]&&void 0===this.props[e]){(0,i.Z)("removing previously installed handler",this,e,this.handlers[e]);for(const t of s)t.un(this.olEventName(e),this.handlers[e]);this.handlers[e]=void 0}if(void 0===this.handlers[e]&&void 0!==this.props[e]){(0,i.Z)("installing handler",this,e,this.props[e]),this.handlers[e]=t=>this.props[e].call(this,t);for(const t of s)t.on(this.olEventName(e),this.handlers[e])}}}refresh(e){this.attachEventHandlers()}componentDidMount(){(0,i.Z)("didMount",this),this.refresh()}propsDiff(e){if(null===this.props||null===e)return this.props!==e&&((0,i.Z)("null props differ",this.props,e),!0);for(const t of Object.keys(this.props))if(this.props[t]!==e[t])return(0,i.Z)("because of",t,this.props[t],e[t]),!0;return!1}componentDidUpdate(e,t,s){this.props!==e&&((0,i.Z)("willRefresh",this,e,this.props),this.refresh(e))}componentWillUnmount(){var e,t;(0,i.Z)("willUnmount",this,this.handlers);const s=null!==(e=this.eventSources)&&void 0!==e?e:[this.ol];for(const e of Object.keys(null!==(t=this.handlers)&&void 0!==t?t:{}))if((0,i.Z)("cleaning up handler",this,e,this.handlers[e]),this.handlers[e]){for(const t of s)t.un(this.olEventName(e),this.handlers[e]);this.handlers[e]=void 0}}render(){return null}}n.contextType=o.p},1543:(e,t,s)=>{s.d(t,{p:()=>r});const r=s(7294).createContext({})},9854:(e,t,s)=>{s.d(t,{Fo:()=>r,j$:()=>b,V5:()=>Ke,kB:()=>o,he:()=>p,Eu:()=>B,cA:()=>V,eK:()=>T,zV:()=>f,ho:()=>z,qJ:()=>I,lg:()=>q,jh:()=>O,E:()=>J,BV:()=>A,KT:()=>D,rO:()=>h,H3:()=>R,vp:()=>$,Cs:()=>He,Zr:()=>_e,P_:()=>Ve});var r={};s.r(r),s.d(r,{D3:()=>se,$S:()=>ae,zi:()=>de,zd:()=>ce,Km:()=>pe,z4:()=>ee,KX:()=>oe,jq:()=>ne});var o={};s.r(o),s.d(o,{J4:()=>ye,UW:()=>ge,_j:()=>Ee,sh:()=>we});var i=s(8898),n=s(1543),l=s(7294),a=s(7577),c=s(9220);class h extends i.b{constructor(e){super(e),this.updateView=e=>{var t;const s=this.ol.getView();"function"==typeof(null===(t=this.props)||void 0===t?void 0:t.view[1])&&this.props.view[1]({center:s.getCenter(),zoom:s.getZoom(),resolution:s.getResolution()})},this.target=l.createRef(),this.ol=new a.Z({controls:e.noDefaultControls?[]:void 0,interactions:e.noDefaultInteractions?[]:void 0,view:new c.ZP({projection:e.projection,center:e.initial.center,zoom:void 0===e.initial.resolution?e.initial.zoom:void 0,resolution:e.initial.resolution,extent:e.extent,minResolution:e.minResolution,maxResolution:e.maxResolution,minZoom:e.minZoom,maxZoom:e.maxZoom})}),this.props.view&&this.ol.on("moveend",this.updateView)}componentDidMount(){super.componentDidMount(),this.ol.setTarget(this.target.current)}refresh(e){super.refresh(e);const t=this.ol.getView();for(const s of["minZoom","maxZoom"]){const r=s.charAt(0).toUpperCase()+s.substring(1);e&&this.props[s]===e[s]||t["set"+r](this.props[s])}this.props.view&&(t.setCenter(this.props.view[0].center),void 0===this.props.view[0].resolution?t.setZoom(this.props.view[0].zoom):t.setResolution(this.props.view[0].resolution)),this.props.properties&&this.ol.setProperties(this.props.properties),this.props.view?this.ol.on("moveend",this.updateView):this.ol.un("moveend",this.updateView)}render(){return l.createElement("div",{className:this.props.className,style:{width:this.props.width,height:this.props.height},ref:this.target},l.createElement(n.p.Provider,{value:{map:this.ol}},this.props.children))}}class p extends i.b{constructor(e,t){var s,r;if(super(e,t),!(null===(r=null===(s=this.context)||void 0===s?void 0:s.map)||void 0===r?void 0:r.addLayer))throw new Error("A layer must be part of a map")}refresh(e){super.refresh(e);for(const t of["visible","opacity","zIndex","minResolution","maxResolution","minZoom","maxZoom"])if(void 0!==this.props[t]){const s=t.charAt(0).toUpperCase()+t.substring(1);this.props[t]!==(e&&e[t])&&this.ol["set"+s](this.props[t])}this.source&&this.props.attributions&&this.source.setAttributions(this.props.attributions),this.props.properties&&this.ol.setProperties(this.props.properties)}componentDidMount(){super.componentDidMount(),this.context.map.addLayer(this.ol)}componentWillUnmount(){super.componentWillUnmount(),this.context.map.removeLayer(this.ol)}render(){return l.createElement(n.p.Provider,{value:{...this.context,layer:this.ol,source:this.source}},this.props.children)}}var u=s(1666),d=s(4680);class v extends p{}class f extends v{constructor(e,t){super(e,t),this.createSource(),this.ol=new u.Z({source:this.source}),this.eventSources=[this.ol,this.source]}createSource(){this.source=new d.Z({url:this.props.url,interpolate:!this.props.noIterpolation,projection:this.props.projection,tileGrid:this.props.tileGrid}),this.eventSources=[this.ol,this.source]}refresh(e){super.refresh(e),(null==e?void 0:e.tileGrid)!==this.props.tileGrid&&this.createSource(),this.props.url&&(null==e?void 0:e.url)!==this.props.url&&this.source.setUrl(this.props.url)}}var m=s(8630),y=s(1090),P=s(8641),w=s(9509),x=s(9026);class g extends m.Z{}class b extends i.b{constructor(e,t){var s,r;if(super(e,t),!(null===(s=null==this?void 0:this.context)||void 0===s?void 0:s.vectorlayer))throw new Error("An RFeature must be part of a vector layer");e.feature?this.ol=e.feature:this.ol=new y.Z({...null!==(r=e.properties)&&void 0!==r?r:{},geometry:e.geometry,style:w.ZP.getStyle(e.style)}),b.initEventRelay(this.context.map),this.onchange=()=>this.forceUpdate()}static initEventRelay(e){for(const t of b.pointerEvents)e.on(t,b.eventRelay)}static dispatchEvent(e,t){var s;return!e.feature||(e.feature.dispatchEvent?e.feature.dispatchEvent(t):(t.target||(t.target=e.feature),!(null===(s=e.layer)||void 0===s?void 0:s.get("_on"+t.type))||e.layer.get("_on"+t.type)(t)))}static eventRelay(e){const t=[];if(e.map.forEachFeatureAtPixel(e.pixel,((e,s)=>t.push({feature:e,layer:s})&&!1),{hitTolerance:b.hitTolerance}),e.dragging){b.lastFeaturesDragged.length||(b.lastFeaturesDragged=[...t]);for(const e of b.lastFeaturesDragged)t.find((t=>t.feature===e.feature))||t.push(e)}else{for(const t of b.lastFeaturesDragged)b.dispatchEvent(t,new g("pointerdragend",e.map,e.originalEvent));b.lastFeaturesDragged=[]}if("pointermove"===e.type){for(const s of b.lastFeaturesEntered)t.find((e=>e.feature===s.feature))||(b.dispatchEvent(s,new g("pointerleave",e.map,e.originalEvent)),s.feature=null,s.layer=null);b.lastFeaturesEntered=b.lastFeaturesEntered.filter((e=>e.feature));for(const s of t)b.lastFeaturesEntered.find((e=>e.feature===s.feature))||(b.dispatchEvent(s,new g("pointerenter",e.map,e.originalEvent)),b.lastFeaturesEntered.push(s))}for(const s of t)if(!1===b.dispatchEvent(s,new g(e.type,e.map,e.originalEvent)))return!1;return!0}refresh(e){super.refresh(e),void 0!==this.props.feature&&this.props.feature!==this.ol&&((0,x.Z)("replacing bound feature",this.ol),this.componentWillUnmount(),this.ol=this.props.feature,this.componentDidMount()),this.props.properties!==(null==e?void 0:e.properties)&&this.ol.setProperties(this.props.properties),this.props.geometry!==(null==e?void 0:e.geometry)&&this.ol.setGeometry(this.props.geometry),this.props.style!==(null==e?void 0:e.style)&&this.ol.setStyle(w.ZP.getStyle(this.props.style))}componentDidMount(){(0,x.Z)("didMount",this.ol),super.componentDidMount(),this.ol.on("change",this.onchange),this.context.vectorsource.addFeature(this.ol)}componentWillUnmount(){super.componentWillUnmount(),this.ol.un("change",this.onchange),this.context.vectorsource.removeFeature(this.ol)}render(){var e,t;const s=null===(t=null===(e=this.ol)||void 0===e?void 0:e.getGeometry())||void 0===t?void 0:t.getExtent(),r=s&&(0,P.qg)(s);return l.createElement("div",null,l.createElement(n.p.Provider,{value:{map:this.context.map,layer:this.context.vectorlayer,source:this.context.vectorsource,feature:this.ol,location:r}},this.props.children))}}b.pointerEvents=["click","pointerdrag","pointermove","singleclick","dblclick"],b.lastFeaturesEntered=[],b.lastFeaturesDragged=[],b.hitTolerance=3;class E extends p{constructor(e,t){super(e,t),this.newFeature=e=>{e.feature&&this.attachFeatureHandlers([e.feature]),e.features&&this.attachFeatureHandlers(e.features)},this.eventRelay=e=>!this.props["on"+E.relayedEvents[e.type]]||!1!==this.props["on"+E.relayedEvents[e.type]].call(this,e),b.initEventRelay(this.context.map),this.eventSources=this.createSource(e),this.source.on("featuresloadend",this.newFeature),this.source.on("addfeature",this.newFeature),this.attachEventHandlers()}createSource(e){throw new Error("RLayerBaseVector is an abstract class")}attachFeatureHandlers(e,t){for(const s of Object.values(E.relayedEvents))if(this.props["on"+s]!==(t&&t["on"+s]))for(const t of e)t.on(s.toLowerCase(),this.eventRelay)}componentWillUnmount(){super.componentWillUnmount();for(const e of Object.values(E.relayedEvents))this.source.forEachFeature((t=>(t.un(e.toLowerCase(),this.eventRelay),!1)))}refresh(e){super.refresh(e),this.attachFeatureHandlers(this.source.getFeatures(),e),(null==e?void 0:e.style)!==this.props.style&&this.ol.setStyle(w.ZP.getStyle(this.props.style))}render(){return l.createElement(n.p.Provider,{value:{...this.context,layer:this.ol,source:this.source,vectorlayer:this.ol,vectorsource:this.source}},this.props.children)}}E.relayedEvents={click:"Click",pointermove:"PointerMove",pointerenter:"PointerEnter",pointerleave:"PointerLeave"};var Z=s(6333),S=s(933);class O extends E{createSource(e){return this.source=new S.Z({features:this.props.features,url:this.props.url,format:this.props.format,loader:this.props.loader}),this.ol=new Z.Z({...e,style:w.ZP.getStyle(this.props.style),source:this.source}),[this.ol,this.source]}refresh(e){super.refresh(e),(null==e?void 0:e.url)!==this.props.url&&this.source.setUrl(this.props.url)}}var L=s(8266);class R extends v{constructor(e,t){super(e,t),this.source=new L.Z,this.ol=new u.Z({source:this.source}),this.eventSources=[this.ol,this.source]}refresh(e){super.refresh(e),this.ol.setProperties({label:"OpenStreetMap"})}}var k=s(2871),j=s(811);class D extends v{constructor(e,t){super(e,t),this.ol=new u.Z({source:this.source}),this.parser=new j.Z,this.createSource()}createSource(){return(0,x.Z)("createSource",this),fetch(this.props.url).then((e=>e.text())).then((e=>{const t=this.parser.read(e),s=(0,k.B)(t,{layer:this.props.layer});return this.props.attributions&&(s.attributions=this.props.attributions),s.crossOrigin="",this.props.projection&&(s.projection=this.props.projection),s.wrapX=!1,this.source=new k.Z(s),this.ol.setSource(this.source),this.eventSources=[this.ol,this.source],this.props.onSourceReady&&this.props.onSourceReady.call(this,s),this.source})).catch((e=>(console.error("failed loading WMTS capabilities",e),this.source=void 0,null)))}refresh(e){this.createSource().then((()=>super.refresh(e)))}}var U=s(228),C=s(2833);class A extends v{constructor(e,t){super(e,t),this.createSource(),this.ol=new U.Z({source:this.source}),this.eventSources=[this.ol,this.source]}createSource(){const{params:e,url:t}=this.props,s={params:e,url:t};this.source=new C.Z(s),this.eventSources=[this.ol,this.source]}refresh(e){super.refresh(e),this.createSource()}}var F=s(8569);class z extends v{constructor(e,t){super(e,t),this.source=new F.Z({url:this.props.url}),this.ol=new u.Z({source:this.source}),this.eventSources=[this.ol,this.source]}refresh(e){super.refresh(e),this.props.url&&(null==e?void 0:e.url)!==this.props.url&&this.source.setUrl(this.props.url)}}var M=s(4409);class I extends v{constructor(e,t){super(e,t),this.createSource(),this.ol=new u.Z({source:this.source}),this.eventSources=[this.ol,this.source]}createSource(){const{params:e,url:t,projection:s}=this.props,r={params:e,url:t,projection:s};this.source=new M.Z(r),this.eventSources=[this.ol,this.source]}refresh(e){super.refresh(e),this.createSource()}}var W=s(2347);class T extends v{constructor(e,t){super(e,t),this.source=new W.Z({layer:this.props.layer}),this.ol=new u.Z({source:this.source}),this.eventSources=[this.ol,this.source]}}var N=s(1660);class V extends E{createSource(e){return this.source=new S.Z({features:this.props.features,url:this.props.url,format:this.props.format,loader:this.props.loader}),this.ol=new N.Z({...e,source:this.source}),[this.ol,this.source]}refresh(e){super.refresh(e),(null==e?void 0:e.blur)!==this.props.blur&&this.ol.setBlur(this.props.blur),(null==e?void 0:e.radius)!==this.props.radius&&this.ol.setRadius(this.props.radius)}}var G=s(9261);class B extends E{createSource(e){return this.cluster=new S.Z({features:this.props.features,url:this.props.url,format:this.props.format,loader:this.props.loader}),this.source=new G.Z({source:this.cluster,distance:this.props.distance}),this.ol=new Z.Z({...e,source:this.source,style:w.ZP.getStyle(e.style)}),[this.ol,this.source,this.cluster]}refresh(e){super.refresh(e),(null==e?void 0:e.distance)!==this.props.distance&&this.source.setDistance(this.props.distance),(null==e?void 0:e.url)!==this.props.url&&this.cluster.setUrl(this.props.url)}}var H=s(5256),_=s(7358);class J extends p{constructor(e,t){super(e,t),this.source=new _.Z({url:this.props.url,format:this.props.format}),this.ol=new H.Z({style:w.ZP.getStyle(this.props.style),source:this.source,renderBuffer:this.props.renderBuffer}),this.eventSources=[this.ol,this.source],b.initEventRelay(this.context.map)}refresh(e){super.refresh(e);const t=Object.keys(this.props).filter((e=>e.startsWith("on"))).reduce(((e,t)=>({...e,["_"+t.toLowerCase()]:this.props[t]})),{});this.ol.setProperties(t),(null==e?void 0:e.style)!==this.props.style&&this.ol.setStyle(w.ZP.getStyle(this.props.style)),(null==e?void 0:e.url)!==this.props.url&&this.source.setUrl(this.props.url)}}var K=s(8245);class X extends v{}class q extends X{constructor(e,t){super(e,t),this.createSource(),this.ol=new K.Z({opacity:.9,source:this.source,cacheSize:e.cacheSize}),this.eventSources=[this.ol,this.source]}createSource(){this.source=new d.Z({url:this.props.url,interpolate:!this.props.noIterpolation,projection:this.props.projection,tileGrid:this.props.tileGrid,crossOrigin:"anonymous"}),this.eventSources=[this.ol,this.source]}refresh(e){super.refresh(e),(null==e?void 0:e.tileGrid)!==this.props.tileGrid&&this.createSource(),this.props.url&&(null==e?void 0:e.url)!==this.props.url&&this.source.setUrl(this.props.url)}}class $ extends X{constructor(e,t){super(e,t),this.source=new L.Z,this.ol=new K.Z({source:this.source,cacheSize:e.cacheSize}),this.eventSources=[this.ol,this.source]}refresh(e){super.refresh(e),this.ol.setProperties({label:"OpenStreetMap"})}}var Y=s(7494);class Q extends i.b{constructor(e,t){var s;if(super(e,t),!(null===(s=this.context)||void 0===s?void 0:s.map))throw new Error("A control must be part of a map")}toOLProps(e){var t;return{className:e.className,target:null===(t=e.target)||void 0===t?void 0:t.current}}refresh(e){super.refresh(e),this.ol.setProperties(this.toOLProps(this.props))}componentDidMount(){super.componentDidMount(),this.context.map.addControl(this.ol)}componentWillUnmount(){super.componentWillUnmount(),this.context.map.removeControl(this.ol)}}class ee extends Q{constructor(e,t){super(e,t),this.ol=new Y.Z(this.toOLProps(e))}toOLProps(e){var t;return{...super.toOLProps(e),minWidth:e.minWidth,bar:e.bar,text:e.text,units:null!==(t=e.units)&&void 0!==t?t:"metric"}}}var te=s(2657);class se extends Q{constructor(e,t){super(e,t),this.ol=new te.Z(this.toOLProps(e))}refresh(e){super.refresh(e),(null==e?void 0:e.collapsed)!==this.props.collapsed&&this.ol.setCollapsed(this.props.collapsed)}toOLProps(e){var t;return{...super.toOLProps(e),collapsible:null===(t=e.collapsible)||void 0===t||t,collapsed:e.collapsed}}}var re=s(3851);class oe extends Q{constructor(e,t){super(e,t),this.ol=new re.Z(this.toOLProps(e))}toOLProps(e){return{...super.toOLProps(e),duration:e.duration,zoomInLabel:e.zoomInLabel,zoomOutLabel:e.zoomOutLabel,zoomInTipLabel:e.zoomInTipLabel,zoomOutTipLabel:e.zoomOutTipLabel,delta:e.delta}}}var ie=s(8168);class ne extends Q{constructor(e,t){super(e,t),this.ol=new ie.Z(this.toOLProps(e))}toOLProps(e){return{...super.toOLProps(e),duration:e.duration}}}var le=s(8775);class ae extends Q{constructor(e,t){super(e,t),this.targetRef=l.createRef()}componentDidMount(){this.ol=new le.Z(this.toOLProps(this.props)),super.componentDidMount()}toOLProps(e){var t;return{...super.toOLProps(e),element:null===(t=this.targetRef)||void 0===t?void 0:t.current}}render(){return l.createElement("div",{className:["ol-control",this.props.className].join(" "),ref:this.targetRef},this.props.children)}}class ce extends Q{constructor(e,t){super(e,t),this.onchange=()=>this.forceUpdate(),this.clickCollapse=()=>{this.setState({collapsed:!this.state.collapsed})},this.targetRef=l.createRef(),this.state={collapsed:!0,visible:[!0]}}componentDidMount(){this.ol=new le.Z(this.toOLProps(this.props)),super.componentDidMount(),this.context.map.on("change",this.onchange),this.forceUpdate()}componentWillUnmount(){super.componentWillUnmount(),this.context.map.un("change",this.onchange)}toOLProps(e){var t;return{...super.toOLProps(e),element:null===(t=this.targetRef)||void 0===t?void 0:t.current}}render(){var e,t;const s=l.Children.map(this.props.children,((e,t)=>{var s;if(l.isValidElement(e))return null!==(s=this.state.visible[t])&&void 0!==s&&s})),r=l.Children.map(this.props.children,(e=>{var t,s;if(l.isValidElement(e))return null!==(s=null===(t=e.props.properties)||void 0===t?void 0:t.label)&&void 0!==s?s:"no label"}));return l.createElement(l.Fragment,null,l.createElement("div",{className:["ol-control",null!==(e=this.props.className)&&void 0!==e?e:"ol-layers-control"].join(" "),ref:this.targetRef},l.createElement("span",{onClick:this.clickCollapse},null!==(t=this.props.element)&&void 0!==t?t:l.createElement("button",null,"=")),this.state.collapsed?null:l.createElement("div",null,r.map(((e,t)=>l.createElement("div",{key:t},l.createElement("input",{type:"radio",id:t.toString(),name:e,value:t.toString(),checked:s[t],onChange:()=>{for(const e in s)s[e]=!1;s[t]=!0,this.setState({visible:[...s],collapsed:!0})}}),l.createElement("label",{htmlFor:t.toString()},e)))))),l.Children.map(this.props.children,((e,t)=>l.isValidElement(e)?l.cloneElement(e,{visible:s[t]}):e)))}}var he=s(5654);class pe extends Q{constructor(e,t){super(e,t),this.ol=new he.Z(this.toOLProps(e))}toOLProps(e){return{...super.toOLProps(e),collapsible:e.collapsible,collapsed:e.collapsed,label:e.label,collapseLabel:e.collapseLabel}}refresh(e){super.refresh(e),(null==e?void 0:e.collapsed)!==this.props.collapsed&&this.ol.setCollapsed(this.props.collapsed)}render(){return l.createElement("div",{className:this.props.className,style:{width:this.props.width,height:this.props.height}},l.createElement(n.p.Provider,{value:{map:this.ol.getOverviewMap()}},this.props.children))}}var ue=s(97);class de extends Q{constructor(e,t){super(e,t),this.ol=new ue.Z(this.toOLProps(e))}toOLProps(e){return{...super.toOLProps(e),source:e.source,label:e.label,labelActive:e.labelActive,tipLabel:e.tipLabel}}}class ve extends i.b{constructor(e,t){var s,r;if(super(e,t),!(null===(r=null===(s=this.context)||void 0===s?void 0:s.map)||void 0===r?void 0:r.addInteraction))throw new Error("An interaction must be part of a map");this.ol=this.createOL(e)}createOL(e){throw new Error("RBaseInteraction should not be directly instantiated")}refresh(e){for(const t of this.classProps)if(e&&e[t]!==this.props[t]){(0,x.Z)("Replacing interaction",this,e),this.componentWillUnmount(),this.ol=this.createOL(this.props),this.componentDidMount();break}super.refresh(e)}componentDidMount(){super.componentDidMount(),this.context.map.addInteraction(this.ol)}componentWillUnmount(){super.componentWillUnmount(),this.context.map.removeInteraction(this.ol)}}ve.classProps=[];class fe extends ve{}fe.classProps=["handleDownEvent","handleDragEvent","handleMoveEvent","handleUpEvent"];var me=s(1518);class ye extends fe{createOL(e){return this.classProps=ye.classProps,new me.Z(Object.keys(e).filter((e=>this.classProps.includes(e))).reduce(((t,s)=>({...t,[s]:e[s]})),{}))}}ye.classProps=["className","condition","minArea","boxEndCondition"];var Pe=s(3232);class we extends fe{createOL(e){return this.classProps=we.classProps,new Pe.Z(Object.keys(e).filter((e=>this.classProps.includes(e))).reduce(((t,s)=>({...t,[s]:e[s]})),{}))}}we.classProps=["features","layers","filter","hitTolerance"];var xe=s(8323);class ge extends fe{createOL(e){var t;if(!(null===(t=null==this?void 0:this.context)||void 0===t?void 0:t.vectorsource))throw new Error("A Draw interaction must be part of a vector layer");return this.classProps=ge.classProps,new xe.ZP({type:e.type,source:this.context.vectorsource,...Object.keys(e).filter((e=>this.classProps.includes(e))).reduce(((t,s)=>({...t,[s]:e[s]})),{})})}}ge.classProps=["condition","finishCondition","freehandCondition","style","stopClick","maxPoints","minPoints","snapTolerance"];var be=s(8373);class Ee extends fe{createOL(e){var t;if(!(null===(t=null==this?void 0:this.context)||void 0===t?void 0:t.vectorsource))throw new Error("A Modify interaction must be part of a vector layer");return this.classProps=Ee.classProps,new be.Z({source:this.context.vectorsource,...Object.keys(e).filter((e=>this.classProps.includes(e))).reduce(((t,s)=>({...t,[s]:e[s]})),{})})}}Ee.classProps=["condition","deleteCondition","insertVertexCondition","style","pixelTolerance","hitDetection"];var Ze=s(3522);class Se extends ve{createOL(e){return this.classProps=Se.classProps,new Ze.Z(Object.keys(e).filter((e=>this.classProps.includes(e))).reduce(((t,s)=>({...t,[s]:e[s]})),{}))}}Se.classProps=["duration","delta"];var Oe=s(3267);class Le extends ve{createOL(e){return this.classProps=Le.classProps,new Oe.Z(Object.keys(e).filter((e=>this.classProps.includes(e))).reduce(((t,s)=>({...t,[s]:e[s]})),{}))}}Le.classProps=["condition","kinetic"];var Re=s(2857);class ke extends ve{createOL(e){return this.classProps=ke.classProps,new Re.Z(Object.keys(e).filter((e=>this.classProps.includes(e))).reduce(((t,s)=>({...t,[s]:e[s]})),{}))}}ke.classProps=["condition","duration"];var je=s(519);class De extends ve{createOL(e){return this.classProps=De.classProps,new je.Z(Object.keys(e).filter((e=>this.classProps.includes(e))).reduce(((t,s)=>({...t,[s]:e[s]})),{}))}}De.classProps=["className","condition","duration","out","minArea"];var Ue=s(686);class Ce extends ve{createOL(e){return this.classProps=Ce.classProps,new Ue.Z(Object.keys(e).filter((e=>this.classProps.includes(e))).reduce(((t,s)=>({...t,[s]:e[s]})),{}))}}Ce.classProps=["condition","maxDelta","duration","useAnchor","constrainResolution"];var Ae=s(3205);class Fe extends ve{createOL(e){return this.classProps=Fe.classProps,new Ae.Z(Object.keys(e).filter((e=>this.classProps.includes(e))).reduce(((t,s)=>({...t,[s]:e[s]})),{}))}}Fe.classProps=["threshold","duration"];var ze=s(4474);class Me extends ve{createOL(e){return this.classProps=Me.classProps,new ze.Z(Object.keys(e).filter((e=>this.classProps.includes(e))).reduce(((t,s)=>({...t,[s]:e[s]})),{}))}}Me.classProps=["duration"];var Ie=s(8789);class We extends ve{createOL(e){return this.classProps=We.classProps,new Ie.Z(Object.keys(e).filter((e=>this.classProps.includes(e))).reduce(((t,s)=>({...t,[s]:e[s]})),{}))}}We.classProps=["condition","duration","pixelDelta"];var Te=s(834);class Ne extends ve{createOL(e){return this.classProps=Ne.classProps,new Te.Z(Object.keys(e).filter((e=>this.classProps.includes(e))).reduce(((t,s)=>({...t,[s]:e[s]})),{}))}}Ne.classProps=["condition","duration","delta"];var Ve=s(9404),Ge=s(3223);class Be extends i.b{constructor(e,t){var s;if(super(e,t),!(null===(s=this.context)||void 0===s?void 0:s.location))throw new Error("An overlay must be part of a location provider (ie RFeature)");this.ol=new Ge.Z({autoPan:e.autoPan,autoPanAnimation:e.autoPanAnimation}),this.containerRef=l.createRef()}setPosition(){var e;if(this.ol.setPosition(this.context.location),this.props.autoPosition&&(null===(e=this.containerRef)||void 0===e?void 0:e.current)){this.containerRef.current.style.position="absolute";const e=this.context.map.getPixelFromCoordinate(this.context.location),t=this.context.map.getSize();e[0]>t[0]/2?(this.containerRef.current.style.left=null,this.containerRef.current.style.right="0px"):(this.containerRef.current.style.left="0px",this.containerRef.current.style.right=null),e[1]>t[1]/2?(this.containerRef.current.style.top=null,this.containerRef.current.style.bottom="0px"):(this.containerRef.current.style.top="0px",this.containerRef.current.style.bottom=null)}}refresh(e){super.refresh(e),this.ol.setElement(this.containerRef.current),this.setPosition()}componentDidMount(){super.componentDidMount(),this.context.map.addOverlay(this.ol)}componentWillUnmount(){super.componentWillUnmount(),this.context.map.removeOverlay(this.ol)}render(){return this.setPosition(),l.createElement("div",{ref:this.containerRef,className:this.props.className},this.props.children)}}class He extends Be{}class _e extends Be{constructor(e,t){super(e,t),this.toggle=()=>{this.visible=!this.visible,this.setPosition()},this.show=()=>{var e,t;this.showing||(this.hiding&&window.clearTimeout(this.hiding),this.showing=window.setTimeout((()=>{this.visible=!0,this.setPosition(),this.hiding=this.showing=void 0}),null!==(t=null===(e=this.props.delay)||void 0===e?void 0:e.show)&&void 0!==t?t:250))},this.hide=()=>{var e,t;this.hiding||(this.showing&&window.clearTimeout(this.showing),this.hiding=window.setTimeout((()=>{this.visible=!1,this.setPosition(),this.hiding=this.showing=void 0}),null!==(t=null===(e=this.props.delay)||void 0===e?void 0:e.hide)&&void 0!==t?t:50))},this.visible=!1}componentWillUnmount(){super.componentWillUnmount(),this.unregister()}setPosition(){this.ol.setPosition(this.visible?this.context.location:void 0)}unregister(){this.context.feature.un("click",this.toggle),this.context.feature.un("pointerenter",this.show),this.context.feature.un("pointerleave",this.hide)}refresh(){switch(this.ol.setElement(this.containerRef.current),this.unregister(),this.props.trigger){default:case"click":this.context.feature.on("click",this.toggle);break;case"hover":this.context.feature.on("pointerenter",this.show),this.context.feature.on("pointerleave",this.hide)}this.setPosition()}}var Je=s(4570);class Ke extends i.b{constructor(e,t){var s,r;if(super(e,t),!(null===(s=null==this?void 0:this.context)||void 0===s?void 0:s.map))throw new Error("A Geolocation must be part of a map");const o=null!==(r=e.projection)&&void 0!==r?r:this.context.map.getView().getProjection();this.ol=new Je.Z({...e,projection:o})}}},9509:(e,t,s)=>{s.d(t,{ZP:()=>p,yO:()=>h});var r=s(7294),o=s(3935),i=s(9593),n=s.n(i),l=s(7539),a=s(1543),c=s(8898);const h=()=>r.useRef();class p extends c.b{constructor(e,t){super(e,t),this.style=(e,t)=>{if(this.ol!==this.style)return this.ol;let s;if(this.cache){s=this.props.cacheId(e,t);const r=this.cache.get(s);if(r)return r}const i=new l.ZP({zIndex:this.props.zIndex}),n=r.createElement(a.p.Provider,{value:{...this.context,style:i}},this.props.render(e,t));return o.render(n,document.createElement("div")),this.cache&&this.cache.set(s,i),i},e.render?this.ol=this.style:this.ol=new l.ZP({zIndex:e.zIndex}),e.render&&e.cacheSize&&e.cacheId&&(this.cache=new(n())({max:e.cacheSize}))}componentDidMount(){super.componentDidMount(),this.refresh()}refresh(e){var t,s,r,o,i;if(super.refresh(e),!e||(null==e?void 0:e.render)!==this.props.render){if(null===(t=this.context)||void 0===t?void 0:t.styleArray){if(this.ol===this.style)throw new Error("An RStyleArray must contain only static RStyles");this.context.styleArray.includes(this.ol)||this.context.styleArray.push(this.ol)}else(null===(r=null===(s=this.context)||void 0===s?void 0:s.feature)||void 0===r?void 0:r.setStyle)?this.context.feature.setStyle(this.ol):(null===(i=null===(o=this.context)||void 0===o?void 0:o.vectorlayer)||void 0===i?void 0:i.setStyle)&&this.context.vectorlayer.setStyle(this.ol);this.cache&&this.cache.clear()}this.ol instanceof l.ZP&&(!e||e.zIndex!==this.props.zIndex)&&this.ol.setZIndex(this.props.zIndex)}render(){return this.props.render?null:r.createElement(a.p.Provider,{value:{...this.context,style:this.ol}},this.props.children)}static getStyle(e){return null==e?e:"function"==typeof e.style?(t,s)=>e.style(t,s):Object.keys(e).includes("current")?(t,s)=>e.current.style(t,s):e}static getStyleStatic(e){if(null==e)return e;let t;if("function"==typeof e.style&&(t=e),Object.keys(e).includes("current")&&(t=e.current),t){if(void 0!==t.ol&&"function"!=typeof t.ol)return t.ol;throw new TypeError("RStyle is dynamic and cannot be converted to Style")}if("function"==typeof e)throw new TypeError("StyleLike is dynamic and cannot be converted to Style");return e}}},9404:(e,t,s)=>{s.d(t,{Au:()=>y,X3:()=>d,JW:()=>E,PE:()=>w,c5:()=>p,P_:()=>r.ZP,In:()=>l,UM:()=>g,yO:()=>r.yO});var r=s(9509),o=s(7294),i=s(3935),n=s(1543);class l extends r.ZP{constructor(e,t){super(e,t),this.style=(e,t)=>{if(this.props.render){const s=this.props.render(e,t);o.Children.map(s.props.children,(e=>{if(o.isValidElement(e)&&e.type!==r.ZP)throw new TypeError("An RStyleArray should contain only RStyle elements")}));const l=[],a=o.createElement(n.p.Provider,{value:{...this.context,styleArray:l}},s.props.children);return i.render(a,document.createElement("div")),l}return this.ol},this.childRefs=[],e.render?this.ol=this.style:this.ol=[]}refresh(e){super.refresh(e)}render(){return o.Children.map(this.props.children,(e=>{if(o.isValidElement(e)&&e.type!==r.ZP)throw new TypeError("An RStyleArray should contain only RStyle elements")})),this.props.render?o.createElement(o.Fragment,null):o.createElement(n.p.Provider,{value:{...this.context,styleArray:this.ol}},this.props.children)}}var a=s(8958),c=s(9026);class h extends o.PureComponent{constructor(e,t){if(super(e,t),!this.context)throw new Error("A style property must be part of a style");this.ol=this.create(e)}create(e){throw new Error("RBaseStyle is an abstract class")}refresh(e){if((0,c.Z)("refreshStyle",this),e)for(const t of this.classProps){const s=t.charAt(0).toUpperCase()+t.substring(1);(e&&e[t])!==this.props[t]&&(this.ol["set"+s]?this.ol["set"+s](this.props[t]):console.error(`Underlying OpenLayers object does not support updating of ${t} after object creation. If you are using an anonymous constant array or object, consider assigning its value to a constant and then passing the constant or use React.useMemo() to avoid this warning and improve performance.`))}}set(e){}componentDidMount(){this.set(this.ol)}componentDidUpdate(e,t,s){e!==this.props&&this.refresh(e)}componentWillUnmount(){this.set(null)}render(){return null}}h.contextType=n.p,h.classProps=[];class p extends h{create(e){return this.classProps=p.classProps,new a.Z(e)}set(e){if(this.context.style.setStroke)return this.context.style.setStroke(e);throw new Error("Parent element does not support a stroke")}}p.classProps=["color","width","lineCap","lineJoin"];var u=s(1345);class d extends h{create(e){return this.classProps=d.classProps,new u.Z(e)}set(e){if(this.context.style.setFill)return this.context.style.setFill(e);throw new Error("Parent element does not support a fill")}}d.classProps=["color"];var v=s(283);class f extends h{create(e){throw new Error("RImage is an abstract class")}set(e){if(!this.context.style.setImage)throw new Error("Parent element does not support an image");this.context.style.setImage(e)}}f.classProps=["opacity","rotateWithView","rotation","scale","displacement"];class m extends f{create(e){throw new Error("RImage is an abstract class")}setStroke(e){this.stroke=e,this.ol=this.create(this.props),super.set(this.ol)}setFill(e){this.fill=e,this.ol=this.create(this.props),super.set(this.ol)}render(){return o.createElement("div",null,o.createElement(n.p.Provider,{value:{...this.context,style:this}},this.props.children))}}m.classProps=f.classProps.concat(["radius"]);class y extends m{create(e){return this.classProps=y.classProps,new v.Z({...e,stroke:this.stroke,fill:this.fill})}}y.classProps=m.classProps.concat(["radius"]);var P=s(5393);class w extends m{create(e){return this.classProps=w.classProps,new P.Z({...e,stroke:this.stroke,fill:this.fill})}}w.classProps=m.classProps.concat(["radius1","radius2","points","angle"]);var x=s(1280);class g extends h{create(e){return this.classProps=g.classProps,new x.Z(e)}set(e){if(!this.context.style.setStroke)throw new Error("Parent element does not support a text");this.context.style.setText(e)}render(){return o.createElement("div",null,o.createElement(n.p.Provider,{value:{...this.context,style:this.ol}},this.props.children))}}g.classProps=["color","width","lineCap","lineJoin"];var b=s(7862);class E extends f{create(e){return this.classProps=E.classProps,new b.Z(e)}}E.classProps=f.classProps.concat(["anchor","anchorXUnits","anchorYUnits","color","crossOrigin","img","offset","offsetOrigin","size","imgSize","src"])}}]);