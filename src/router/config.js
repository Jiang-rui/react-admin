
export const routerLink = [
  { name: "首页", icon: "home", Link: '/page/index', component: 'Index' },
  {
    name: "模板管理", icon: "snippets",
    subMenu: [
      { name: '创建模板', Link: '/page/ui', component: 'Index' },
      { name: '模板列表', Link: '/page/ui2', component: 'Index' }
    ]
  }, {
    name: "审核管理", icon: "audit",
    subMenu: [
      { name: '未提交列表', Link: '/page/ui13', component: 'Index' },
      { name: '待审核列表（初审）', Link: '/page/ui3', component: 'Index' },
      { name: '待审核列表（复审）', Link: '/page/ui4', component: 'Index' },
      { name: '已审核列表', Link: '/page/ui5', component: 'Index' }
    ]
  },
  {
    name: "系统设置", icon: "setting",
    subMenu: [
      { name: '数字字典', Link: '/page/ui6', component: 'Index' },
      { name: '短信模板', Link: '/page/ui7', component: 'Index' },
      { name: '机构管理', Link: '/page/ui8', component: 'Index' },
    ]
  },
  {
    name: "系统管理", icon: "appstore",
    subMenu: [
      { name: '用户管理', Link: '/page/ui9', component: 'Index' },
      { name: '角色管理', Link: '/page/ui10', component: 'Index' },
      { name: '操作日志', Link: '/page/ui11', component: 'Index' },
      { name: '登录日志', Link: '/page/ui12', component: 'Index' },
    ]
  },
]