import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '世界模型研究报告',
  description: '世界模型（World Model）完整研究报告 — 覆盖 1943–2026 年，~210 篇论文，9 大研究方向',
  lang: 'zh-CN',
  base: '/world-model-survey/',
  lastUpdated: true,
  cleanUrls: true,

  head: [],

  markdown: {
    math: true,
  },

  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: '世界模型研究',

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: {
            noResultsText: '未找到结果',
            resetButtonTitle: '清除搜索',
            footer: { selectText: '选择', navigateText: '导航', closeText: '关闭' },
          },
        },
      },
    },

    nav: [
      { text: '首页', link: '/' },
      {
        text: '研究方向',
        items: [
          { text: '① 强化学习', link: '/directions/01-reinforcement-learning' },
          { text: '② 视频生成', link: '/directions/02-video-generation' },
          { text: '③ 自动驾驶', link: '/directions/03-autonomous-driving' },
          { text: '④ 具身 AI', link: '/directions/04-embodied-ai' },
          { text: '⑤ LLM 世界模型', link: '/directions/05-llm' },
          { text: '⑥ JEPA', link: '/directions/06-jepa' },
          { text: '⑦ 交互式游戏', link: '/directions/07-interactive-games' },
          { text: '⑧ 3D/4D', link: '/directions/08-3d-4d' },
          { text: '⑨ 领域特定', link: '/directions/09-domain-specific' },
        ],
      },
      { text: '生态', link: '/ecosystem/enterprises' },
      { text: '分析', link: '/analysis/tech-comparison' },
      { text: '附录', link: '/appendix' },
      {
        text: '📄 完整版下载',
        link: '/世界模型完整研究报告.md',
        target: '_blank',
      },
    ],

    sidebar: [
      {
        text: '第一部分：认知建立',
        collapsed: false,
        items: [
          { text: '执行摘要', link: '/overview/executive-summary' },
          { text: '什么是世界模型？', link: '/overview/definition' },
          { text: '发展历程与时间线', link: '/overview/timeline' },
        ],
      },
      {
        text: '第二部分：九大研究方向',
        collapsed: false,
        items: [
          { text: '① 强化学习世界模型', link: '/directions/01-reinforcement-learning' },
          { text: '② 视频生成 × 世界模拟', link: '/directions/02-video-generation' },
          { text: '③ 自动驾驶世界模型', link: '/directions/03-autonomous-driving' },
          { text: '④ 具身 AI 世界模型', link: '/directions/04-embodied-ai' },
          { text: '⑤ LLM × 世界模型', link: '/directions/05-llm' },
          { text: '⑥ JEPA 与表征预测', link: '/directions/06-jepa' },
          { text: '⑦ 交互式游戏', link: '/directions/07-interactive-games' },
          { text: '⑧ 3D/4D 几何感知', link: '/directions/08-3d-4d' },
          { text: '⑨ 领域特定', link: '/directions/09-domain-specific' },
        ],
      },
      {
        text: '第三部分：生态与产业',
        collapsed: false,
        items: [
          { text: '全球企业与机构布局', link: '/ecosystem/enterprises' },
          { text: '开源生态全景', link: '/ecosystem/opensource' },
        ],
      },
      {
        text: '第四部分：分析与展望',
        collapsed: false,
        items: [
          { text: '技术路线对比', link: '/analysis/tech-comparison' },
          { text: '评估基准景观', link: '/analysis/benchmarks' },
          { text: '关键趋势与展望', link: '/analysis/trends' },
          { text: '结论', link: '/analysis/conclusion' },
        ],
      },
      {
        text: '附录',
        items: [
          { text: '论文与参考文献索引', link: '/appendix' },
        ],
      },
    ],

    outline: {
      level: [2, 3],
      label: '本页目录',
    },

    lastUpdated: {
      text: '最后更新',
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JoenHune/world-model-survey' },
    ],

    footer: {
      message: '基于 VitePress 构建',
      copyright: 'MIT License © 2026',
    },
  },
})
