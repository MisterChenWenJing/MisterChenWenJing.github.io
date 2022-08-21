import { arraySidebar } from 'vuepress-theme-hope'

export const python = arraySidebar([
  '',
  {
    text: '介绍',
    icon: 'info',
    link: 'intro/',
    prefix: 'intro/',
    children: ['intro', 'install', 'interpreter']
  },
  {
    text: '基础教程',
    icon: 'creative',
    link: 'guide/',
    prefix: 'guide/',
    children: ['write', 'io', 'basic', 'string', 'list-and-tuple', 'condition', 'loop', 'dict-and-set']
  },
  {
    text: '函数',
    icon: 'function',
    link: 'function/',
    prefix: 'function/',
    children: ['intro', 'define', 'call', 'argument', 'recursive']
  },
  {
    text: '高级语法',
    icon: 'advance',
    link: 'advance/',
    prefix: 'advance/',
    children: ['slice', 'iteration', 'list-comprehensions', 'generator', 'iterator']
  },
  {
    text: '函数式编程',
    icon: 'function',
    prefix: 'functional-programming/',
    children: [
      '',
      {
        text: '高阶函数',
        icon: 'function',
        link: 'high-order-function/',
        prefix: 'high-order-function/',
        children: ['intro', 'map-and-reduce', 'filter', 'sorted']
      },
      'return-function',
      'anonymous-function',
      'decorator',
      'parital-function'
    ]
  },
  {
    text: '模块',
    icon: 'module',
    link: 'module/',
    prefix: 'module/',
    children: ['intro', 'usage', 'install']
  },
  {
    text: '面向对象编程',
    icon: 'object',
    link: 'oop/',
    prefix: 'oop/',
    children: ['intro', 'instance', 'extend', 'property', 'info', 'customize', 'special']
  }
])