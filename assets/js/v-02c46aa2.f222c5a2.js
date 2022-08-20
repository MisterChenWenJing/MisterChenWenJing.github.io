"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[87461],{98750:(a,n,t)=>{t.r(n),t.d(n,{default:()=>E});var s=t(78e3);const e=(0,s._)("p",null,[(0,s.Uk)("在页面加载完成的时候，标签 "),(0,s._)("code",null,"<head>"),(0,s.Uk)(" 里的内容，是不会在页面中显示出来的。")],-1),l=(0,s._)("p",null,[(0,s._)("code",null,"<head>"),(0,s.Uk)(" 包含了像页面的 "),(0,s._)("code",null,"<title>"),(0,s.Uk)("(标题) ,CSS (如果您选择用 CSS 来为 HTML 内容添加样式)，指向自定义图标的链接和其他的元数据 (描述 HTML 的数据，比如，作者，和描述文档的重要关键词)。")],-1),p=(0,s.uE)('<h2 id="html-头部" tabindex="-1"><a class="header-anchor" href="#html-头部" aria-hidden="true">#</a> HTML 头部</h2><p>HTML 头部是包含在 <code>&lt;head&gt;</code> 元素里面的内容。不像 <code>&lt;body&gt;</code> 元素的内容会显示在浏览器中，head 里面的内容不会在浏览器中显示，它的作用是包含一些页面的元数据。在下面的例子中，head 的内容很少。</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>My test page<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3),o=(0,s.Uk)("当然，在大型的页面中，head 会包含很多的元数据。您可以用 "),c=(0,s.Uk)("开发者工具"),i=(0,s.Uk)(" 去查看您喜欢的网页的 head 的内容。这里只会列出要包含在 head 里的主要元素。"),u=(0,s.uE)('<h2 id="title-元素" tabindex="-1"><a class="header-anchor" href="#title-元素" aria-hidden="true">#</a> <code>&lt;title&gt;</code> 元素</h2><p><code>&lt;title&gt;</code> 可以用来给 HTML 文档添加一个标题。您可能会将它和给 body 添加标题的 <code>&lt;h1&gt;</code> 元素混淆，有些时候 <code>&lt;h1&gt;</code> 也会被称作网页标题。但是它们是不同的。</p><ul><li>当被加载到浏览器中的时候，元素 <code>&lt;h1&gt;</code> 会出现在页面中 —— 通常它应该在一个页面中只被使用一次，它被用来标记您的页面内容的标题(故事的标题，新闻标题或者任何适当的方式)。</li><li>元素 <code>&lt;title&gt;</code> 用来表示整个 HTML 文档标题的元数据(不是文档的内容)。</li></ul><p>直白点说，<code>&lt;h1&gt;</code> 会出现在页面上，而 <code>&lt;title&gt;</code> 会出现在选项卡或书签中。</p><h2 id="meta-元素" tabindex="-1"><a class="header-anchor" href="#meta-元素" aria-hidden="true">#</a> <code>&lt;meta&gt;</code> 元素</h2><p>元数据就是描述数据的数据，有很多不同种类的 <code>&lt;meta&gt;</code> 元素可以被包含进您的页面的 <code>&lt;head&gt;</code> 元素，下面仅为最常用的。</p><h3 id="指定编码" tabindex="-1"><a class="header-anchor" href="#指定编码" aria-hidden="true">#</a> 指定编码</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个元素简单的指定了文档的字符编码 —— 在这个文档中被允许使用的字符集。</p>',9),d={class:"custom-container info"},r=(0,s._)("p",{class:"custom-container-title"},"相关信息",-1),h=(0,s.Uk)("字符集的详情，请见 "),k=(0,s.Uk)("基础知识 → 字符集"),m=(0,s.uE)('<div class="custom-container warning"><p class="custom-container-title">注意</p><p>如果您指定了错误的编码，则整个网页都会乱码。</p></div><h3 id="添加作者和描述" tabindex="-1"><a class="header-anchor" href="#添加作者和描述" aria-hidden="true">#</a> 添加作者和描述</h3><p>许多 <code>&lt;meta&gt;</code> 元素包含了 <code>name</code> 和 <code>content</code> 特性:</p><ul><li><code>name</code> 指定了 meta 元素的类型； 说明该元素包含了什么类型的信息。</li><li><code>content</code> 指定了实际的元数据内容。</li></ul><p>这两个 meta 元素用于定义页面作者与提供页面简要描述。</p><div class="custom-container tip"><p class="custom-container-title">案例</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>author<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Mr.Chen<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>description<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Introduction about &lt;head&gt; tags<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div><p>指定作者在某些情况下是很有用的: 如果您需要联系页面的作者，问一些关于页面内容的问题。一些内容管理系统能够自动获取页面作者的信息，然后用于某些用途。</p><p>指定包含关于页面内容的关键字的页面内容的描述是很有用的，因为它可能或让您的页面在搜索引擎的相关的搜索出现得更多 (这些行为术语上被称为 Search Engine Optimization，简称 SEO.)</p>',8),g={class:"custom-container info"},v=(0,s._)("p",{class:"custom-container-title"},"相关信息",-1),b=(0,s.Uk)("关于 SEO 详情，请见 "),q=(0,s.Uk)("定义 → SEO"),f=(0,s.uE)('<h3 id="自定义图标" tabindex="-1"><a class="header-anchor" href="#自定义图标" aria-hidden="true">#</a> 自定义图标</h3><p>您可以在元数据中添加对自定义图标的引用。现代浏览器在各种场合使用 favicons，如打开的页面标签页和书签面板中的书签页面。</p><p>这个不起眼的图标已经存在很多很多年了，16 x 16 像素是这种图标的第一种类型。</p><p>页面添加图标的方式有:</p><ol><li><p>将其保存在与网站的索引页面相同的目录中，以 <code>.ico</code> 格式保存(大多数浏览器将支持更通用的格式，如 .gif 或.png，但使用 ICO 格式将确保它能在如 IE6 一样久远的浏览器显示)</p></li><li><p>将以下行添加到 HTML <code>&lt;head&gt;</code> 中以引用它</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>shortcut icon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>favicon.ico<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image/x-icon<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol>',5),M={class:"custom-container info"},_=(0,s._)("p",{class:"custom-container-title"},"相关信息",-1),T=(0,s.Uk)("更多元数据详情，请见 "),C={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta",target:"_blank",rel:"noopener noreferrer"},x=(0,s.Uk)("MDN Meta 标签"),L=(0,s.Uk)(")"),S=(0,s.uE)('<h2 id="为文档设定主语言" tabindex="-1"><a class="header-anchor" href="#为文档设定主语言" aria-hidden="true">#</a> 为文档设定主语言</h2><p>您应该添加 <code>lang</code> 属性到 HTML 开始标签中来为您的站点设定语言。</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh-CN<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token comment">&lt;!-- or --&gt;</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en-US<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您设置了 HTML 文档语言，那么该 HTML 文档就能被搜索引擎更有效地索引 (保证它在特定于语言的结果中正确显示)。同时，这对于那些使用屏幕阅读器的视障人士也很有用。(比如，法语和英语中都有 “six” 这个单词，但是发音却完全不同)</p><p>您还可以将文档的片段设置为不同的语言:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Chinese example: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh-CN<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>春眠不觉晓<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',6),y={},E=(0,t(13860).Z)(y,[["render",function(a,n){const t=(0,s.up)("RouterLink"),y=(0,s.up)("ExternalLinkIcon");return(0,s.wg)(),(0,s.iD)("div",null,[e,l,(0,s.kq)(" more "),p,(0,s._)("p",null,[o,(0,s.Wm)(t,{to:"/software/chrome.html#%E5%BC%80%E5%8F%91%E8%80%85%E5%B7%A5%E5%85%B7"},{default:(0,s.w5)((()=>[c])),_:1}),i]),u,(0,s._)("div",d,[r,(0,s._)("p",null,[h,(0,s.Wm)(t,{to:"/code/basic/encoding.html"},{default:(0,s.w5)((()=>[k])),_:1})])]),m,(0,s._)("div",g,[v,(0,s._)("p",null,[b,(0,s.Wm)(t,{to:"/code/website/html/definition/seo.html"},{default:(0,s.w5)((()=>[q])),_:1})])]),f,(0,s._)("div",M,[_,(0,s._)("p",null,[T,(0,s._)("a",C,[x,(0,s.Wm)(y)]),L])]),S])}]])},13860:(a,n)=>{n.Z=(a,n)=>{const t=a.__vccOpts||a;for(const[a,s]of n)t[a]=s;return t}},69388:(a,n,t)=>{t.r(n),t.d(n,{data:()=>s});const s=JSON.parse('{"key":"v-02c46aa2","path":"/code/website/html/intro/head.html","title":"head 标签","lang":"zh-CN","frontmatter":{"title":"head 标签","icon":"heading","date":"2019-09-02T00:00:00.000Z","category":["HTML"],"summary":"在页面加载完成的时候，标签 &lt;head&gt; 里的内容，是不会在页面中显示出来的。\\n&lt;head&gt; 包含了像页面的 &lt;title&gt;(标题) ,CSS (如果您选择用 CSS 来为 HTML 内容添加样式)，指向自定义图标的链接和其他的元数据 (描述 HTML 的数据，比如，作者，和描述文档的重要关键词)。\\n","head":[["meta",{"property":"og:url","content":"https://github.com/MisterChen9527/code/website/html/intro/head.html"}],["meta",{"property":"og:site_name","content":"Mr.Chen"}],["meta",{"property":"og:title","content":"head 标签"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-20T08:54:00.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2019-09-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-08-20T08:54:00.000Z"}]]},"excerpt":"<p>在页面加载完成的时候，标签 <code v-pre>&lt;head&gt;</code> 里的内容，是不会在页面中显示出来的。</p>\\n<p><code v-pre>&lt;head&gt;</code> 包含了像页面的 <code v-pre>&lt;title&gt;</code>(标题) ,CSS (如果您选择用 CSS 来为 HTML 内容添加样式)，指向自定义图标的链接和其他的元数据 (描述 HTML 的数据，比如，作者，和描述文档的重要关键词)。</p>\\n","headers":[{"level":2,"title":"HTML 头部","slug":"html-头部","children":[]},{"level":2,"title":"<title> 元素","slug":"title-元素","children":[]},{"level":2,"title":"<meta> 元素","slug":"meta-元素","children":[{"level":3,"title":"指定编码","slug":"指定编码","children":[]},{"level":3,"title":"添加作者和描述","slug":"添加作者和描述","children":[]},{"level":3,"title":"自定义图标","slug":"自定义图标","children":[]}]},{"level":2,"title":"为文档设定主语言","slug":"为文档设定主语言","children":[]}],"git":{"createdTime":1660985640000,"updatedTime":1660985640000,"contributors":[{"name":"陈文景","email":"2646530197@qq.com","commits":1}]},"readingTime":{"minutes":4.07,"words":1220},"copyright":"著作权归Mr.Chen所有\\n基于MIT协议\\n原文链接：https://github.com/MisterChen9527/code/website/html/intro/head.html","filePathRelative":"code/website/html/intro/head.md","localizedDate":"2019年9月2日"}')}}]);