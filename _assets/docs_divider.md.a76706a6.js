import{f as a,g as n,B as t}from"./common-5e72c1c1.js";const s='{"title":"Divider 分隔符","frontmatter":{},"headers":[{"level":2,"title":"使用指南","slug":"使用指南"},{"level":2,"title":"一般用法","slug":"一般用法"},{"level":2,"title":"自定义颜色","slug":"自定义颜色"},{"level":2,"title":"自定义内容","slug":"自定义内容"},{"level":2,"title":"参数","slug":"参数"}],"relativePath":"docs/divider.md","lastUpdated":1602045059598.9597}';var p={};const e=t('<h1 id="divider-分隔符"><a class="header-anchor" href="#divider-分隔符" aria-hidden="true">#</a> Divider 分隔符</h1><hr><p>分割内容提示符</p><h2 id="使用指南"><a class="header-anchor" href="#使用指南" aria-hidden="true">#</a> 使用指南</h2><p>在 Taro 文件中引入组件</p><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> AtDivider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;taro-ui-vue3&#39;</span>\n</code></pre></div><p><strong>组件依赖的样式文件（仅按需引用时需要）</strong></p><div class="language-scss"><pre><code><span class="token keyword">@import</span> <span class="token string">&quot;taro-ui-vue3/dist/style/components/divider.scss&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">@import</span> <span class="token string">&quot;taro-ui-vue3/dist/style/components/icon.scss&quot;</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="一般用法"><a class="header-anchor" href="#一般用法" aria-hidden="true">#</a> 一般用法</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtDivider</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>分割线<span class="token punctuation">&#39;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div><h2 id="自定义颜色"><a class="header-anchor" href="#自定义颜色" aria-hidden="true">#</a> 自定义颜色</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtDivider</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>没有更多了<span class="token punctuation">&#39;</span></span> <span class="token attr-name">fontColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>#ed3f14<span class="token punctuation">&#39;</span></span> <span class="token attr-name">lineColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>#ed3f14<span class="token punctuation">&#39;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtDivider</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>没有更多了<span class="token punctuation">&#39;</span></span> <span class="token attr-name">fontColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>#ff9900<span class="token punctuation">&#39;</span></span> <span class="token attr-name">lineColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>#ff9900<span class="token punctuation">&#39;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtDivider</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>没有更多了<span class="token punctuation">&#39;</span></span> <span class="token attr-name">fontColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>#2d8cf0<span class="token punctuation">&#39;</span></span> <span class="token attr-name">lineColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>#2d8cf0<span class="token punctuation">&#39;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div><h2 id="自定义内容"><a class="header-anchor" href="#自定义内容" aria-hidden="true">#</a> 自定义内容</h2><p>说明：只有当 content 为空时，才能嵌套子组件</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtDivider</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtIcon</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>check-circle<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AtIcon</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AtDivider</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="参数"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>content</td><td>分隔符文字</td><td>String</td><td>-</td><td>-</td></tr><tr><td>height</td><td>分隔符高度，会自动转 rem,rpx</td><td>String or Number</td><td>-</td><td>112</td></tr><tr><td>fontColor</td><td>文字颜色</td><td>String</td><td>-</td><td>#6190E8</td></tr><tr><td>fontSize</td><td>文字大小，会自动转 rem,rpx</td><td>String or Number</td><td>-</td><td>32</td></tr><tr><td>lineColor</td><td>分割线颜色</td><td>String</td><td>-</td><td>#CCC</td></tr></tbody></table>',17);p.render=function(t,s,p,o,c,l){return a(),n("div",null,[e])};export default p;export{s as __pageData};
