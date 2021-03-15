(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[151],{151:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});const t='<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span> <span class="token keyword">import</span> <span class="token punctuation">{</span> fromLonLat <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"ol/proj"</span><span class="token punctuation">;</span> <span class="token keyword">import</span> <span class="token punctuation">{</span> boundingExtent<span class="token punctuation">,</span> getCenter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"ol/extent"</span><span class="token punctuation">;</span> <span class="token keyword">import</span> <span class="token string">"ol/ol.css"</span><span class="token punctuation">;</span> <span class="token keyword">import</span> <span class="token punctuation">{</span> RMap<span class="token punctuation">,</span> <span class="token constant">ROSM</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"rlayers"</span><span class="token punctuation">;</span> <span class="token keyword">const</span> extent <span class="token operator">=</span> <span class="token function">boundingExtent</span><span class="token punctuation">(</span><span class="token punctuation">[</span> <span class="token function">fromLonLat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2.25</span><span class="token punctuation">,</span> <span class="token number">48.81</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">fromLonLat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2.42</span><span class="token punctuation">,</span> <span class="token number">48.9</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">const</span> center <span class="token operator">=</span> <span class="token function">getCenter</span><span class="token punctuation">(</span>extent<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Extent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">JSX</span><span class="token punctuation">.</span>Element <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">(</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RMap</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>example-map<span class="token punctuation">"</span></span> <span class="token attr-name">center</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>center<span class="token punctuation">}</span></span> <span class="token attr-name">extent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>extent<span class="token punctuation">}</span></span> <span class="token attr-name">maxZoom</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">16</span><span class="token punctuation">}</span></span> <span class="token attr-name">zoom</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span> <span class="token punctuation">></span></span><span class="token plain-text"> </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ROSM</span></span> <span class="token punctuation">/></span></span><span class="token plain-text"> </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">RMap</span></span><span class="token punctuation">></span></span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> '}}]);