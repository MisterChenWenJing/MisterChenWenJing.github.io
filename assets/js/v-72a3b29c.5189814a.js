"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[71243],{36971:(s,n,a)=>{a.r(n),a.d(n,{default:()=>t});var e=a(78e3);const o=[(0,e.uE)('<h1 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h1><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><p>变量是计算机系统用于保存可变值的数据类型，我们可以直接通过变量名称来提取到对应的变量值。在 Linux 系统中，环境变量是用来定义系统运行环境的一些参数，比如每个用户不同的家目录 (HOME)、邮件存放位置 (MAIL)等。 值得一提的是，Linux 系统中环境变量的名称一般都是大写的，这是一种约定俗成的规范。</p><p>我们可以使用 env 命令来查看到 Linux 系统中所有的环境变量，执行命令如下:</p><div class="language-shell-session ext-shell-session line-numbers-mode"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">env</span></span></span>\n<span class="token output">ORBIT_SOCKETDIR=/tmp/orbit-root\nHOSTNAME=livecd.centos\nGIO_LAUNCHED_DESKTOP_FILE_PID=2065\nTERM=xterm\nSHELL=/bin/bash\n......\n</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Linux 系统能够正常运行并且为用户提供服务，需要数百个环境变量来协同工作，但是，我们没有必要逐一学习每个变量。常见变量见下表:</p><table><thead><tr><th>环境变量名称</th><th>作用</th></tr></thead><tbody><tr><td>HOME</td><td>用户的主目录(也称家目录)</td></tr><tr><td>SHELL</td><td>用户使用的 Shell 解释器名称</td></tr><tr><td>PATH</td><td>定义命令行解释器搜索用户执行命令的路径</td></tr><tr><td>EDITOR</td><td>用户默认的文本解释器</td></tr><tr><td>RANDOM</td><td>生成一个随机数字</td></tr><tr><td>LANG</td><td>系统语言、语系名称</td></tr><tr><td>HISTSIZE</td><td>输出的历史命令记录条数</td></tr><tr><td>HISTFILESIZE</td><td>保存的历史命令记录条数</td></tr><tr><td>PS1</td><td>Bash 解释器的提示符</td></tr><tr><td>MAIL</td><td>邮件保存路径</td></tr></tbody></table><p>Linux 作为一个多用户多任务的操作系统，能够为每个用户提供独立的、合适的工作运行环境，因此，一个相同的环境变量会因为用户身份的不同而具有不同的值。</p><p>例如，使用下述命令来查看 <code>HOME</code> 变量在不同用户身份下都有哪些值:</p><div class="language-shell-session ext-shell-session line-numbers-mode"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token builtin class-name">echo</span> <span class="token environment constant">$HOME</span></span></span>\n<span class="token output">/root\n</span><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">su</span> - user1  <span class="token operator">&lt;</span>--切换到 user1 用户身份</span></span>\n<span class="token command"><span class="token info punctuation"><span class="token user">[user1@localhost ~]</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token builtin class-name">echo</span> <span class="token environment constant">$HOME</span></span></span>\n<span class="token output">/home/user1\n</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的 <code>su</code> 命令可以临时切换用户身份，此命令的具体用法会在后续章节做详细介绍。</p><p>其实，环境变量是由固定的变量名与用户或系统设置的变量值两部分组成的，我们完全可以自行创建环境变量来满足工作需求。例如，设置一个名称为 <code>WORKDIR</code> 的环境变量，方便用户更轻松地进入一个层次较深的目录，执行命令如下:</p><div class="language-shell-session ext-shell-session line-numbers-mode"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">mkdir</span> /home/work1</span></span>\n<span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token assign-left variable">WORKDIR</span><span class="token operator">=</span>/home/work1</span></span>\n<span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token builtin class-name">cd</span> <span class="token variable">$WORKDIR</span></span></span>\n<span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost work1]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token builtin class-name">pwd</span></span></span>\n<span class="token output">/home/work1\n</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，这样的环境变量不具有全局性，作用范围也有限，默认情况下不能被其他用户使用。如果工作需要，可以使用 <code>export</code> 命令将其提升为全局环境变量，这样其他用户就可以使用它了:</p><div class="language-shell-session ext-shell-session line-numbers-mode"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost work1]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">su</span> user1  <span class="token operator">&lt;</span>-- 切换到 user1，发现无法使用 WORKDIR 自定义变量</span></span>\n<span class="token command"><span class="token info punctuation"><span class="token user">[user1@localhost ~]</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token builtin class-name">cd</span> <span class="token variable">$WORKDIR</span></span></span>\n<span class="token command"><span class="token info punctuation"><span class="token user">[user1@localhost ~]</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token builtin class-name">echo</span> <span class="token variable">$WORKDIR</span></span></span>\n\n<span class="token command"><span class="token info punctuation"><span class="token user">[user1@localhost ~]</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token builtin class-name">exit</span> <span class="token operator">&lt;</span>--退出user1身份</span></span>\n<span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost work1]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token builtin class-name">export</span> WORKDIR</span></span>\n<span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost work1]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">su</span> user1</span></span>\n<span class="token command"><span class="token info punctuation"><span class="token user">[user1@localhost ~]</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token builtin class-name">cd</span> <span class="token variable">$WORKDIR</span></span></span>\n<span class="token command"><span class="token info punctuation"><span class="token user">[user1@localhost work1]</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token builtin class-name">pwd</span></span></span>\n<span class="token output">/home/work1\n</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> path</h2><p>在讲解 PATH 环境变量之前，首先介绍一下 <code>which</code> 命令，它用于查找某个命令所在的绝对路径。例如:</p><div class="language-shell-session ext-shell-session line-numbers-mode"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">which</span> <span class="token function">rm</span></span></span>\n<span class="token output">/bin/rm\n</span><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">which</span> <span class="token function">rmdir</span></span></span>\n<span class="token output">/bin/rmdir\n</span><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">which</span> <span class="token function">ls</span></span></span>\n<span class="token output">alias ls=&#39;ls --color=auto&#39;\n        /bin/ls\n</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，<code>ls</code> 是一个相对特殊的命令，它使用 alias 命令做了别名，也就是说，我们常用的 <code>ls</code> 实际上执行的是 <code>ls --color=auto</code>。</p><p>通过使用 <code>which</code> 命令，可以查找各个外部命令(和 Shell 内置命令相对)所在的绝对路径。学到这里，读者是否有这样一个疑问，为什么前面在使用 <code>rm</code>、<code>rmdir</code>、<code>ls</code> 等命令时，无论当前位于哪个目录，都可以直接使用，而无需指明命令的执行文件所在的位置 (绝对路径) 呢? 其实，这是 PATH 环境变量在起作用。</p><p>首先，执行如下命令:</p><div class="language-shell-session ext-shell-session line-numbers-mode"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token builtin class-name">echo</span> <span class="token environment constant">$PATH</span></span></span>\n<span class="token output">/usr/local/sbin:/usr/sbin:/sbin:/usr/local/bin:/usr/bin:/bin:/root/bin\n</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的 <code>echo</code> 命令用来输出 PATH 环境变量的值(这里的 <code>$</code> 是 PATH 的前缀符号)，PATH 环境变量的内容是由一堆目录组成的，各目录之间用冒号 <code>:</code> 隔开。当执行某个命令时，Linux 会依照 PATH 中包含的目录依次搜寻该命令的可执行文件，一旦找到，即正常执行；反之，则提示无法找到该命令。 如果在 PATH 包含的目录中，有多个目录都包含某命令的可执行文件，那么会执行先搜索到的可执行文件。</p><p>从执行结果中可以看到，<code>/bin</code> 目录已经包含在 PATH 环境变量中，因此在使用类似 <code>rm</code>、<code>rmdir</code>、<code>ls</code> 等命令时，即便直接使用其命令名，Linux 也可以找到该命令。</p><p>为了印证以上观点，下面举个反例，如果我们将 <code>ls</code> 命令移动到 <code>/root</code> 目录下，由于 PATH 环境变量中没有包含此目录，所有当直接使用 <code>ls</code> 命令名执行时，Linux 将无法找到此命令的可执行文件，并提示 <code>No such file or directory</code>，示例命令如下:</p><div class="language-shell-session ext-shell-session line-numbers-mode"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">mv</span> /bin/ls /root</span></span>\n<span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">ls</span></span></span>\n<span class="token output">bash: /bin/ls: No such file or directory\n</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，如果仍想使用 <code>ls</code> 命令，有 2 种方法，一种是直接将 <code>/root</code> 添加到 PATH 环境变量中，例如:</p><div class="language-shell-session ext-shell-session line-numbers-mode"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span>:/root</span></span>\n<span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token builtin class-name">echo</span> <span class="token environment constant">$PATH</span></span></span>\n<span class="token output">/usr/local/sbin:/usr/sbin:/usr/local/bin:/usr/bin:/bin:/root/bin:/root\n</span><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">ls</span></span></span>\n<span class="token output">Desktop    Downloads    Music    post-install     Public    Videos\nDocuments  ls           Pictures post-install.org Templates\n</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，这种方式只是临时有效，一旦退出下次再登陆的时候，<code>$PATH</code> 就恢复成了默认值。</p><p>另一种方法是以绝对路径的方式使用此命令，例如:</p><div class="language-shell-session ext-shell-session line-numbers-mode"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash">/root/ls</span></span>\n<span class="token output">Desktop    Downloads    Music    post-install     Public    Videos\nDocuments  ls           Pictures post-install.org Templates\n</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了不影响系统的正常使用，强烈建议大家将移动后的 <code>ls</code> 文件还原，命令如下:</p><div class="language-shell-session ext-shell-session line-numbers-mode"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">mv</span> /root/ls /bin</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',33)],l={},t=(0,a(13860).Z)(l,[["render",function(s,n){return(0,e.wg)(),(0,e.iD)("div",null,o)}]])},13860:(s,n)=>{n.Z=(s,n)=>{const a=s.__vccOpts||s;for(const[s,e]of n)a[s]=e;return a}},52283:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e=JSON.parse('{"key":"v-72a3b29c","path":"/linux/command/path.html","title":"环境变量","lang":"zh-CN","frontmatter":{"icon":"shell","date":"2019-11-20T00:00:00.000Z","category":["Linux"],"summary":"--- icon: shell date: 2019-11-20 category: Linux --- 环境变量 变量 变量是计算机系统用于保存可变值的数据类型，我们可以直接通过变量名称来提取到对应的变量值。在 Linux 系统中，环境变量是用来定义系统运行环境的一些参数，比如每个用户不同的家目录 (HOME)、邮件存放位置 (MAIL)等。 值得一提的是","head":[["meta",{"property":"og:url","content":"https://github.com/MisterChen9527/linux/command/path.html"}],["meta",{"property":"og:site_name","content":"Mr.Chen"}],["meta",{"property":"og:title","content":"环境变量"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-20T08:54:00.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2019-11-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-08-20T08:54:00.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"变量","slug":"变量","children":[]},{"level":2,"title":"path","slug":"path","children":[]}],"git":{"createdTime":1660985640000,"updatedTime":1660985640000,"contributors":[{"name":"陈文景","email":"2646530197@qq.com","commits":1}]},"readingTime":{"minutes":5.03,"words":1509},"copyright":"著作权归Mr.Chen所有\\n基于MIT协议\\n原文链接：https://github.com/MisterChen9527/linux/command/path.html","filePathRelative":"linux/command/path.md","localizedDate":"2019年11月20日"}')}}]);