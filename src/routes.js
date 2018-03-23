import React, { Component } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Wizard from './components/wizard/Wizard';


export default (
<HashRouter>
<div>
    <Switch>
        <Route path='/dashboard' component= {Dashboard}/>
        <Route path='/Wizard' component= {Wizard}/>
    </Switch>
</div>
</HashRouter>
)