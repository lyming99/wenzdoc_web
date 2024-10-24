import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "温知文档",
  description: "温知文档,温知笔记,欢迎使用温知系列产品！",
  head:[
    [
      'meta',
      {
        'name':'google-site-verification',
        'conent':'WdZcIFrpcQ6Kg-231I_PZJeYOmAm-YEo_GSSJzFIVX8'
      }
    ],
    [
      'meta',
      {
        'name':'baidu-site-verification',
        'conent':'codeva-p2J2jhIegl'
      }
    ],[
      'script',{},
      `var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?9e2beda54a190b8718409b3053276fc6";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();`
    ]
  ],
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
    ],
    //页脚
    footer: {
      message: '',
      copyright: 'Copyright ©WenzDoc 2024 备案号：<a href="https://beian.miit.gov.cn/" target="_blank">赣ICP备2024022623号-3</a>',  
    },
  }
})
