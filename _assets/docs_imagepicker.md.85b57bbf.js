import{f as n,g as a,B as s}from"./common-5e72c1c1.js";const t='{"title":"ImagePicker 图片选择器","frontmatter":{},"headers":[{"level":2,"title":"使用指南","slug":"使用指南"},{"level":2,"title":"一般用法","slug":"一般用法"},{"level":2,"title":"多选图片","slug":"多选图片"},{"level":2,"title":"自定义数量","slug":"自定义数量"},{"level":2,"title":"多种图片预览模式","slug":"多种图片预览模式"},{"level":2,"title":"参数","slug":"参数"},{"level":2,"title":"事件","slug":"事件"}],"relativePath":"docs/imagepicker.md","lastUpdated":1602045059596.9624}';var p={};const e=s('<h1 id="imagepicker-图片选择器"><a class="header-anchor" href="#imagepicker-图片选择器" aria-hidden="true">#</a> ImagePicker 图片选择器</h1><hr><p>图片选择器，一般用于上传图片前的文件选择操作，但不包括图片上传的功能</p><h2 id="使用指南"><a class="header-anchor" href="#使用指南" aria-hidden="true">#</a> 使用指南</h2><p>在 Taro 文件中引入组件</p><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> AtImagePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;taro-ui-vue3&#39;</span>\n</code></pre></div><p><strong>组件依赖的样式文件（仅按需引用时需要）</strong></p><div class="language-scss"><pre><code><span class="token keyword">@import</span> <span class="token string">&quot;taro-ui-vue3/dist/style/components/image-picker.scss&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">@import</span> <span class="token string">&quot;taro-ui-vue3/dist/style/components/icon.scss&quot;</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="一般用法"><a class="header-anchor" href="#一般用法" aria-hidden="true">#</a> 一般用法</h2><p>说明</p><ul><li><p>该组件为受控组件，开发者需要通过 onChange 事件来更新 files，files 与 onChange 函数必填</p></li><li><p>该组件使用Taro.chooseImage实现选取图片，会受到Taro能力的制约，具体请参考Taro文档</p></li><li><p>开发者可以获取 files 数据并通过 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/wx.uploadFile.html" target="_blank" rel="noopener noreferrer">Taro.uploadFile</a> 上传图片</p></li></ul><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtImagePicker</span>\n      <span class="token attr-name">:files</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>files<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onChange<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> AtImagePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;taro-ui-vue3&#39;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;AtImagePickerDemo&#39;</span><span class="token punctuation">,</span>\n  components<span class="token operator">:</span> <span class="token punctuation">{</span> AtImagePicker <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      files<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          url<span class="token operator">:</span> <span class="token string">&#39;https://jimczj.gitee.io/lazyrepay/aragaki1.jpeg&#39;</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n          url<span class="token operator">:</span> <span class="token string">&#39;https://jimczj.gitee.io/lazyrepay/aragaki2.jpeg&#39;</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n          url<span class="token operator">:</span> <span class="token string">&#39;https://jimczj.gitee.io/lazyrepay/aragaki3.png&#39;</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n          type<span class="token operator">:</span> <span class="token string">&#39;btn&#39;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">onChange</span> <span class="token punctuation">(</span><span class="token parameter">files</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>files <span class="token operator">=</span> files\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">onFail</span> <span class="token punctuation">(</span><span class="token parameter">mes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mes<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">onImageClick</span> <span class="token punctuation">(</span><span class="token parameter">index<span class="token punctuation">,</span> file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> file<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h2 id="多选图片"><a class="header-anchor" href="#多选图片" aria-hidden="true">#</a> 多选图片</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtImagePicker</span>\n      <span class="token attr-name">multiple</span>\n      <span class="token attr-name">:files</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>files<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onChange<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">@fail</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onFail<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">@image-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onImageClick<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="自定义数量"><a class="header-anchor" href="#自定义数量" aria-hidden="true">#</a> 自定义数量</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtImagePicker</span>\n      <span class="token attr-name">multiple</span>\n      <span class="token attr-name">length</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">:files</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>files<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onChange<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">@fail</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onFail<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">@image-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onImageClick<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="多种图片预览模式"><a class="header-anchor" href="#多种图片预览模式" aria-hidden="true">#</a> 多种图片预览模式</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtImagePicker</span>\n      <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>top<span class="token punctuation">&#39;</span></span>\n      <span class="token attr-name">:files</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>files<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onChange<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">@fail</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onFail<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">@image-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onImageClick<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="参数"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>files</td><td>图片文件数组, 元素为对象, 包含属性 url（必选),属性为<code>type: &#39;btn&#39;</code> 则呈现图片选择块</td><td>Array</td><td>-</td><td>[]</td></tr><tr><td>mode</td><td>图片预览模式，详见<a href="https://developers.weixin.qq.com/miniprogram/dev/component/image.html" target="_blank" rel="noopener noreferrer">微信开发者文档</a></td><td>String</td><td><code>&#39;scaleToFill&#39;|&#39;aspectFit&#39;|&#39;aspectFill&#39;|&#39;widthFix&#39;|&#39;top&#39;|&#39;bottom&#39;|&#39;center&#39;|&#39;left&#39;|&#39;right&#39;|&#39;top left&#39;|&#39;top right&#39;|&#39;bottom left&#39;|&#39;bottom right&#39;</code></td><td>aspectFill</td></tr><tr><td>showAddBtn</td><td>是否显示添加图片按钮</td><td>Boolean</td><td>-</td><td>true</td></tr><tr><td>multiple</td><td>是否支持多选</td><td>Boolean</td><td>-</td><td>false</td></tr><tr><td>count</td><td>最多可以选择的图片张数</td><td>Number</td><td>0 ～ 99</td><td>默认为1，当multiple为true时候，为99，此选项设置和multiple冲突时，以该项优先</td></tr><tr><td>sizeType</td><td>所选的图片的尺寸</td><td>Array</td><td>-</td><td>[&#39;original&#39;, &#39;compressed&#39;]</td></tr><tr><td>sourceType</td><td>选择图片的来源</td><td>Array</td><td>-</td><td>[&#39;album&#39;, &#39;camera&#39;]</td></tr><tr><td>length</td><td>单行的图片数量</td><td>Number</td><td>-</td><td>4</td></tr></tbody></table><h2 id="事件"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2><table><thead><tr><th>事件名称</th><th>说明</th><th>返回参数</th></tr></thead><tbody><tr><td>onChange</td><td>files 值发生变化触发的回调函数, operationType 操作类型有添加，移除，如果是移除操作，则第三个参数代表的是移除图片的索引</td><td>(files: Array, operationType: string, index: number) =&gt; void</td></tr><tr><td>onImageClick</td><td>点击图片触发的回调</td><td>(index: number, file: Object) =&gt; void</td></tr><tr><td>onFail</td><td>选择失败触发的回调</td><td>(msg: string) =&gt; void</td></tr></tbody></table>',22);p.render=function(s,t,p,o,c,l){return n(),a("div",null,[e])};export default p;export{t as __pageData};
