import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import AsyncLoading from '../../components/AsyncLoad/asyncLoad';

const ModuleList = AsyncLoading(() => import('./moduleList/moduleList.jsx'))
const CreateModule = AsyncLoading(() => import('./createModule/createModule.jsx'))

export default function Module() {
  return (
    <Switch>
      <Route path="/page/module" render={() => <CreateModule />}  exact/>
      <Route path="/page/module/create" render={() => <CreateModule />} />
      <Route path="/page/module/list" render={() => <ModuleList />} />
    </Switch>
  )
}