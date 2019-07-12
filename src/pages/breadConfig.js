/**
 * 面包屑的配置文件,有to属性是可跳转面包屑，没有则是不可跳转面包屑
 * path:当前页面路由
 * breads:面包屑列表
 * to:跳转路由
 * name:面包屑名称
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