import{f as a,g as n,B as t}from"./common-5e72c1c1.js";const s='{"title":"Input 按钮","frontmatter":{},"headers":[{"level":2,"title":"使用指南","slug":"使用指南"},{"level":2,"title":"一般用法","slug":"一般用法"},{"level":2,"title":"不同输入框类型","slug":"不同输入框类型"},{"level":2,"title":"不同状态","slug":"不同状态"},{"level":2,"title":"自定义右边栏","slug":"自定义右边栏"},{"level":2,"title":"Input 参数","slug":"input-参数"},{"level":2,"title":"Input 事件","slug":"input-事件"}],"relativePath":"docs/input.md","lastUpdated":1602045059599.958}';var p={};const e=t('<h1 id="input-按钮"><a class="header-anchor" href="#input-按钮" aria-hidden="true">#</a> Input 按钮</h1><hr><p>用于接受单行文本，支持文本、密码、数字、手机号码、银行卡等类型的输入。</p><p>用户可控制是否显示输入框标题，是否出现清除按钮，输入框状态，还可以自定义 Input 组件的右边栏，实现自定义按钮、验证码输入框等。</p><h2 id="使用指南"><a class="header-anchor" href="#使用指南" aria-hidden="true">#</a> 使用指南</h2><p>在 Taro 文件中引入组件</p><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> AtInput<span class="token punctuation">,</span> AtForm <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;taro-ui-vue3&#39;</span>\n</code></pre></div><p><strong>组件依赖的样式文件（仅按需引用时需要）</strong></p><div class="language-scss"><pre><code><span class="token keyword">@import</span> <span class="token string">&quot;taro-ui-vue3/dist/style/components/input.scss&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">@import</span> <span class="token string">&quot;taro-ui-vue3/dist/style/components/icon.scss&quot;</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="一般用法"><a class="header-anchor" href="#一般用法" aria-hidden="true">#</a> 一般用法</h2><p>说明：</p><ul><li><p>由于微信开发者工具的问题，Input 的 placeholder 在 value 存在的情况下，会出现重叠，在真机上不会出现此问题，可以忽略</p></li><li><p>由于微信开发者工具的问题，输入法输入中文的时候，maxLength 会限制输入过程中的字符，导致无法输入完整的中文，在真机上不会出现此问题，可以忽略</p></li><li><p>该组件为受控组件，开发者需要通过 onChange 事件来更新 value 值变化，value 与 onChange 函数必填。在小程序中，如果想改变 value 的值，需要 <code>return value</code> 从而改变输入框的当前值</p></li><li><p>由于小程序组件化的限制，AtInput 嵌套在 AtForm 或原生小程序组件 Form 中的时候，onSubmit 事件获得的 event 中的 event.detail.value 始终为空对象，开发者要获取数据，可以自行在页面的 state 中获取</p></li><li><p>由于此组件是基于小程序的 Input 进行封装，该组件是原生组件，使用前请阅读<a href="https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html" target="_blank" rel="noopener noreferrer">使用限制</a></p></li></ul><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtInput</span>\n      <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>value1<span class="token punctuation">&#39;</span></span>\n      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>标准五个字<span class="token punctuation">&#39;</span></span>\n      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>text<span class="token punctuation">&#39;</span></span>\n      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>标准五个字<span class="token punctuation">&#39;</span></span>\n      <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value1<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleInput<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;AtInputDemo&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      value1<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">handleInput</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>value1 <span class="token operator">=</span> val\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="不同输入框类型"><a class="header-anchor" href="#不同输入框类型" aria-hidden="true">#</a> 不同输入框类型</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtForm</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtInput</span>\n    <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>value1<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>文本<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>text<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>单行文本<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value1<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChange<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtInput</span>\n    <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>value2<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>数字<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>number<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>请输入数字<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value2<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChange<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtInput</span>\n    <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>value3<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>密码<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>password<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>密码不能少于10位数<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value3<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChange<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtInput</span>\n    <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>value4<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>身份证<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>idcard<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>身份证号码<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value4<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChange<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtInput</span>\n    <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>value5<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>小数<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>digit<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>请输入小数<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value5<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChange<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtInput</span>\n    <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>value6<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">:border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>手机号码<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>phone<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>手机号码<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value6<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChange<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AtForm</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="不同状态"><a class="header-anchor" href="#不同状态" aria-hidden="true">#</a> 不同状态</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtForm</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtInput</span>\n    <span class="token attr-name">disabled</span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>禁用<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>text<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>禁止输入<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value1<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChange<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtInput</span>\n    <span class="token attr-name">error</span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>出现错误<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>text<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>点击按钮触发回调<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value2<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChange<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@error-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleClick<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtInput</span>\n    <span class="token attr-name">:editable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>不可编辑<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>text<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>不可编辑<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value3<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChange<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtInput</span>\n    <span class="token attr-name">clear</span>\n    <span class="token attr-name">:border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>清除按钮<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>点击清除按钮清空内容<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>text<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value4<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChange<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtInput</span> \n    <span class="token attr-name">required</span>\n    <span class="token attr-name">:border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>  \n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>必填项<span class="token punctuation">&#39;</span></span> \n    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>text<span class="token punctuation">&#39;</span></span> \n    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>必填项<span class="token punctuation">&#39;</span></span> \n    <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value5<span class="token punctuation">&quot;</span></span> \n    <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleInput<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AtForm</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="自定义右边栏"><a class="header-anchor" href="#自定义右边栏" aria-hidden="true">#</a> 自定义右边栏</h2><div class="language-html"><pre><code>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtInput</span>\n  <span class="token attr-name">clear</span>\n  <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>验证码<span class="token punctuation">&#39;</span></span>\n  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>text<span class="token punctuation">&#39;</span></span>\n  <span class="token attr-name">maxLength</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>4<span class="token punctuation">&#39;</span></span>\n  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>验证码<span class="token punctuation">&#39;</span></span>\n  <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChange<span class="token punctuation">&quot;</span></span>\n<span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Image</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>https://aotu.io/img.png<span class="token punctuation">&#39;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AtInput</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="input-参数"><a class="header-anchor" href="#input-参数" aria-hidden="true">#</a> Input 参数</h2><table><thead><tr><th>参数</th><th>微信小程序</th><th>h5</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>√</td><td>√</td><td>输入框的唯一标识，有传入点击 title 会聚焦输入框</td><td>String</td><td>-</td><td>-</td></tr><tr><td>type</td><td>√</td><td>√</td><td>输入框类型</td><td>String</td><td><code>text</code>,<code>number</code>,<code>password</code>,<code>phone</code>,<code>idcard</code>,<code>digit</code></td><td><code>text</code></td></tr><tr><td>value</td><td>√</td><td>√</td><td>输入框当前值，开发者需要通过 onChange 事件来更新 value 值，必填</td><td>String</td><td>-</td><td>-</td></tr><tr><td>placeholder</td><td>√</td><td>√</td><td>占位符</td><td>String</td><td>-</td><td>-</td></tr><tr><td>placeholderStyle</td><td>√</td><td>x</td><td>指定 placeholder 的样式，只在小程序有效</td><td>String</td><td>-</td><td>-</td></tr><tr><td>placeholderClass</td><td>√</td><td>x</td><td>指定 placeholder 的样式类，只在小程序有效</td><td>String</td><td>-</td><td>-</td></tr><tr><td>title</td><td>√</td><td>√</td><td>输入框左侧标题，若传入为空，则不显示标题</td><td>String</td><td>-</td><td>-</td></tr><tr><td>maxLength</td><td>√</td><td>√</td><td>最大长度</td><td>Number</td><td>-</td><td>140</td></tr><tr><td>cursorSpacing</td><td>√</td><td>x</td><td>指定光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离,只在微信小程序有效</td><td>Number</td><td>-</td><td>50</td></tr><tr><td>confirmType</td><td>√</td><td>x</td><td>设置键盘右下角按钮的文字,只在小程序有效</td><td>String</td><td>-</td><td>&#39;完成&#39;</td></tr><tr><td>cursor</td><td>√</td><td>x</td><td>指定 focus 时的光标位置</td><td>Number</td><td>-</td><td>-</td></tr><tr><td>selectionStart</td><td>√</td><td>x</td><td>光标起始位置，自动聚集时有效，需与 selection-end 搭配使用</td><td>Number</td><td>-</td><td>-1</td></tr><tr><td>selectionEnd</td><td>√</td><td>x</td><td>光标结束位置，自动聚集时有效，需与 selection-start 搭配使用</td><td>Number</td><td>-</td><td>-1</td></tr><tr><td>adjustPosition</td><td>√</td><td>x</td><td>键盘弹起时，是否自动上推页面</td><td>Boolean</td><td>-</td><td>true</td></tr><tr><td>disabled</td><td>√</td><td>√</td><td>是否禁止输入，禁止点击按钮</td><td>Boolean</td><td>-</td><td>false</td></tr><tr><td>border</td><td>√</td><td>√</td><td>是否显示下划线边框</td><td>Boolean</td><td>-</td><td>true</td></tr><tr><td>editable</td><td>√</td><td>√</td><td>是否可编辑</td><td>Boolean</td><td>-</td><td>True</td></tr><tr><td>error</td><td>√</td><td>√</td><td>是否出现错误</td><td>Boolean</td><td>-</td><td>false</td></tr><tr><td>clear</td><td>√</td><td>√</td><td>是否显示清除按钮，需要传入 onChange 事件来改变value</td><td>Boolean</td><td>-</td><td>false</td></tr><tr><td>autoFocus</td><td>√</td><td>x</td><td>是否自动聚焦</td><td>Boolean</td><td>-</td><td>false</td></tr><tr><td>focus</td><td>√</td><td>√</td><td>是否聚焦</td><td>Boolean</td><td>-</td><td>false</td></tr><tr><td>required</td><td>√</td><td>√</td><td>是否必填</td><td>Boolean</td><td>-</td><td>false</td></tr></tbody></table><h2 id="input-事件"><a class="header-anchor" href="#input-事件" aria-hidden="true">#</a> Input 事件</h2><table><thead><tr><th>事件名称</th><th>微信小程序</th><th>h5</th><th>说明</th><th>返回参数</th></tr></thead><tbody><tr><td>onChange</td><td>√</td><td>√</td><td>输入框值改变时触发的事件，开发者需要通过 onChange 事件来更新 value 值变化，onChange 函数必填。小程序中，如果想改变 value 的值，需要 <code>return value</code> 从而改变输入框的当前值, 可以获取 event 参数</td><td>(value,event) =&gt; void</td></tr><tr><td>onFocus</td><td>√</td><td>√</td><td>输入框被选中时触发的事件，可以获取 event 参数</td><td>(value,event) =&gt; void</td></tr><tr><td>onBlur</td><td>√</td><td>√</td><td>输入框失去焦点时触发的事件，可以获取 event 参数</td><td>(value,event) =&gt; void</td></tr><tr><td>onConfirm</td><td>√</td><td>x</td><td>点击完成按钮时触发，可以获取 event 参数</td><td>(value,event) =&gt; void</td></tr><tr><td>onErrorClick</td><td>√</td><td>√</td><td>点击错误按钮触发的事件</td><td>() =&gt; void</td></tr><tr><td>onClick</td><td>√</td><td>√</td><td>当 editable 为 false时，点击组件触发的事件</td><td>() =&gt; void</td></tr><tr><td>onKeyboardHeightChange</td><td>√</td><td></td><td>键盘高度发生变化的时候触发此事件</td><td>(event) =&gt; void</td></tr></tbody></table>',23);p.render=function(t,s,p,o,u,c){return a(),n("div",null,[e])};export default p;export{s as __pageData};
