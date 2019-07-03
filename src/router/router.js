import React, { Component } from 'react';
import AsyncLoading from '../components/AsyncLoad/asyncLoad';
import { Switch, Route } from 'react-router-dom';
import { routerLink } from './config.js';
const Index = AsyncLoading(() => import('../pages/index/index.jsx'))


export default class Router extends Component {
  render() {
    return (
      <Switch>
        {/* {
          routerLink.map((router, index) => {
            if (router.subMenu && router.subMenu.length > 0) {
              router.subMenu.map((subRouter, subIndex) => (<Route key={subRouter.Link} path={subRouter.Link} Component={subRouter.component} />))
            }
            return <Route key={router.Link} path={router.Link} Component={router.component} />
          })
        } */}
        <Route path='/page/index' component={Index} />
      </Switch>
    )
  }
}
