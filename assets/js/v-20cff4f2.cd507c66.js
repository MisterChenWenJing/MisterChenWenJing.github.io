"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[80839],{2891:(e,n,o)=>{o.r(n),o.d(n,{default:()=>b});var t=o(78e3);const a=(0,t._)("p",null,"在正式编写第一个 Python 程序前，我们先复习一下什么是命令行模式和 Python 交互模式。",-1),s=(0,t._)("h2",{id:"命令行模式",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#命令行模式","aria-hidden":"true"},"#"),(0,t.Uk)(" 命令行模式")],-1),l=(0,t._)("p",null,[(0,t.Uk)("打开“命令提示符”，就进入到命令行模式，它的提示符类似 "),(0,t._)("code",null,"C:\\>"),(0,t.Uk)(":")],-1),p={class:"custom-container info"},c=(0,t._)("p",{class:"custom-container-title"},"相关信息",-1),d=(0,t.Uk)("如何打开，请见 "),i=(0,t.Uk)("打开命令行"),r=(0,t.uE)('<h2 id="python-交互模式" tabindex="-1"><a class="header-anchor" href="#python-交互模式" aria-hidden="true">#</a> Python 交互模式</h2><p>在命令行模式下敲命令 <code>python</code>，就进入到 Python 交互模式，它的提示符是 <code>&gt;&gt;&gt;</code>。</p><p>在交互模式的提示符 <code>&gt;&gt;&gt;</code> 下，直接输入代码，按回车，就可以立刻得到代码执行结果。</p><blockquote><p>请敲入 <code>100 + 200</code> 然后按回车，您就会得到 <code>300</code>。</p></blockquote><p>如果要让 Python 打印出指定的文字，可以用 <code>print()</code> 函数，然后把希望打印的文字用单引号或者双引号括起来，但不能混用单引号和双引号。</p><blockquote><p>输入 <code>print(&#39;hello, world&#39;)</code> 后回车。</p></blockquote><p>最后，用 <code>exit()</code> 退出 Python，我们的第一个 Python 程序完成! 唯一的缺憾是没有保存下来，下次运行时还要再输入一遍代码。</p><p>在 Python 的交互式命令行写程序，好处是一下就能得到结果，坏处是没法保存，下次还想运行的时候，还得再敲一遍。</p><p>所以，实际开发的时候，我们总是使用一个文本编辑器来写代码，写完了，保存为一个文件，这样，程序就可以反复运行了。</p><p>现在，我们就把上次的 <code>&#39;hello, world&#39;</code> 程序用文本编辑器写出来，保存下来。</p>',10),h={class:"custom-container info"},u=(0,t._)("p",{class:"custom-container-title"},"文本编辑器",-1),y=(0,t.Uk)("关于文本编辑器，请使用 "),m=(0,t.Uk)("VS Code"),g=(0,t.uE)('<p>安装好文本编辑器后，输入以下代码:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello, world&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意 <code>print</code> 前面不要有任何空格。然后，选择一个目录，例如 <code>C:\\work</code>，把文件保存为 hello.py，就可以打开命令行窗口，把当前目录切换到 hello.py 所在目录，就可以运行这个程序了:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>C:/work<span class="token operator">&gt;</span> python hello.py\nhello, world\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以保存为别的名字，比如 first.py，但是必须要以 <code>.py</code> 结尾，其他的都不行。此外，文件名只能是英文字母、数字和下划线的组合。</p><p>如果当前目录下没有 hello.py 这个文件，运行 <code>python hello.py</code> 就会报错:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>C:/Users/MrHope<span class="token operator">&gt;</span> python hello.py\npython: can<span class="token string">&#39;t open file &#39;</span>hello.py&#39;: <span class="token punctuation">[</span>Errno <span class="token number">2</span><span class="token punctuation">]</span> No such <span class="token function">file</span> or directory\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>报错的意思就是，无法打开 hello.py 这个文件，因为文件不存在。这个时候，就要检查一下当前目录下是否有这个文件了。如果 hello.py 存放在另外一个目录下，要首先用 <code>cd</code> 命令切换当前目录。</p><h2 id="直接运行-py-文件" tabindex="-1"><a class="header-anchor" href="#直接运行-py-文件" aria-hidden="true">#</a> 直接运行 py 文件</h2><p>您可能有疑问，能不能像 <code>.exe</code> 文件那样直接运行 <code>.py</code> 文件呢? 在 Windows 上是不行的，但是，在 Mac 和 Linux 上是可以的，方法是在 <code>.py</code> 文件的第一行加上一个特殊的注释:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># !/usr/bin/env python3</span>\n\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello, world&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，通过命令给 hello.py 以执行权限:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">chmod</span> a+x hello.py\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>就可以直接运行 hello.py 了，比如在 Mac 下运行:</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>用文本编辑器写 Python 程序，然后保存为后缀为 <code>.py</code> 的文件，就可以用 Python 直接运行这个程序了。</p><p>Python 的交互模式和直接运行 <code>.py</code> 文件有什么区别呢?</p><p>直接输入 python 进入交互模式，相当于启动了 Python 解释器，但是等待您一行一行地输入源代码，每输入一行就执行一行。</p><p>直接运行 <code>.py</code> 文件相当于启动了 Python 解释器，然后一次性把 <code>.py</code> 文件的源代码给执行了，您是没有机会以交互的方式输入源代码的。</p><p>用 Python 开发程序，完全可以一边在文本编辑器里写代码，一边开一个交互式命令窗口，在写代码的过程中，把部分代码粘到命令行去验证，事半功倍! 前提是得有个 27’ 的超大显示器!</p>',20),v={},b=(0,o(13860).Z)(v,[["render",function(e,n){const o=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)("div",null,[a,(0,t.kq)(" more "),s,l,(0,t._)("div",p,[c,(0,t._)("p",null,[d,(0,t.Wm)(o,{to:"/code/windows/cmd.html"},{default:(0,t.w5)((()=>[i])),_:1})])]),r,(0,t._)("div",h,[u,(0,t._)("p",null,[y,(0,t.Wm)(o,{to:"/software/vscode/"},{default:(0,t.w5)((()=>[m])),_:1})])]),g])}]])},13860:(e,n)=>{n.Z=(e,n)=>{const o=e.__vccOpts||e;for(const[e,t]of n)o[e]=t;return o}},87719:(e,n,o)=>{o.r(n),o.d(n,{data:()=>t});const t=JSON.parse('{"key":"v-20cff4f2","path":"/code/language/python/guide/write.html","title":"第一个 Python 程序","lang":"zh-CN","frontmatter":{"title":"第一个 Python 程序","icon":"info","author":"廖雪峰","date":"2020-05-20T00:00:00.000Z","category":["Python"],"summary":"在正式编写第一个 Python 程序前，我们先复习一下什么是命令行模式和 Python 交互模式。\\n","head":[["meta",{"property":"og:url","content":"https://github.com/MisterChen9527/code/language/python/guide/write.html"}],["meta",{"property":"og:site_name","content":"Mr.Chen"}],["meta",{"property":"og:title","content":"第一个 Python 程序"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-20T08:54:00.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2020-05-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-08-20T08:54:00.000Z"}]]},"excerpt":"<p>在正式编写第一个 Python 程序前，我们先复习一下什么是命令行模式和 Python 交互模式。</p>\\n","headers":[{"level":2,"title":"命令行模式","slug":"命令行模式","children":[]},{"level":2,"title":"Python 交互模式","slug":"python-交互模式","children":[]},{"level":2,"title":"直接运行 py 文件","slug":"直接运行-py-文件","children":[]},{"level":2,"title":"小结","slug":"小结","children":[]}],"git":{"createdTime":1660985640000,"updatedTime":1660985640000,"contributors":[{"name":"陈文景","email":"2646530197@qq.com","commits":1}]},"readingTime":{"minutes":3.39,"words":1017},"copyright":"著作权归Mr.Chen所有\\n基于MIT协议\\n原文链接：https://github.com/MisterChen9527/code/language/python/guide/write.html","filePathRelative":"code/language/python/guide/write.md","localizedDate":"2020年5月20日"}')}}]);