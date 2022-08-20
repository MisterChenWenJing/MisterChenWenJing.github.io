import { arraySidebar } from 'vuepress-theme-hope'

export const guide = arraySidebar([
  '',
  'file-structure',
  'env',
  {
    text: '配置',
    icon: 'config',
    prefix: 'config/',
    children: ['', 'app-config', 'page-config', 'sitemap-config']
  },
  {
    text: '框架',
    icon: 'frame',
    prefix: 'frame/',
    children: ['intro', 'scene', 'env', 'mechanism', 'update']
  },
  {
    text: '逻辑层',
    icon: 'process',
    prefix: 'service/',
    children: [
      '',
      'lifetime',
      'route',
      'register',
      'app',
      'page',
      'run',
      'module',
      {
        text: 'API',
        icon: 'api',
        prefix: 'api/',
        children: ['', 'route', 'storage', 'interact', 'network', 'system']
      }
    ]
  },
  {
    text: '视图层',
    icon: 'layout',
    prefix: 'view/',
    children: [
      '',
      {
        text: 'WXML',
        icon: 'code',
        collapsable: true,
        children: ['wxml', 'data-bind', 'condition-render', 'list-render', 'template']
      },
      'wxss',
      'event',
      'component',
      'animation',
      'wxs',
      'wxs-event',
      'model',
      'selector',
      'rendering-cache'
    ]
  },
  {
    text: '能力',
    icon: 'safe',
    prefix: 'ability/',
    children: ['', 'network', 'storage', 'file-system', 'debug']
  }
])
