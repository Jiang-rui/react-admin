/**
 * 主体内容部分的router
 */
import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import AsyncLoading from '../components/AsyncLoad/asyncLoad'
const Index = AsyncLoading(() => import('./index/index.jsx'))
const NotFound = AsyncLoading(() => import('../components/NotFound/notFound'));
const Module = AsyncLoading(() => import('./module/index.jsx'))
const Editor = AsyncLoading(() => import('./Editor/Editor'))
export default function CRouter() {
  return (
    <Switch>
      <Route path="/page" exact render={() => <Index />} />
      <Route path="/page/index" render={() => <Index />} />
      <Route path="/page/module" render={() => <Module />} />
      <Route path="/page/richtext" render={() => <Editor />} />
      <Route path="/page/*" render={() => <NotFound />} />
    </Switch>
  )
}