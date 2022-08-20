"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[65779],{26272:(t,e,o)=>{o.r(e),o.d(e,{default:()=>g});var d=o(78e3);const r=(0,d._)("p",null,"在小程序中所有页面的路由全部由框架进行管理。",-1),a={id:"页面栈",tabindex:"-1"},n=(0,d._)("a",{class:"header-anchor",href:"#页面栈","aria-hidden":"true"},"#",-1),i=(0,d.Uk)(" 页面栈 "),c=(0,d.uE)("<p>框架以栈的形式维护了当前的所有页面。当发生路由切换的时候，页面栈的表现如下:</p><table><thead><tr><th>路由方式</th><th>页面栈表现</th></tr></thead><tbody><tr><td>初始化</td><td>新页面入栈</td></tr><tr><td>打开新页面</td><td>新页面入栈</td></tr><tr><td>页面重定向</td><td>当前页面出栈，新页面入栈</td></tr><tr><td>页面返回</td><td>页面不断出栈，直到目标返回页</td></tr><tr><td>Tab 切换</td><td>页面全部出栈，只留下新的 Tab 页面</td></tr><tr><td>重加载</td><td>页面全部出栈，只留下新的页面</td></tr></tbody></table><p>开发者可以使用 <code>getCurrentPages()</code> 函数获取当前页面栈。</p>",3),l={id:"路由方式",tabindex:"-1"},h=(0,d._)("a",{class:"header-anchor",href:"#路由方式","aria-hidden":"true"},"#",-1),p=(0,d.Uk)(" 路由方式 "),u=(0,d.uE)('<p>对于路由的触发方式以及页面生命周期函数如下:</p><p>| 路由方式 | 触发时机 | 路由前页面 | 路由后页面 | | ---------- | ------------------------------------------------------------------------------- | -------------------- | -------------- | ------------------ | | 初始化 | 小程序打开的第一个页面 | | onLoad, onShow | | 打开新页面 | 调用 API <code>wx.navigateTo</code><br>使用组件 <code>&lt;navigator open-type=&quot;navigateTo&quot;/&gt;</code> | onHide | onLoad, onShow | | 页面重定向 | 调用 API <code>wx.redirectTo</code><br>使用组件 <code>&lt;navigator open-type=&quot;redirectTo&quot;/&gt;</code> | onUnload | onLoad, onShow | | 页面返回 | 调用 API <code>wx.navigateBack</code><br>使用组件 <code>&lt;navigator open-type=&quot;navigateBack&quot;&gt;</code> | 用户按左上角返回按钮 | onUnload | onShow | | Tab 切换 | 调用 API <code>wx.switchTab</code><br>使用组件 <code>&lt;navigator open-type=&quot;switchTab&quot;/&gt;</code> | 用户切换 Tab | | 各种情况请参考下表 | | 重启动 | 调用 API <code>wx.reLaunch</code><br>使用组件 <code>&lt;navigator open-type=&quot;reLaunch&quot;/&gt;</code> | onUnload | onLoad, onShow |</p><p>Tab 切换对应的生命周期(以 A、B 页面为 Tabbar 页面，C 是从 A 页面打开的页面，D 页面是从 C 页面打开的页面为例):</p><table><thead><tr><th>当前页面</th><th>路由后页面</th><th>触发的生命周期(按顺序)</th></tr></thead><tbody><tr><td>A</td><td>A</td><td>Nothing happened</td></tr><tr><td>A</td><td>B</td><td>A.onHide(), B.onLoad(), B.onShow()</td></tr><tr><td>A</td><td>B(再次打开)</td><td>A.onHide(), B.onShow()</td></tr><tr><td>C</td><td>A</td><td>C.onUnload(), A.onShow()</td></tr><tr><td>C</td><td>B</td><td>C.onUnload(), B.onLoad(), B.onShow()</td></tr><tr><td>D</td><td>B</td><td>D.onUnload(), C.onUnload(), B.onLoad(), B.onShow()</td></tr><tr><td>D(从转发进入)</td><td>A</td><td>D.onUnload(), A.onLoad(), A.onShow()</td></tr><tr><td>D(从转发进入)</td><td>B</td><td>D.onUnload(), B.onLoad(), B.onShow()</td></tr></tbody></table><div class="custom-container tip"><p class="custom-container-title">提示</p><ul><li><code>navigateTo</code>, <code>redirectTo</code> 只能打开非 tabBar 页面。</li><li><code>switchTab</code> 只能打开 tabBar 页面。</li><li><code>reLaunch</code> 可以打开任意页面。</li><li>页面底部的 tabBar 由页面决定，即只要是定义为 tabBar 的页面，底部都有 tabBar。</li><li>调用页面路由带的参数可以在目标页面的 <code>onLoad</code> 中获取。</li></ul></div>',5),s={},g=(0,o(13860).Z)(s,[["render",function(t,e){const o=(0,d.up)("Badge");return(0,d.wg)(),(0,d.iD)("div",null,[r,(0,d.kq)(" more "),(0,d._)("h2",a,[n,i,(0,d.Wm)(o,{text:"重要",type:"error"})]),c,(0,d._)("h2",l,[h,p,(0,d.Wm)(o,{text:"重要",type:"error"})]),u])}]])},13860:(t,e)=>{e.Z=(t,e)=>{const o=t.__vccOpts||t;for(const[t,d]of e)o[t]=d;return o}},25340:(t,e,o)=>{o.r(e),o.d(e,{data:()=>d});const d=JSON.parse('{"key":"v-a560af90","path":"/code/mini-app/guide/service/route.html","title":"页面路由","lang":"zh-CN","frontmatter":{"title":"页面路由","icon":"router","category":["小程序"],"summary":"在小程序中所有页面的路由全部由框架进行管理。\\n","head":[["meta",{"property":"og:url","content":"https://github.com/MisterChen9527/code/mini-app/guide/service/route.html"}],["meta",{"property":"og:site_name","content":"Mr.Chen"}],["meta",{"property":"og:title","content":"页面路由"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-20T08:54:00.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-08-20T08:54:00.000Z"}]]},"excerpt":"<p>在小程序中所有页面的路由全部由框架进行管理。</p>\\n","headers":[{"level":2,"title":"页面栈","slug":"页面栈","children":[]},{"level":2,"title":"路由方式","slug":"路由方式","children":[]}],"git":{"createdTime":1660985640000,"updatedTime":1660985640000,"contributors":[{"name":"陈文景","email":"2646530197@qq.com","commits":1}]},"readingTime":{"minutes":1.93,"words":579},"copyright":"著作权归Mr.Chen所有\\n基于MIT协议\\n原文链接：https://github.com/MisterChen9527/code/mini-app/guide/service/route.html","filePathRelative":"code/mini-app/guide/service/route.md","localizedDate":"2022年8月20日"}')}}]);