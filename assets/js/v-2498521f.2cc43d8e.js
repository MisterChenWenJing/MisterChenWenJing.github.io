"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[25430],{55313:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});var e=a(78e3);const t=[(0,e.uE)('<p>在开始使用 <code>Webpack</code> 之前，我们需要对 <code>Webpack</code> 的配置有一定的认识。</p><h2 id="_5-大核心概念" tabindex="-1"><a class="header-anchor" href="#_5-大核心概念" aria-hidden="true">#</a> 5 大核心概念</h2><ol><li>entry（入口）</li></ol><p>指示 Webpack 从哪个文件开始打包</p><ol start="2"><li>output（输出）</li></ol><p>指示 Webpack 打包完的文件输出到哪里去，如何命名等</p><ol start="3"><li>loader（加载器）</li></ol><p>webpack 本身只能处理 js、json 等资源，其他资源需要借助 loader，Webpack 才能解析</p><ol start="4"><li>plugins（插件）</li></ol><p>扩展 Webpack 的功能</p><ol start="5"><li>mode（模式）</li></ol><p>主要由两种模式：</p><ul><li>开发模式：development</li><li>生产模式：production</li></ul><h2 id="准备-webpack-配置文件" tabindex="-1"><a class="header-anchor" href="#准备-webpack-配置文件" aria-hidden="true">#</a> 准备 Webpack 配置文件</h2><p>在项目根目录下新建文件：<code>webpack.config.js</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 入口</span>\n  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>\n  <span class="token comment">// 输出</span>\n  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// 加载器</span>\n  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// 插件</span>\n  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token comment">// 模式</span>\n  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Webpack 是基于 Node.js 运行的，所以采用 Common.js 模块化规范</p><h2 id="修改配置文件" tabindex="-1"><a class="header-anchor" href="#修改配置文件" aria-hidden="true">#</a> 修改配置文件</h2><ol><li>配置文件</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Node.js的核心模块，专门用来处理文件路径</span>\n<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 入口</span>\n  <span class="token comment">// 相对路径和绝对路径都行</span>\n  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;./src/main.js&quot;</span><span class="token punctuation">,</span>\n  <span class="token comment">// 输出</span>\n  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// path: 文件输出目录，必须是绝对路径</span>\n    <span class="token comment">// path.resolve()方法返回一个绝对路径</span>\n    <span class="token comment">// __dirname 当前文件的文件夹绝对路径</span>\n    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token comment">// filename: 输出文件名</span>\n    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;main.js&quot;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// 加载器</span>\n  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// 插件</span>\n  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token comment">// 模式</span>\n  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 开发模式</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>运行指令</li></ol><div class="language-text ext-text"><pre class="language-text"><code>npx webpack\n</code></pre></div><p>此时功能和之前一样，也不能处理样式资源</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>Webpack 将来都通过 <code>webpack.config.js</code> 文件进行配置，来增强 Webpack 的功能</p><p>我们后面会以两个模式来分别搭建 Webpack 的配置，先进行开发模式，再完成生产模式</p>',26)],p={},o=(0,a(13860).Z)(p,[["render",function(n,s){return(0,e.wg)(),(0,e.iD)("div",null,t)}]])},13860:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},82257:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e=JSON.parse('{"key":"v-2498521f","path":"/note/webpack/base/config.html","title":"基本配置","lang":"zh-CN","frontmatter":{"title":"基本配置","order":2,"category":["WebPack"],"tag":["WebPack"],"summary":"--- title: 基本配置 order: 2 category: WebPack tag: WebPack; --- 在开始使用 Webpack 之前，我们需要对 Webpack 的配置有一定的认识。 5 大核心概念 1. entry（入口） 指示 Webpack 从哪个文件开始打包 2. output（输出） 指示 Webpack 打包完的文件输出到哪","head":[["meta",{"property":"og:url","content":"https://github.com/MisterChen9527/note/webpack/base/config.html"}],["meta",{"property":"og:site_name","content":"Mr.Chen"}],["meta",{"property":"og:title","content":"基本配置"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-21T05:53:33.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"WebPack"}],["meta",{"property":"article:modified_time","content":"2022-08-21T05:53:33.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"5 大核心概念","slug":"_5-大核心概念","children":[]},{"level":2,"title":"准备 Webpack 配置文件","slug":"准备-webpack-配置文件","children":[]},{"level":2,"title":"修改配置文件","slug":"修改配置文件","children":[]},{"level":2,"title":"小结","slug":"小结","children":[]}],"git":{"createdTime":1661061213000,"updatedTime":1661061213000,"contributors":[{"name":"陈文景","email":"2646530197@qq.com","commits":1}]},"readingTime":{"minutes":1.38,"words":414},"copyright":"著作权归Mr.Chen所有\\n基于MIT协议\\n原文链接：https://github.com/MisterChen9527/note/webpack/base/config.html","filePathRelative":"note/webpack/base/config.md","localizedDate":"2022年8月21日"}')}}]);