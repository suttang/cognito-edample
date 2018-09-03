import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import 'ress'
import './App.css'

import HomePage from '~/components/pages/Home'
import LoginPage from '~/components/pages/Login'
import NotFound from '~/components/pages/NotFound'

export interface Props {}

const App: React.SFC<Props> = (props) => (
  <Switch>
    <Route exact={true} path="/" component={HomePage} />
    <Route path="/login" component={LoginPage} />
    <Route component={NotFound} />
  </Switch>
)

export default App
