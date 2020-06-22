import React from 'react'
import { HashRouter, Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className='bg-light height-keep'>
      <section className='container p-5'>
        <div className='row'>
          <div className='col'>
            <h2>Content</h2>
            <HashRouter basename='/'>
              <ul>
                <li>
                  <Link to='/lot-of-react-buttons'>Lot Of React Buttons</Link>
                </li>
                <li>
                  <Link to='/404'>Error Page</Link>
                </li>
              </ul>
            </HashRouter>
          </div>
        </div>
      </section>
    </main>
  )
}
