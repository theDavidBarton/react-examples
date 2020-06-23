import React, { Fragment } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from './home'
import LotOfReactButtons from './lotOfReactButtons'
import Page404 from './page404'
import Header from './header'
import Footer from './footer'
import SearchDropdown from './searchDropdown'

export default function App() {
  return (
    <Fragment>
      <Header />
      <HashRouter basename='/'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/lot-of-react-buttons' component={LotOfReactButtons} />
          <Route path='/search-dropdown' component={SearchDropdown} />
          <Route component={Page404} />
        </Switch>
      </HashRouter>
      <Footer />
    </Fragment>
  )
}
