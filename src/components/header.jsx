import React from 'react'
import { HashRouter, Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='container'>
      <section className='row p-5'>
        <HashRouter>
          <Link to='/'>
            <h1 className='text-dark text-decoration-none'>React Examples</h1>
          </Link>
        </HashRouter>
      </section>
    </header>
  )
}
