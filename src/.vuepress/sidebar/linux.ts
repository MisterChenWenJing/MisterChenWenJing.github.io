import { arraySidebar } from 'vuepress-theme-hope'

export const linux = arraySidebar([
  '',
  {
    text: '简介',
    icon: 'info',
    link: 'intro/',
    prefix: 'intro/',
    children: ['intro', 'history', 'language', 'advantage', 'desktop']
  },
  {
    text: '文件结构',
    icon: 'file',
    link: 'file/',
    prefix: 'file/',
    children: ['file', 'dir', 'mount']
  },
  {
    text: '命令',
    icon: 'program',
    link: 'command/',
    prefix: 'command/',
    children: ['command', 'dir', 'file', 'other', 'add', 'excu', 'path', 'ln']
  },
  {
    text: 'Bash',
    icon: 'program',
    link: 'bash/',
    prefix: 'bash/',
    children: ['intro', 'grammar', 'expansion', 'quotation', 'variable', 'string', 'arithmetic', 'readline', 'stack', 'script', 'read', 'condition', 'loop', 'function', 'array', 'set', 'debug', 'mktemp', 'startup', 'prompt']
  },
  {
    text: 'ubuntu',
    icon: 'ubuntu',
    link: 'ubuntu/',
    prefix: 'ubuntu/',
    children: ['manage', 'debug', 'webserver', 'lang']
  },
  'centos',
  'WSL',
  'ssh'
])
