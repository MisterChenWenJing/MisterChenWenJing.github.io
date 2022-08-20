"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[55028],{412:(n,s,e)=>{e.r(s),e.d(s,{default:()=>m});var a=e(78e3);const t=(0,a._)("p",null,"联合类型(Union Types)表示取值可以为多种类型中的一种。",-1),o=(0,a.uE)('<h2 id="简单的例子" tabindex="-1"><a class="header-anchor" href="#简单的例子" aria-hidden="true">#</a> 简单的例子</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> myFavoriteNumber<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\nmyFavoriteNumber <span class="token operator">=</span> <span class="token string">&quot;seven&quot;</span><span class="token punctuation">;</span>\nmyFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> myFavoriteNumber<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\nmyFavoriteNumber <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(2,1): error TS2322: Type &#39;boolean&#39; is not assignable to type &#39;string | number&#39;.</span>\n<span class="token comment">//   Type &#39;boolean&#39; is not assignable to type &#39;number&#39;.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>联合类型使用 <code>|</code> 分隔每个类型。</p><p>这里的 <code>let myFavoriteNumber: string | number</code> 的含义是，允许 <code>myFavoriteNumber</code> 的类型是 <code>string</code> 或者 <code>number</code>，但是不能是其他类型。</p><h2 id="访问联合类型的属性或方法" tabindex="-1"><a class="header-anchor" href="#访问联合类型的属性或方法" aria-hidden="true">#</a> 访问联合类型的属性或方法</h2><p>当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们<strong>只能访问此联合类型的所有类型里共有的属性或方法</strong>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getLength</span><span class="token punctuation">(</span>something<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> something<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// index.ts(2,22): error TS2339: Property &#39;length&#39; does not exist on type &#39;string | number&#39;.</span>\n<span class="token comment">//   Property &#39;length&#39; does not exist on type &#39;number&#39;.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例中，<code>length</code> 不是 <code>string</code> 和 <code>number</code> 的共有属性，所以会报错。</p><p>访问 <code>string</code> 和 <code>number</code> 的共有属性是没问题的:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getString</span><span class="token punctuation">(</span>something<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> something<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> myFavoriteNumber<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\nmyFavoriteNumber <span class="token operator">=</span> <span class="token string">&quot;seven&quot;</span><span class="token punctuation">;</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myFavoriteNumber<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>\nmyFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myFavoriteNumber<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 编译时报错</span>\n\n<span class="token comment">// index.ts(5,30): error TS2339: Property &#39;length&#39; does not exist on type &#39;number&#39;.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例中，第二行的 <code>myFavoriteNumber</code> 被推断成了 <code>string</code>，访问它的 <code>length</code> 属性不会报错。</p><p>而第四行的 <code>myFavoriteNumber</code> 被推断成了 <code>number</code>，访问它的 <code>length</code> 属性时就报错了。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',16),p={href:"http://www.typescriptlang.org/docs/handbook/advanced-types.html#union-types",target:"_blank",rel:"noopener noreferrer"},i=(0,a.Uk)("Advanced Types # Union Types"),c=(0,a.Uk)("("),r={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B",target:"_blank",rel:"noopener noreferrer"},l=(0,a.Uk)("中文版"),u=(0,a.Uk)(")"),d={},m=(0,e(13860).Z)(d,[["render",function(n,s){const e=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[t,(0,a.kq)(" more "),o,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("a",p,[i,(0,a.Wm)(e)]),c,(0,a._)("a",r,[l,(0,a.Wm)(e)]),u])])])}]])},13860:(n,s)=>{s.Z=(n,s)=>{const e=n.__vccOpts||n;for(const[n,a]of s)e[n]=a;return e}},90858:(n,s,e)=>{e.r(s),e.d(s,{data:()=>a});const a=JSON.parse('{"key":"v-552c52ec","path":"/code/language/typescript/basics/union-types.html","title":"联合类型","lang":"zh-CN","frontmatter":{"title":"联合类型","icon":"structure","category":["TypeScript"],"summary":"联合类型(Union Types)表示取值可以为多种类型中的一种。\\n","head":[["meta",{"property":"og:url","content":"https://github.com/MisterChen9527/code/language/typescript/basics/union-types.html"}],["meta",{"property":"og:site_name","content":"Mr.Chen"}],["meta",{"property":"og:title","content":"联合类型"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-20T08:54:00.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-08-20T08:54:00.000Z"}]]},"excerpt":"<p>联合类型(Union Types)表示取值可以为多种类型中的一种。</p>\\n","headers":[{"level":2,"title":"简单的例子","slug":"简单的例子","children":[]},{"level":2,"title":"访问联合类型的属性或方法","slug":"访问联合类型的属性或方法","children":[]},{"level":2,"title":"参考","slug":"参考","children":[]}],"git":{"createdTime":1660985640000,"updatedTime":1660985640000,"contributors":[{"name":"陈文景","email":"2646530197@qq.com","commits":1}]},"readingTime":{"minutes":1.32,"words":396},"copyright":"著作权归Mr.Chen所有\\n基于MIT协议\\n原文链接：https://github.com/MisterChen9527/code/language/typescript/basics/union-types.html","filePathRelative":"code/language/typescript/basics/union-types.md","localizedDate":"2022年8月20日"}')}}]);