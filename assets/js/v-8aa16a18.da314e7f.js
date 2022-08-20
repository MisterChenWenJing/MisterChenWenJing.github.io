"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[83956],{23778:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});var e=a(78e3);const i=[(0,e.uE)('<h1 id="异步任务" tabindex="-1"><a class="header-anchor" href="#异步任务" aria-hidden="true">#</a> 异步任务</h1><p>Bash 脚本有时候需要同时执行多个任务。通常这涉及到启动一个脚本，依次，启动一个或多个子脚本来执行额外的任务，而父脚本继续运行。然而，当一系列脚本 以这种方式运行时，要保持父子脚本之间协调工作，会有一些问题。也就是说，若父脚本或子脚本依赖于另一方，并且 一个脚本必须等待另一个脚本结束任务之后，才能完成它自己的任务，这应该怎么办?</p><p>bash 有一个内置命令，能帮助管理诸如此类的异步执行的任务。wait 命令导致一个父脚本暂停运行，直到一个 特定的进程(例如，子脚本)运行结束。</p><p>首先我们将演示一下 wait 命令的用法。为此，我们需要两个脚本，一个父脚本:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>\n<span class="token comment"># async-parent : Asynchronous execution demo (parent)</span>\n<span class="token builtin class-name">echo</span> <span class="token string">&quot;Parent: starting...&quot;</span>\n<span class="token builtin class-name">echo</span> <span class="token string">&quot;Parent: launching child script...&quot;</span>\nasync-child <span class="token operator">&amp;</span>\n<span class="token assign-left variable">pid</span><span class="token operator">=</span><span class="token variable">$!</span>\n<span class="token builtin class-name">echo</span> <span class="token string">&quot;Parent: child (PID= <span class="token variable">$pid</span>) launched.&quot;</span>\n<span class="token builtin class-name">echo</span> <span class="token string">&quot;Parent: continuing...&quot;</span>\n<span class="token function">sleep</span> <span class="token number">2</span>\n<span class="token builtin class-name">echo</span> <span class="token string">&quot;Parent: pausing to wait for child to finish...&quot;</span>\n<span class="token function">wait</span> <span class="token variable">$pid</span>\n<span class="token builtin class-name">echo</span> <span class="token string">&quot;Parent: child is finished. Continuing...&quot;</span>\n<span class="token builtin class-name">echo</span> <span class="token string">&quot;Parent: parent is done. Exiting.&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>和一个子脚本:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>\n<span class="token comment"># async-child : Asynchronous execution demo (child)</span>\n<span class="token builtin class-name">echo</span> <span class="token string">&quot;Child: child is running...&quot;</span>\n<span class="token function">sleep</span> <span class="token number">5</span>\n<span class="token builtin class-name">echo</span> <span class="token string">&quot;Child: child is done. Exiting.&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们看到该子脚本是非常简单的。真正的操作通过父脚本完成。在父脚本中，子脚本被启动， 并被放置到后台运行。子脚本的进程 ID 记录在 pid 变量中，这个变量的值是 $! shell 参数的值，它总是 包含放到后台执行的最后一个任务的进程 ID 号。</p><p>父脚本继续，然后执行一个以子进程 PID 为参数的 wait 命令。这就导致父脚本暂停运行，直到子脚本退出， 意味着父脚本结束。</p><p>当执行后，父子脚本产生如下输出:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ async-parent\nParent: starting<span class="token punctuation">..</span>.\nParent: launching child script<span class="token punctuation">..</span>.\nParent: child <span class="token punctuation">(</span>PID<span class="token operator">=</span> <span class="token number">6741</span><span class="token punctuation">)</span> launched.\nParent: continuing<span class="token punctuation">..</span>.\nChild: child is running<span class="token punctuation">..</span>.\nParent: pausing to <span class="token function">wait</span> <span class="token keyword">for</span> child to finish<span class="token punctuation">..</span>.\nChild: child is done. Exiting.\nParent: child is finished. Continuing<span class="token punctuation">..</span>.\nParent: parent is done. Exiting.\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',11)],t={},l=(0,a(13860).Z)(t,[["render",function(n,s){return(0,e.wg)(),(0,e.iD)("div",null,i)}]])},13860:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},9435:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e=JSON.parse('{"key":"v-8aa16a18","path":"/linux/bash/archives/async.html","title":"异步任务","lang":"zh-CN","frontmatter":{"summary":"异步任务 Bash 脚本有时候需要同时执行多个任务。通常这涉及到启动一个脚本，依次，启动一个或多个子脚本来执行额外的任务，而父脚本继续运行。然而，当一系列脚本 以这种方式运行时，要保持父子脚本之间协调工作，会有一些问题。也就是说，若父脚本或子脚本依赖于另一方，并且 一个脚本必须等待另一个脚本结束任务之后，才能完成它自己的任务，这应该怎么办? bash 有一个","head":[["meta",{"property":"og:url","content":"https://github.com/MisterChen9527/linux/bash/archives/async.html"}],["meta",{"property":"og:site_name","content":"Mr.Chen"}],["meta",{"property":"og:title","content":"异步任务"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-20T08:54:00.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-08-20T08:54:00.000Z"}]]},"excerpt":"","headers":[],"git":{"createdTime":1660985640000,"updatedTime":1660985640000,"contributors":[{"name":"陈文景","email":"2646530197@qq.com","commits":1}]},"readingTime":{"minutes":1.75,"words":526},"copyright":"著作权归Mr.Chen所有\\n基于MIT协议\\n原文链接：https://github.com/MisterChen9527/linux/bash/archives/async.html","filePathRelative":"linux/bash/archives/async.md","localizedDate":"2022年8月20日"}')}}]);