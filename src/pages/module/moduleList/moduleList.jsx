import React, { Component } from 'react';
import BreadcrumbCustom from '../../BreadCrumb';

export default class ModuleList extends Component {
  render() {
    return (
      <React.Fragment>
        <BreadcrumbCustom />
        <div>模板列表</div>
      </React.Fragment>
    )
  }
}