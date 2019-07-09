/**
 * 侧边的菜单路由配置
 */
export const routerLink = [
  { name: "首页", icon: "home", Link: '/page', },
  { name: '富文本编辑器', icon: "file-text", Link: '/page/richtext', },
  {
    name: "模板管理", icon: "snippets",
    subMenu: [
      { name: '创建模板', Link: '/page/module/create', },
      { name: '模板列表', Link: '/page/module/list', },
    ]
  }, {
    name: "审核管理", icon: "audit",
    subMenu: [
      { name: '未提交列表', Link: '/page/ui13', },
      { name: '待审核列表（初审）', Link: '/page/ui3', },
      { name: '待审核列表（复审）', Link: '/page/ui4', },
      { name: '已审核列表', Link: '/page/ui5', }
    ]
  },
  {
    name: "系统设置", icon: "setting",
    subMenu: [
      { name: '数字字典', Link: '/page/ui6', },
      { name: '短信模板', Link: '/page/ui7', },
      { name: '机构管理', Link: '/page/ui8', },
    ]
  },
  {
    name: "系统管理", icon: "appstore",
    subMenu: [
      { name: '用户管理', Link: '/page/ui9', },
      { name: '角色管理', Link: '/page/ui10', },
      { name: '操作日志', Link: '/page/ui11', },
      { name: '登录日志', Link: '/page/ui12', },
    ]
  },
]