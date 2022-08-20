"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[51901],{64638:(s,e,n)=>{n.r(e),n.d(e,{default:()=>c});var a=n(78e3);const o=[(0,a.uE)('<h2 id="命令提示符" tabindex="-1"><a class="header-anchor" href="#命令提示符" aria-hidden="true">#</a> 命令提示符</h2><p>登录系统后，第一眼看到的内容是:</p><div class="language-shell-session ext-shell-session line-numbers-mode"><pre class="language-shell-session"><code><span class="token output">[root@localhost ~]#\n</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这就是 Linux 系统的命令提示符。那么，这个提示符的含义是什么呢?</p><ul><li><code>[]</code>: 这是提示符的分隔符号，没有特殊含义。</li><li><code>root</code>: 显示的是当前的登录用户，笔者现在使用的是 root 用户登录。</li><li><code>@</code>: 分隔符号，没有特殊含义。</li><li><code>localhost</code>: 当前系统的简写主机名(完整主机名是 <code>localhost.localdomain</code>)。</li><li><code>~</code>: 代表用户当前所在的目录，此例中用户当前所在的目录是家目录。</li><li><code>#</code>: 命令提示符，Linux 用这个符号标识登录的用户权限等级。如果是超级用户，提示符就是 <code>#</code>；如果是普通用户，提示符就是 <code>$</code>。</li></ul><p>家目录(又称主目录)是什么? Linux 系统是纯字符界面，用户登录后，要有一个初始登录的位置，这个初始登录位置就称为用户的家: 超级用户的家目录: <code>/root</code>。 普通用户的家目录: <code>/home/用户名</code>。</p><p>用户在自己的家目录中拥有完整权限，所以我们也建议操作实验可以放在家目录中进行。我们切换一下用户所在目录，看看有什么效果。</p><div class="language-shell-session ext-shell-session line-numbers-mode"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token builtin class-name">cd</span> /usr/local</span></span>\n<span class="token output">[root@localhost local]#\n</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>仔细看，如果切换用户所在目录，那么命令提示符中的会变成用户当前所在目录的最后一个目录(不显示完整的所在目录 <code>/usr/loca</code>l，只显示最后一个目录 <code>local</code>)。</p><h2 id="命令的基本格式" tabindex="-1"><a class="header-anchor" href="#命令的基本格式" aria-hidden="true">#</a> 命令的基本格式</h2><p>接下来看看 Linux 命令的基本格式:</p><div class="language-shell-session ext-shell-session line-numbers-mode"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash">命令<span class="token punctuation">[</span>选项<span class="token punctuation">]</span><span class="token punctuation">[</span>参数<span class="token punctuation">]</span></span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令格式中的 <code>[]</code> 代表可选项，也就是有些命令可以不写选项或参数，也能执行。那么，我们就用 Linux 中最常见的 <code>ls</code> 命令来解释一下命令的格式(有关 <code>ls</code> 命令的具体用法，后续章节会详细介绍)。如果按照命令的分类，那么 <code>ls</code> 命令应该属于目录操作命令。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls</span>\nanaconda-ks.cfg install.log install.log.syslog\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><p>选项的作用</p><p>选项的作用是调整命令功能。如果没有选项，那么命令只能执行最基本的功能；而一旦有选项，则可以显示更加丰富的数据。</p><p>Linux 的选项又分为短格式选项(<code>-l</code>)和长格式选项(-<code>-all</code>)。短格式选项是英文的简写，用一个减号调用，例如:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls -l</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>而长格式选项是英文完整单词，一般用两个减号调用，例如:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls --all</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一般情况下，短格式选项是长格式选项的缩写，也就是一个短格式选项会有对应的长格式选项。当然也有例外，比如 <code>ls</code> 命令的短格式选项 <code>-l</code> 就没有对应的长格式选项。所以具体的命令选项可以通过后面我们要学习的帮助命令来进行査询。</p></li><li><p>参数的作用</p><p>参数是命令的操作对象，一般文件、目录、用户和进程等可以作为参数被命令操作。例如:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls -l anaconda-ks.cfg</span>\n-rw-------.1 root root <span class="token number">1207</span> <span class="token number">1</span> 月 <span class="token number">14</span> <span class="token number">18</span>:18 anaconda-ks.cfg\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但是为什么一开始 <code>ls</code> 命令可以省略参数? 那是因为有默认参数。命令一般都需要加入参数，用于指定命令操作的对象是谁。如果可以省略参数，则一般都有默认参数。例如:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls</span>\nanaconda-ks.cfg install.log install.log.syslog\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这个 <code>ls</code> 命令后面没有指定参数，默认参数是当前所在位置，所以会显示当前目录下的文件名。</p></li></ol><p>总结一下: <strong>命令的选项用于调整命令功能，而命令的参数是这个命令的操作对象。</strong></p>',16)],l={},c=(0,n(13860).Z)(l,[["render",function(s,e){return(0,a.wg)(),(0,a.iD)("div",null,o)}]])},13860:(s,e)=>{e.Z=(s,e)=>{const n=s.__vccOpts||s;for(const[s,a]of e)n[s]=a;return n}},36866:(s,e,n)=>{n.r(e),n.d(e,{data:()=>a});const a=JSON.parse('{"key":"v-7ffa5ca6","path":"/linux/command/command.html","title":"基本格式","lang":"zh-CN","frontmatter":{"title":"基本格式","icon":"shell","date":"2019-11-18T00:00:00.000Z","category":["Linux"],"summary":"--- title: 基本格式 icon: shell date: 2019-11-18 category: Linux --- 命令提示符 登录系统后，第一眼看到的内容是: 这就是 Linux 系统的命令提示符。那么，这个提示符的含义是什么呢? []: 这是提示符的分隔符号，没有特殊含义。; root: 显示的是当前的登录用户，笔者现在使用的是 root ","head":[["meta",{"property":"og:url","content":"https://github.com/MisterChen9527/linux/command/command.html"}],["meta",{"property":"og:site_name","content":"Mr.Chen"}],["meta",{"property":"og:title","content":"基本格式"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-20T08:54:00.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2019-11-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-08-20T08:54:00.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"命令提示符","slug":"命令提示符","children":[]},{"level":2,"title":"命令的基本格式","slug":"命令的基本格式","children":[]}],"git":{"createdTime":1660985640000,"updatedTime":1660985640000,"contributors":[{"name":"陈文景","email":"2646530197@qq.com","commits":1}]},"readingTime":{"minutes":3.26,"words":978},"copyright":"著作权归Mr.Chen所有\\n基于MIT协议\\n原文链接：https://github.com/MisterChen9527/linux/command/command.html","filePathRelative":"linux/command/command.md","localizedDate":"2019年11月18日"}')}}]);