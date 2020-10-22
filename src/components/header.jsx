import React from 'react'
import { HashRouter, Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-light'>
      <section className='container p-5'>
        <HashRouter>
          <Link to='/'>
            <h1 className='row text-dark text-decoration-none'>React.Js Examples</h1>
          </Link>
        </HashRouter>
      </section>
    </header>
  )
}
