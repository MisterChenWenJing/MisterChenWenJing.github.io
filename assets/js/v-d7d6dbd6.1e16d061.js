"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[82444],{68789:(n,s,a)=>{a.r(s),a.d(s,{default:()=>k});var e=a(78e3);const t=a.p+"assets/img/intellisense.4ece6652.gif",o=a.p+"assets/img/context-menu.6cd13bef.gif",p=a.p+"assets/img/goto-definition.f0106b41.gif",r=a.p+"assets/img/rename.789aaed4.gif",l=a.p+"assets/img/replace.ba4e361e.png",c=(0,e.uE)('<p>使用 <code>Ctrl + Space</code> 触发智能提示组件。</p><p><img src="'+t+'" alt="智能提示组件"></p><p>您可以查看可用的方法，参数提示，简短文档等。</p><h2 id="跳转" tabindex="-1"><a class="header-anchor" href="#跳转" aria-hidden="true">#</a> 跳转</h2><p>选择一个符号然后输入 <code>Alt + F12</code>，您就可以使用上下文菜单了。</p><p><img src="'+o+'" alt="上下文菜单"></p><h2 id="跳转到定义" tabindex="-1"><a class="header-anchor" href="#跳转到定义" aria-hidden="true">#</a> 跳转到定义</h2><p>选择一个符号然后输入 <code>F12</code>，您也可以使用上下文菜单或 <code>Ctrl + Click</code></p><p><img src="'+p+'" alt="跳转到定义"></p><p>您可以使用 <strong>转到 &gt; 返回</strong> 命令或快捷键 <code>Alt + ←</code> 来返回您的上个位置。</p><h2 id="跳转到引用" tabindex="-1"><a class="header-anchor" href="#跳转到引用" aria-hidden="true">#</a> 跳转到引用</h2><p>选择一个符号输入 <code>Shift + F12</code>，即可打开上下文菜单查看所有引用。</p><h2 id="查看所有引用" tabindex="-1"><a class="header-anchor" href="#查看所有引用" aria-hidden="true">#</a> 查看所有引用</h2><p>选择一个符号，然后按 <code>Shift + Alt + F12</code> 打开 <strong>引用</strong> 视图，在专用视图中显示文件的所有符号。</p><h2 id="重命名符号" tabindex="-1"><a class="header-anchor" href="#重命名符号" aria-hidden="true">#</a> 重命名符号</h2><p>选择一个符号，然后按下 <code>F2</code>。或者，您可以使用上下文菜单。</p><p><img src="'+r+'" alt="重命名符号"></p><h2 id="搜索和修改" tabindex="-1"><a class="header-anchor" href="#搜索和修改" aria-hidden="true">#</a> 搜索和修改</h2><p>除了搜索和替换表达式之外，您还可以使用带有捕获组的正则表达式搜索和重用匹配的部分。通过单击 <strong>使用正则表达式</strong> <code>.*</code> 按钮(<code>Alt + R</code>)在搜索框中启用正则表达式，然后编写正则表达式并使用括号定义组。然后，您可以在替换字段使用 <code>$1</code>，<code>$2</code> 等来输入每个组中匹配的内容。</p><p><img src="'+l+'" alt="搜索和修改"></p><h2 id="eslintrc-json" tabindex="-1"><a class="header-anchor" href="#eslintrc-json" aria-hidden="true">#</a> .eslintrc.json</h2><p>安装 ESLint 扩展，并根据您的需要配置。请查阅 ESLint 规范以获取有关其格式化规则和选项的详细信息。</p><p>这是使用 ES6 的配置。</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;browser&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;commonjs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;es6&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;node&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;parserOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;ecmaVersion&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;sourceType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;ecmaFeatures&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;jsx&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;classes&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;defaultParams&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;no-const-assign&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;no-extra-semi&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;semi&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;no-fallthrough&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;no-empty&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;no-mixed-spaces-and-tabs&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;no-redeclare&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;no-this-before-super&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;no-undef&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;no-unreachable&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;no-use-before-define&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;constructor-super&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;curly&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;eqeqeq&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;func-names&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;valid-typeof&quot;</span><span class="token operator">:</span> <span class="token number">1</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="package-json" tabindex="-1"><a class="header-anchor" href="#package-json" aria-hidden="true">#</a> package.json</h2><p>IntelliSense 会为 package.json 文件提供智能提示。</p><h2 id="emmet-语法" tabindex="-1"><a class="header-anchor" href="#emmet-语法" aria-hidden="true">#</a> Emmet 语法</h2>',27),i=(0,e.Uk)("支持 "),u=(0,e.Uk)("Emmet 语法"),d=(0,e.Uk)("。"),m={},k=(0,a(13860).Z)(m,[["render",function(n,s){const a=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.iD)("div",null,[c,(0,e._)("p",null,[i,(0,e.Wm)(a,{to:"/code/website/emmet/"},{default:(0,e.w5)((()=>[u])),_:1}),d])])}]])},13860:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},62802:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e=JSON.parse('{"key":"v-d7d6dbd6","path":"/software/vscode/guide/intellisense.html","title":"智能提示","lang":"zh-CN","frontmatter":{"title":"智能提示","icon":"creative","category":["VS Code"],"tag":["VS Code","软件"],"summary":"--- title: 智能提示 icon: creative category: VS Code tag: VS Code; 软件; --- 使用 Ctrl + Space 触发智能提示组件。 您可以查看可用的方法，参数提示，简短文档等。 跳转 选择一个符号然后输入 Alt + F12，您就可以使用上下文菜单了。 跳转到定义 选择一个符号然后输入 F12，您","head":[["meta",{"property":"og:url","content":"https://github.com/MisterChen9527/software/vscode/guide/intellisense.html"}],["meta",{"property":"og:site_name","content":"Mr.Chen"}],["meta",{"property":"og:title","content":"智能提示"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://github.com/MisterChen9527/"}],["meta",{"property":"og:updated_time","content":"2022-08-20T08:54:00.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"智能提示"}],["meta",{"property":"article:tag","content":"VS Code"}],["meta",{"property":"article:tag","content":"软件"}],["meta",{"property":"article:modified_time","content":"2022-08-20T08:54:00.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"跳转","slug":"跳转","children":[]},{"level":2,"title":"跳转到定义","slug":"跳转到定义","children":[]},{"level":2,"title":"跳转到引用","slug":"跳转到引用","children":[]},{"level":2,"title":"查看所有引用","slug":"查看所有引用","children":[]},{"level":2,"title":"重命名符号","slug":"重命名符号","children":[]},{"level":2,"title":"搜索和修改","slug":"搜索和修改","children":[]},{"level":2,"title":".eslintrc.json","slug":"eslintrc-json","children":[]},{"level":2,"title":"package.json","slug":"package-json","children":[]},{"level":2,"title":"Emmet 语法","slug":"emmet-语法","children":[]}],"git":{"createdTime":1660985640000,"updatedTime":1660985640000,"contributors":[{"name":"陈文景","email":"2646530197@qq.com","commits":1}]},"readingTime":{"minutes":1.8,"words":539},"copyright":"著作权归Mr.Chen所有\\n基于MIT协议\\n原文链接：https://github.com/MisterChen9527/software/vscode/guide/intellisense.html","filePathRelative":"software/vscode/guide/intellisense.md","localizedDate":"2022年8月20日"}')}}]);