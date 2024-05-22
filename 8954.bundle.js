"use strict";(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[8954],{8954:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const t='<span class="token comment">/*\n * This example illustrates using vector tiles\n * and\n * layers that appear only when zoomed in\n */</span>\n\n<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useCallback<span class="token punctuation">,</span> useMemo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Feature <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"ol"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> fromLonLat <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"ol/proj"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">MVT</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"ol/format"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">"ol/ol.css"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span> RMap<span class="token punctuation">,</span> RLayerVectorTile <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"rlayers"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>\n  useRStyle<span class="token punctuation">,</span>\n  RStyle<span class="token punctuation">,</span>\n  RStyleArray<span class="token punctuation">,</span>\n  RStroke<span class="token punctuation">,</span>\n  RFill<span class="token punctuation">,</span>\n  RCircle<span class="token punctuation">,</span>\n  RText<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"rlayers/style"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Geometry <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"ol/geom"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> RLayerStadia <span class="token keyword">from</span> <span class="token string">"rlayers/layer/RLayerStadia"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> RenderFeature <span class="token keyword">from</span> <span class="token string">"ol/render/Feature"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> degree <span class="token operator">=</span> <span class="token number">111319.49079327358</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> fonts <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token number">0</span><span class="token operator">:</span> <span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> font<span class="token operator">:</span> <span class="token string">"1.2rem helvetica,sans-serif"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token number">1</span><span class="token operator">:</span> <span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> font<span class="token operator">:</span> <span class="token string">"0.6rem helvetica,sans-serif"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token number">2</span><span class="token operator">:</span> <span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> font<span class="token operator">:</span> <span class="token string">"0.5rem helvetica,sans-serif"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  def<span class="token operator">:</span> <span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> font<span class="token operator">:</span> <span class="token string">"0.4rem helvetica,sans-serif"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">/*\n * If you know about any open and free to use vector tile services, please let me know\n * This example uses the velivole.fr administrative boundary server which serves EPSG:4326\n *\n * You can also find a primitive pbf tile server based on geojson-vt\n * at https://github.com/mmomtchev/geojson-vt-server.git\n */</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">VectorTiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">JSX</span><span class="token punctuation">.</span>Element <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>country<span class="token punctuation">,</span> setCountry<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> towns <span class="token operator">=</span> <span class="token function">useRStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> parser <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">MVT</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">React.Fragment</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RStyleArray</span></span>\n        <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>towns<span class="token punctuation">}</span></span>\n        <span class="token attr-name">render</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span>feature<span class="token operator">:</span> Feature<span class="token operator">&lt;</span>Geometry<span class="token operator">></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n          <span class="token comment">/* This is a the towns style\n           *\n           * This examples illustrates superposing two image elements (two circles)\n           *\n           * This is a dynamic style that creates a new object\n           * every time it is access\n           * Use with care\n           */</span>\n\n          <span class="token keyword">const</span> <span class="token punctuation">{</span> width<span class="token punctuation">,</span> font <span class="token punctuation">}</span> <span class="token operator">=</span> fonts<span class="token punctuation">[</span>feature<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"p"</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">??</span> fonts<span class="token punctuation">.</span>def<span class="token punctuation">;</span>\n          <span class="token keyword">const</span> color <span class="token operator">=</span>\n            <span class="token string">"#ffff"</span> <span class="token operator">+</span>\n            feature\n              <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"c"</span><span class="token punctuation">)</span>\n              <span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n              <span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token string">"hex"</span><span class="token punctuation">)</span>\n              <span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>\n              <span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">"0"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token keyword">return</span> <span class="token punctuation">(</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">React.Fragment</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RStyle</span></span> <span class="token attr-name">zIndex</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RCircle</span></span> <span class="token attr-name">radius</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>width<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RStroke</span></span> <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">"#007bff"</span><span class="token punctuation">}</span></span> <span class="token attr-name">width</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>width<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RFill</span></span> <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">"#007bff"</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">RCircle</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RText</span></span> <span class="token attr-name">font</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>font<span class="token punctuation">}</span></span> <span class="token attr-name">text</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>feature<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"n"</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RStroke</span></span> <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">"#007bff"</span><span class="token punctuation">}</span></span> <span class="token attr-name">width</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RFill</span></span> <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>color<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">RText</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">RStyle</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RStyle</span></span> <span class="token attr-name">zIndex</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RCircle</span></span> <span class="token attr-name">radius</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>width <span class="token operator">*</span> <span class="token number">1.5</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RStroke</span></span> <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">"#000000"</span><span class="token punctuation">}</span></span> <span class="token attr-name">width</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>width <span class="token operator">*</span> <span class="token number">1.5</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RFill</span></span> <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">"#000000"</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">RCircle</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">RStyle</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">React.Fragment</span></span><span class="token punctuation">></span></span>\n          <span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RMap</span></span>\n        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>example-map<span class="token punctuation">"</span></span>\n        <span class="token attr-name">initial</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> center<span class="token operator">:</span> <span class="token function">fromLonLat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2.364</span><span class="token punctuation">,</span> <span class="token number">48.82</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">"EPSG:4326"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> zoom<span class="token operator">:</span> <span class="token number">8</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">projection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>EPSG:4326<span class="token punctuation">"</span></span>\n      <span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token punctuation">{</span><span class="token comment">/* This is the background raster map */</span><span class="token punctuation">}</span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RLayerStadia</span></span> <span class="token attr-name">layer</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stamen_watercolor<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n        </span><span class="token punctuation">{</span><span class="token comment">/* These are the administrative borders */</span><span class="token punctuation">}</span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RLayerVectorTile</span></span>\n          <span class="token attr-name">onPointerEnter</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>React<span class="token punctuation">.</span><span class="token function">useCallback</span><span class="token punctuation">(</span>\n            <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span>\n              e<span class="token punctuation">.</span>target<span class="token operator">?.</span>get <span class="token operator">&amp;&amp;</span>\n              <span class="token function">setCountry</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"n"</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">", "</span> <span class="token operator">+</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"c"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            <span class="token punctuation">[</span>setCountry<span class="token punctuation">]</span>\n          <span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://velivole.b-cdn.net/tiles/admin/{z}/{x}/{y}.pbf<span class="token punctuation">"</span></span>\n          <span class="token attr-name">projection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>EPSG:4326<span class="token punctuation">"</span></span>\n          <span class="token attr-name">format</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>parser<span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RStyle</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n            </span><span class="token punctuation">{</span><span class="token comment">/* This is the borders style */</span><span class="token punctuation">}</span><span class="token plain-text">\n            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RStroke</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#007bff<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RFill</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transparent<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">RStyle</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">RLayerVectorTile</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token punctuation">{</span><span class="token comment">/* These are the cities */</span><span class="token punctuation">}</span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RLayerVectorTile</span></span>\n          <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://velivole.b-cdn.net/tiles/place/0/{z}/{x}/{y}.pbf<span class="token punctuation">"</span></span>\n          <span class="token attr-name">projection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>EPSG:4326<span class="token punctuation">"</span></span>\n          <span class="token attr-name">maxResolution</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">0.01</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>towns<span class="token punctuation">}</span></span>\n          <span class="token attr-name">format</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>parser<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span><span class="token plain-text">\n        </span><span class="token punctuation">{</span><span class="token comment">/* The towns visible only when zoomed in */</span><span class="token punctuation">}</span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RLayerVectorTile</span></span>\n          <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://velivole.b-cdn.net/tiles/place/1/{z}/{x}/{y}.pbf<span class="token punctuation">"</span></span>\n          <span class="token attr-name">projection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>EPSG:4326<span class="token punctuation">"</span></span>\n          <span class="token attr-name">maxResolution</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">0.0025</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>towns<span class="token punctuation">}</span></span>\n          <span class="token attr-name">format</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>parser<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span><span class="token plain-text">\n        </span><span class="token punctuation">{</span><span class="token comment">/* The small villages at maximum resolution */</span><span class="token punctuation">}</span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RLayerVectorTile</span></span>\n          <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://velivole.b-cdn.net/tiles/place/2/{z}/{x}/{y}.pbf<span class="token punctuation">"</span></span>\n          <span class="token attr-name">projection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>EPSG:4326<span class="token punctuation">"</span></span>\n          <span class="token attr-name">maxResolution</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">0.0005</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>towns<span class="token punctuation">}</span></span>\n          <span class="token attr-name">format</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>parser<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">RMap</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mx-0 mt-0 mb-3 p-1 w-100 jumbotron shadow shadow<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">\n          You are now in </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>country<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">React.Fragment</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n'}}]);