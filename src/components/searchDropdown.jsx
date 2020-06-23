import React, { useState, useEffect, Fragment } from 'react'

export default function SearchDropdown() {
  const [data, setData] = useState(null)
  const [dataIsReady, setDataIsReady] = useState(false)
  const [dropdownIsopened, setDropdownIsopened] = useState(false)
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    async function getApiSearch() {
      if (keyword !== '' && keyword.length > 2) {
        try {
          const response = await fetch(`https://swapi.dev/api/people/?search=${keyword.toLowerCase()}`)
          const json = await response.json()
          setData(json)
          setDataIsReady(true)
        } catch (e) {
          console.error(e)
        }
      }
    }
    getApiSearch()
  }, [keyword])

  const setKeywordInInput = event => {
    setKeyword(event.target.value)
    setDropdownIsopened(true)
  }

  const closeDropdown = () => {
    setDropdownIsopened(false)
    setKeyword('')
  }

  return (
    <main className='bg-light height-keep'>
      <section className='container p-5'>
        <div className='row justify-content-md-left'>
          <div className='col-12 col-md-5 align-self-end order-1 order-md-0 pb-4'>
            <div className='position-relative' style={{ zIndex: 1 }}>
              <input
                aria-label='search for a character'
                id='searchform'
                className='form-control mt-2'
                type='text'
                placeholder='Type a SW character name…'
                value={keyword}
                onChange={setKeywordInInput}
              />
              {dataIsReady ? (
                <Fragment>
                  {dropdownIsopened && keyword.length > 2 ? (
                    <div className='bg-white w-auto text-dark position-absolute dropdown-position py-2 px-2'>
                      <ul className='list-unstyled mb-0'>
                        {data.count > 0 ? (
                          data.results.map((result, i) => <SearchDropdownItem key={i} id={i} result={result} />)
                        ) : (
                          <SearchDropdownItemNoResult />
                        )}
                      </ul>
                      <div id='dropdownOverlay' onClick={closeDropdown} className='overlay-style'></div>
                    </div>
                  ) : null}
                </Fragment>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function SearchDropdownItem({ result, id }) {
  return (
    <Fragment>
      <li key={id + '_li'} className='my-1 text-nowrap d-inline-block text-truncate result-list-width'>
        <span key={id + '_span'} className='mx-1'>
          {result.gender === 'female' ? '♀ ' : '♂ '}
          {result.name}
        </span>
      </li>
    </Fragment>
  )
}

function SearchDropdownItemNoResult() {
  return (
    <li className='my-1 text-nowrap d-inline-block text-truncate result-list-width'>
      <span className='mx-1'>no results found...</span>
    </li>
  )
}
