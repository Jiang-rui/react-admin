import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import AsyncLoading from './components/AsyncLoad/asyncLoad'
// import './App.css';
const NotFound = AsyncLoading(() => import('./components/NotFound/notFound'));
const Login = AsyncLoading(() => import('./pages/login/Login'));
const Page = AsyncLoading(() => import('./pages/Page.jsx'))
export default () => (
  <Router>
    <Switch>
      <Route path="/" render={() => <Redirect to={{ pathname: '/login' }} />} exact />
      <Route path="/login" component={Login} />
      <Route path="/page" component={Page} />
      <Route path="/404" component={NotFound} />
      <Route path="/*" component={NotFound} />
    </Switch>
  </Router>
)