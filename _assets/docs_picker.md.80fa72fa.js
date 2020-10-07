import{f as t,g as a,B as n}from"./common-5e72c1c1.js";const s='{"title":"Picker 选择器","frontmatter":{},"headers":[{"level":2,"title":"使用指南","slug":"使用指南"},{"level":2,"title":"示例","slug":"示例"},{"level":2,"title":"普通选择器","slug":"普通选择器"},{"level":2,"title":"多列选择器","slug":"多列选择器"},{"level":2,"title":"时间选择器","slug":"时间选择器"},{"level":2,"title":"日期选择器","slug":"日期选择器"}],"relativePath":"docs/picker.md","lastUpdated":1602039689132.439}';var e={};const l=n('<h1 id="picker-选择器"><a class="header-anchor" href="#picker-选择器" aria-hidden="true">#</a> Picker 选择器</h1><hr><p>从底部弹起的滚动选择器，这里用的是微信小程序自带的 <code>Picker</code> 原生组件，<code>taro-ui-vue3</code> 引用的是 <code>taro</code> 封装的基础组件。 现支持四种选择器，通过 <code>mode</code> 来区分（默认是普通选择器），分别是：</p><ul><li>普通选择器</li><li>多列选择器</li><li>时间选择器</li><li>日期选择器</li></ul><h2 id="使用指南"><a class="header-anchor" href="#使用指南" aria-hidden="true">#</a> 使用指南</h2><h2 id="示例"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>example-item<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>picker</span>\n        <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>selector<span class="token punctuation">&#39;</span></span>\n        <span class="token attr-name">:range</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selector<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectorValue<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChange<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">@cancel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleCancel<span class="token punctuation">&quot;</span></span>\n      <span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>demo-list-item<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>demo-list-item__label<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>国家地区<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>demo-list-item__value<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>\n            {{ selector[selectorValue] }}\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>picker</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>example-item<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>picker</span>\n        <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>time<span class="token punctuation">&#39;</span></span>\n        <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>timeSel<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleTimeChange<span class="token punctuation">&quot;</span></span>\n      <span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>demo-list-item<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>demo-list-item__label<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>请选择时间<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>demo-list-item__value<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>{{ timeSel }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>picker</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>example-item<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>picker</span>\n        <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>date<span class="token punctuation">&#39;</span></span>\n        <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dateSel<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleDateChange<span class="token punctuation">&quot;</span></span>\n      <span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>demo-list-item<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>demo-list-item__label<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>请选择日期<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>demo-list-item__value<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>{{ dateSel }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>picker</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>panel<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>panel__title<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>多列选择器<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>panel__content<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>example-item<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>picker</span>\n              <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>multiSelector<span class="token punctuation">&#39;</span></span>\n              <span class="token attr-name">:range</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>multiSelector<span class="token punctuation">&quot;</span></span>\n              <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mulitSelectorValues<span class="token punctuation">&quot;</span></span>\n              <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleMulitChange<span class="token punctuation">&quot;</span></span>\n              <span class="token attr-name">@columnchange</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleColumnChange<span class="token punctuation">&quot;</span></span>\n            <span class="token punctuation">&gt;</span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>demo-list-item<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>demo-list-item__label<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>请选择早餐<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>demo-list-item__value<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>{{\n                  `${\n                  multiSelector[0][mulitSelectorValues[0]]\n                } &amp; ${multiSelector[1][mulitSelectorValues[1]]}`\n                  }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>picker</span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;PickerDemo&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      timeSel<span class="token operator">:</span> <span class="token string">&#39;06:18&#39;</span><span class="token punctuation">,</span>\n      selector<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;中国&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;美国&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;巴西&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;日本&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      selectorValue<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      dateSel<span class="token operator">:</span> <span class="token string">&#39;2018-06-18&#39;</span><span class="token punctuation">,</span>\n      multiSelector<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">[</span><span class="token string">&#39;饭&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;粥&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;粉&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token punctuation">[</span><span class="token string">&#39;猪肉&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;牛肉&#39;</span><span class="token punctuation">]</span>\n      <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      mulitSelectorValues<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">handleTimeChange</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>timeSel <span class="token operator">=</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>value\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">handleChange</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>selectorValue <span class="token operator">=</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>value\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">handleDateChange</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>dateSel <span class="token operator">=</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>value\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">handleCancel</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;handleCancel&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    <span class="token function">handleColumnChange</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;handleColumnChange&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="普通选择器"><a class="header-anchor" href="#普通选择器" aria-hidden="true">#</a> 普通选择器</h2><p>普通选择器：<code>mode = selector</code></p><table><thead><tr><th style="text-align:left;">微信</th><th style="text-align:left;">H5</th><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">可选值</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">√</td><td style="text-align:left;">√</td><td style="text-align:left;">range</td><td style="text-align:left;">mode 为 selector 或 multiSelector 时，range 有效</td><td style="text-align:left;">Array / Object Array</td><td style="text-align:left;">-</td><td style="text-align:left;">[]</td></tr><tr><td style="text-align:left;">√</td><td style="text-align:left;">√</td><td style="text-align:left;">rangeKey</td><td style="text-align:left;">当 range 是一个 Object Array 时，通过 rangeKey 来指定 Object 中 key 的值作为选择器显示内容</td><td style="text-align:left;">String</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">√</td><td style="text-align:left;">√</td><td style="text-align:left;">value</td><td style="text-align:left;">value 的值表示选择了 range 中的第几个（下标从 0 开始）</td><td style="text-align:left;">Number</td><td style="text-align:left;">-</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:left;">√</td><td style="text-align:left;">√</td><td style="text-align:left;">change</td><td style="text-align:left;">value 改变时触发 change 事件，event.detail = value: value</td><td style="text-align:left;">EventHandle</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">√</td><td style="text-align:left;">√</td><td style="text-align:left;">cancel</td><td style="text-align:left;">取消选择或点遮罩层收起 picker 时触发</td><td style="text-align:left;">EventHandle</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">√</td><td style="text-align:left;">√</td><td style="text-align:left;">disabled</td><td style="text-align:left;">是否禁用</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr></tbody></table><h2 id="多列选择器"><a class="header-anchor" href="#多列选择器" aria-hidden="true">#</a> 多列选择器</h2><p>多列选择器：<code>mode = multiSelector</code></p><table><thead><tr><th style="text-align:left;">微信</th><th style="text-align:left;">H5</th><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">可选值</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">√</td><td style="text-align:left;">√</td><td style="text-align:left;">range</td><td style="text-align:left;">mode 为 selector 或 multiSelector 时，range 有效。二维数组，长度表示多少列，数组的每项表示每列的数据，如[[&#39;a&#39;,&#39;b&#39;], [&#39;c&#39;,&#39;d&#39;]]</td><td style="text-align:left;">二维 Array / 二维 Object Array</td><td style="text-align:left;">-</td><td style="text-align:left;">[]</td></tr><tr><td style="text-align:left;">√</td><td style="text-align:left;">√</td><td style="text-align:left;">rangeKey</td><td style="text-align:left;">当 range 是一个 二维 Object Array 时，通过 rangeKey 来指定 Object 中 key 的值作为选择器显示内容</td><td style="text-align:left;">String</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">√</td><td style="text-align:left;">√</td><td style="text-align:left;">value</td><td style="text-align:left;">value 的值表示选择了 range 中的第几个（下标从 0 开始）</td><td style="text-align:left;">Array</td><td style="text-align:left;">-</td><td style="text-align:left;">[]</td></tr><tr><td style="text-align:left;">√</td><td style="text-align:left;">√</td><td style="text-align:left;">change</td><td style="text-align:left;">value 改变时触发 change 事件，event.detail = value: value</td><td style="text-align:left;">EventHandle</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">√</td><td style="text-align:left;">√</td><td style="text-align:left;">columnchange</td><td style="text-align:left;">某一列的值改变时触发 columnchange 事件，event.detail = column: column, value: value，column 的值表示改变了第几列（下标从 0 开始），value 的值表示变更值的下标</td><td style="text-align:left;">EventHandle</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">√</td><td style="text-align:left;">√</td><td style="text-align:left;">cancel</td><td style="text-align:left;">取消选择时触发</td><td style="text-align:left;">EventHandle</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">√</td><td style="text-align:left;">√</td><td style="text-align:left;">disabled</td><td style="text-align:left;">是否禁用</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr></tbody></table><h2 id="时间选择器"><a class="header-anchor" href="#时间选择器" aria-hidden="true">#</a> 时间选择器</h2><p>时间选择器：<code>mode = time</code></p><table><thead><tr><th style="text-align:left;">微信</th><th style="text-align:left;">H5</th><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">可选值</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">√</td><td style="text-align:left;">√</td><td style="text-align:left;">value</td><td style="text-align:left;">表示选中的时间，格式为&#39;hh:mm&#39;</td><td style="text-align:left;">String</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">√</td><td style="text-align:left;">√</td><td style="text-align:left;">start</td><td style="text-align:left;">表示有效时间范围的开始，字符串格式为&#39;hh:mm&#39;</td><td style="text-align:left;">String</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">√</td><td style="text-align:left;">√</td><td style="text-align:left;">end</td><td style="text-align:left;">表示有效时间范围的结束，字符串格式为&#39;hh:mm&#39;</td><td style="text-align:left;">String</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">√</td><td style="text-align:left;">√</td><td style="text-align:left;">change</td><td style="text-align:left;">value 改变时触发 change 事件，event.detail = value: value</td><td style="text-align:left;">EventHandle</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">√</td><td style="text-align:left;">√</td><td style="text-align:left;">cancel</td><td style="text-align:left;">取消选择或点遮罩层收起 picker 时触发</td><td style="text-align:left;">EventHandle</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">√</td><td style="text-align:left;">√</td><td style="text-align:left;">disabled</td><td style="text-align:left;">是否禁用</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr></tbody></table><h2 id="日期选择器"><a class="header-anchor" href="#日期选择器" aria-hidden="true">#</a> 日期选择器</h2><p>日期选择器：<code>mode = date</code></p><table><thead><tr><th style="text-align:left;">微信</th><th style="text-align:left;">H5</th><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">可选值</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">√</td><td style="text-align:left;">√</td><td style="text-align:left;">value</td><td style="text-align:left;">表示选中的日期，格式为&#39;YYYY-MM-DD&#39;</td><td style="text-align:left;">String</td><td style="text-align:left;">-</td><td style="text-align:left;">new Date()</td></tr><tr><td style="text-align:left;">√</td><td style="text-align:left;">√</td><td style="text-align:left;">start</td><td style="text-align:left;">表示有效日期范围的开始，字符串格式为&#39;YYYY-MM-DD&#39;</td><td style="text-align:left;">String</td><td style="text-align:left;">-</td><td style="text-align:left;">1970-01-01</td></tr><tr><td style="text-align:left;">√</td><td style="text-align:left;">√</td><td style="text-align:left;">end</td><td style="text-align:left;">表示有效日期范围的结束，字符串格式为&#39;YYYY-MM-DD&#39;</td><td style="text-align:left;">String</td><td style="text-align:left;">-</td><td style="text-align:left;">2999-01-01</td></tr><tr><td style="text-align:left;">√</td><td style="text-align:left;">√</td><td style="text-align:left;">fields</td><td style="text-align:left;">表示选择器的粒度</td><td style="text-align:left;">String</td><td style="text-align:left;"><code>year</code>、<code>month</code>、<code>day</code></td><td style="text-align:left;">day</td></tr><tr><td style="text-align:left;">√</td><td style="text-align:left;">√</td><td style="text-align:left;">change</td><td style="text-align:left;">value 改变时触发 change 事件，event.detail = value: value</td><td style="text-align:left;">EventHandle</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">√</td><td style="text-align:left;">√</td><td style="text-align:left;">cancel</td><td style="text-align:left;">取消选择或点遮罩层收起 picker 时触发</td><td style="text-align:left;">EventHandle</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">√</td><td style="text-align:left;">√</td><td style="text-align:left;">disabled</td><td style="text-align:left;">是否禁用</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">-</td><td style="text-align:left;">false</td></tr></tbody></table>',19);e.render=function(n,s,e,p,o,c){return t(),a("div",null,[l])};export default e;export{s as __pageData};
