import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "温知文档",
  description: "温知文档,温知笔记,欢迎使用温知系列产品！",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '下载软件', link: '/download' },
      { text: '使用帮助', link: '/help' },
      { text: '隐私政策', link: '/privacy' },
    ],

    sidebar: [
      { text: '下载软件', link: '/download' },
      { text: '使用帮助', link: '/help' },
      { text: '隐私政策', link: '/privacy' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lyming99/wenzdoc_web' }
    ]
  }
})