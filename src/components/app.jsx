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
      <BrowserRouter>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
          <Route path={`${process.env.PUBLIC_URL}/lot-of-react-buttons`} component={LotOfReactButtons} />
          <Route component={Page404} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </Fragment>
  )
}
