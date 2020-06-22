import React, { useState, Fragment } from 'react'

export default function LotOfReactButtons() {
  const [numberOfBtns, setNumberOfBtns] = useState(1320)
  const [buttons, setButtons] = useState([...Array(1320).keys()])

  const setNumberInput = event => {
    if (event.target.value.match(/\d/) && parseInt(event.target.value) !== 0 && parseInt(event.target.value) < 4501) {
      const value = parseInt(event.target.value)
      setButtons([...Array(value).keys()])
      setNumberOfBtns(value)
    }
  }

  return (
    <main className='bg-light height-keep'>
      <section className='container p-5'>
        <div>
          <form>
            <label for='quantity'>Number of buttons:</label>
            <input
              type='number'
              id='numberInput'
              name='numberInput'
              min='1'
              max='4500'
              value={numberOfBtns}
              onChange={setNumberInput}
            />
          </form>
        </div>
        <Fragment>
          {buttons.map(b => (
            <Button key={b + 1} value={b + 1} />
          ))}
        </Fragment>
      </section>
    </main>
  )
}

function Button({ value }) {
  const [active, setActive] = useState(false)
  const registerClick = () => {
    setActive(!active)
  }
  return (
    <button id={`btn_${value}`} onClick={registerClick} className={`btn btn-style btn-${active ? 'success' : 'dark'} m-1`}>
      {value}
    </button>
  )
}
