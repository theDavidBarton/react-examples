import React, { useState, useEffect, Fragment } from 'react'

export default function ApiCall() {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function getApiSearch() {
      try {
        const response = await fetch('https://thedavidbarton.herokuapp.com/api/1/oneyplays')
        const json = await response.json()
        setData(json)
      } catch (e) {
        console.error(e)
      }
    }
    getApiSearch()
  }, [])

  return (
    <main className='bg-light height-keep'>
      <section className='container p-5'>
        <div className='row justify-content-md-left'>
          <h1 className='col'>Api Call</h1>
          {data ? (
            <Fragment>
              {data.map(el => (
                <Item key={el.id} data={el} />
              ))}
            </Fragment>
          ) : null}
        </div>
      </section>
    </main>
  )
}

function Item({ data }) {
  return (
    <div className='col m-1'>
      <a href={data.url}>
        <img className='align-self-end img-height' src={data.yt_thumbnail} alt={data.title}></img>
      </a>
      <h2 className='item-heading'>{data.title + ' (' + data.release_year + ')'}</h2>
    </div>
  )
}
