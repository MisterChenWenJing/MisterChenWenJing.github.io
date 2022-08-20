import { hopeTheme } from 'vuepress-theme-hope'

import { enNavbarConfig, zhNavbarConfig } from './navbar'
import { enSidebarConfig, zhSidebarConfig } from './sidebar'

export default hopeTheme({
  hostname: 'https://github.com/MisterChen9527', // 当前网站部署到的域名

  // 作者信息
  author: {
    name: 'Mr.Chen',
    url: 'https://github.com/MisterChen9527'
  },

  logo: '/logo.svg', // 网址logo

  repoDisplay: false, // 是否在导航栏内显示仓库链接（默认为true）
  repo: 'https://github.com/MisterChen9527/MisterChen9527.github.io.git', // Git仓库和编辑链接（可以是仓库名称同时也可以是一个完整的URL）
  repoLabel: 'GitHub', // 自定义仓库链接文字（默认从repo选项中自动推断为 "GitHub" / "GitLab" / "Gitee" / "Bitbucket" / "Source" 其中之一）

  // docsRepo: 'https://github.com/MisterChen9527', // 文档仓库地址（默认同主题选项中的repo）
  docsDir: 'src', // 文档源文件存放在仓库中的目录名 它将会用于生成编辑此页的链接（默认为根目录）
  docsBranch: 'main', // 文档存放的分值（默认为"main"）

  // Navbar主题色选择器配置项
  themeColor: {
    green: '#3eaf7c',
    blue: '#2196f3',
    pink: '#f26d6d',
    grey: '#c1c1c1'
  },

  pure: false, // 是否开启纯净模式（开启后会禁用一些花哨的动画以及一些色彩 只提供功能）

  // iconAssets: '//at.alicdn.com/t/font_2410206_vuzkjonf4s9.css', // 设置字体图标使用的库（iconfont官网不能生成font-class 待研究怎么使用）
  // iconPrefix: 'iconfont icon-', // 设置字体图标前缀
  iconAssets: 'iconfont',

  fullscreen: true, // 是否开启全屏按钮

  backToTop: true, // 返回顶部按钮（接收boolean｜number 布尔值为是否开启 数字为距离顶部的距离 默认300）

  editLink: false, // 是否展示编辑此页链接
  lastUpdated: true, // 是否显示页面最后更新时间
  contributors: true, // 是否显示页面贡献者

  sidebarIcon: true, // 是否开启sidebar图标支持

  // 布局配置（以下为默认配置）
  // Brand: 站点品牌
  // Links: 导航栏链接
  // Language: 语言切换菜单
  // Search: 搜索框
  // Outlook: 外观弹窗
  // Repo: 项目仓库
  navbarLayout: {
    left: ['Brand'],
    center: ['Links'],
    right: ['Language', 'Repo', 'Outlook', 'Search']
  },

  toc: true, // 是否开启标题列表（默认true）

  displayFooter: false, // 是否每个页面都显示页脚

  footer: '<a href="https://github.com/MisterChen9527" target="_blank">Chen Wen Jing</a>', // string｜boolean 全局默认页脚（支持HTMLString 会以v-html指令渲染）

  copyright: 'Copyright © 2022 Mr.Chen', // string｜boolean 全局版权信息（同样也支持HTMLString 当你引用的文章且该文章使用了特定许可的情况下很有用）

  locales: {
    '/': {
      navbar: zhNavbarConfig, // 中文navbar
      sidebar: zhSidebarConfig, // 中文sidebar

      // 配置主页中的博主信息
      blog: {
        name: '陈文景', // 名称（默认取站点名称）
        avatar: '/assets/img/avatar.png', // 头像（默认取站点logo）
        roundAvatar: true, // 头像是否需要被剪裁成圆形
        description: '一个全栈开发者', // 博主个人描述（一句话介绍、座右铭或口号）
        sidebarDisplay: 'mobile', // 非博客页面下侧边栏的行为（可选："mobile"（默认） | "none" | "always"）
        intro: '/about/', // 个人介绍页地址（点击头像与姓名时会自动进行跳转）
        // 该对象用于配置个人的社交媒体链接（支持自定义：https://vuepress-theme-hope.gitee.io/v2/zh/guide/blog/blogger.html#座右铭、社交媒体与个人介绍页地址）
        medias: {
          QQ: 'https://im.qq.com/index',
          Qzone: 'https://i.qq.com/',
          Zhihu: 'https://www.zhihu.com',
          Steam: 'https://steamcommunity.com',
          Weibo: 'https://weibo.com',
          Gitee: 'https://gitee.com/mister_chen'
        }
      }
    },

    '/en/': {
      navbar: enNavbarConfig, // 英文navbar
      sidebar: enSidebarConfig, // 英文sidebar

      blog: {
        name: 'Mr.Chen',
        avatar: '/assets/img/avatar.png',
        roundAvatar: true,
        description: 'A full stack developer',
        sidebarDisplay: 'mobile',
        intro: '/en/about/',
        medias: {
          Steam: 'https://steamcommunity.com',
          Weibo: 'https://weibo.com',
          Gitee: 'https://gitee.com/mister_chen'
        }
      }
    }
  },

  plugins: {
    // 博客功能
    blog: true,

    // 版权信息（用户复制文本时自动携带）
    copyright: {
      global: false, // 是否开启版权信息（可在需要的页面中frontmatter单独开启）
      author: 'Mr.Chen', // 作者
      license: 'MIT' // 协议
    },

    activeHeaderLinks: true, // 是否开启活动的标题链接

    // 评论组件
    // comment: {
    //   provider: 'Waline',
    //   serverURL: 'https://mister-hope-blog-comment.vercel.app' // 此处需替换为该项目在服务器中的地址（详细配置：https://vuepress-theme-hope.gitee.io/v2/zh/guide/feature/comment.html#waline）
    // },

    feed: {
      atom: true,
      json: true,
      rss: true
    },

    mdEnhance: {
      enableAll: false, // 是否启用md-enhance插件的所有扩展功能（仅将此选项用于体验或测试 仅启用需要的功能）
      align: true,
      codetabs: true,
      demo: true,
      flowchart: true,
      footnote: true,
      imageMark: true,
      presentation: true,
      sub: true,
      sup: true,
      tex: true,
      vpre: true
    },

    pwa: {
      favicon: '/favicon.ico',
      themeColor: '#fb9b5f',
      cachePic: true, // 是否缓存站点图片
      maxPicSize: 2048, // 图片允许缓存的最大大小（该选项不能大于maxSize的值）
      cacheHTML: true, // 是否缓存所有HTML页面（是否缓存主页和404错误页之外的HTML文件）
      maxSize: 3072, // 自定义缓存的最大文件大小
      update: 'available', // 发现新内容时的控制逻辑（详情见：https://vuepress-theme-hope.gitee.io/v2/zh/config/plugins/pwa.html#update）
      apple: {
        icon: '/assets/icon/apple-touch-icon.png', // 苹果使用的图标地址
        statusBarColor: 'white' // 苹果的状态栏颜色
      },
      msTile: {
        image: '/assets/icon/ms-icon-144.png', // 磁贴图标
        color: '#ffffff' // 磁贴颜色（缺省会自动回退到主题色）
      },
      showInstall: true, // 是否在ServiceWorker首次成功注册时显示PWA安装按钮（默认值为true）
      manifest: {
        name: 'Mr.Chen 的个人博客',
        short_name: 'Mr.Chen Blog',
        description: 'Mr.Chen 的个人博客',
        theme_color: '#fb9b5f',
        icons: [
          {
            src: '/assets/icon/chrome-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/assets/icon/chrome-512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/assets/icon/chrome-mask-192.png',
            sizes: '192x192',
            purpose: 'maskable',
            type: 'image/png'
          },
          {
            src: '/assets/icon/chrome-mask-512.png',
            sizes: '512x512',
            purpose: 'maskable',
            type: 'image/png'
          }
        ],
        shortcuts: [
          {
            name: '分类',
            short_name: '分类',
            icons: [
              {
                src: '/assets/icon/category-maskable.png',
                sizes: '192x192',
                purpose: 'maskable',
                type: 'image/png'
              },
              {
                src: '/assets/icon/category-monochrome.png',
                sizes: '192x192',
                purpose: 'monochrome',
                type: 'image/png'
              }
            ],
            url: '/category/',
            description: '文章分类分组'
          },
          {
            name: '标签',
            short_name: '标签',
            icons: [
              {
                src: '/assets/icon/tag-maskable.png',
                sizes: '192x192',
                purpose: 'maskable',
                type: 'image/png'
              },
              {
                src: '/assets/icon/tag-monochrome.png',
                sizes: '192x192',
                purpose: 'monochrome',
                type: 'image/png'
              }
            ],
            url: '/tag/',
            description: '文章标签分组'
          },
          {
            name: '时间线',
            short_name: '时间线',
            icons: [
              {
                src: '/assets/icon/timeline-maskable.png',
                sizes: '192x192',
                purpose: 'maskable',
                type: 'image/png'
              },
              {
                src: '/assets/icon/timeline-monochrome.png',
                sizes: '192x192',
                purpose: 'monochrome',
                type: 'image/png'
              }
            ],
            url: '/timeline/',
            description: '时间线文章列表'
          },
          {
            name: '个人介绍',
            short_name: '个人介绍',
            icons: [
              {
                src: '/assets/icon/about-maskable.png',
                sizes: '192x192',
                purpose: 'maskable',
                type: 'image/png'
              },
              {
                src: '/assets/icon/about-monochrome.png',
                sizes: '192x192',
                purpose: 'monochrome',
                type: 'image/png'
              }
            ],
            url: '/about/',
            description: '个人介绍'
          }
        ]
      }
    }
  }
})
