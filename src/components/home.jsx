import React from 'react'

export default function Home() {
  return (
    <main className='bg-light height-keep'>
      <section className='container p-5'>
        <div className='row'>
          <div className='col'>
            <h2>Content</h2>
            <ul>
              <li>
                <a href='/lot-of-react-buttons'>Lot Of React Buttons</a>
              </li>
              <li>
                <a href='/404'>Error Page</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
