
export const routerLink = [
  { name: "首页", icon: "pie-chart", Link: '/page/index', component: 'Index' },
  {
    name: "桌面样式", icon: "desktop",
    subMenu: [
      { name: '圆形', Link: '/page/ui', component: 'Index' },
      { name: '三角形', Link: '/page/ui2', component: 'Index' }
    ]
  }
]