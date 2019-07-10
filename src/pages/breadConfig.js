/**
 * 面包屑的配置文件
 */

export const Config = [
  {
    path: '/page', bread: []
  },
  {
    path: '/page/richtext', breads: [{ to: '/page/richtext', name: '富文本编辑器' }]
  },
  {
    path: '/page/module/create', breads: [{ name: '模板管理' }, { to: '/page/module/create', name: '创建模板' }]
  },
  {
    path: '/page/module/list', breads: [{ name: '模板管理' }, { to: '/page/module/list', name: '模板列表' }]
  }
]