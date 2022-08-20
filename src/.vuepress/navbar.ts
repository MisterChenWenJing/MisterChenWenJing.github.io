import { navbar } from 'vuepress-theme-hope'

export const zhNavbarConfig = navbar([
  '/',
  {
    text: '随笔',
    icon: 'note',
    prefix: '/note/',
    children: [
      { text: '随笔', link: '', icon: 'note', activeMatch: '^/note/$' },
      {
        text: '其他',
        children: ['node-js/']
      }
    ]
  },
  {
    text: '代码笔记',
    icon: 'code',
    children: [
      {
        text: '代码笔记',
        icon: 'code',
        link: '/code/',
        activeMatch: '^/code/$'
      },
      {
        text: '产品设计',
        children: ['/design/']
      },
      {
        text: '后端运维',
        children: ['/linux/']
      }
    ]
  },
  {
    text: '软件教程',
    icon: 'software',
    prefix: '/software/',
    children: [
      {
        text: '软件教程',
        icon: 'software',
        link: '',
        activeMatch: '^/software/$'
      },
      'vscode/',
      'git/'
    ]
  }
])

export const enNavbarConfig = navbar(['/en/', '/en/note/', '/en/code/', '/en/software/'])
