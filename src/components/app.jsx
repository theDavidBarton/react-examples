import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './home'
import LotOfReactButtons from './lotOfReactButtons'
import Page404 from './page404'
import Header from './header'
import Footer from './footer'

export default function App() {
  return (
    <Fragment>
      <Header />
      <BrowserRouter basename='/react-examples/'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/lot-of-react-buttons' component={LotOfReactButtons} />
          <Route component={Page404} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </Fragment>
  )
}
