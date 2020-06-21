import React, { useState } from 'react'

export default function LotOfReactButtons() {
  const buttons = [...Array(132).keys()]
  return (
    <main className='bg-light'>
      <section className='container p-5'>
        {buttons.map(b => (
          <Button key={b + 1} value={b + 1} />
        ))}
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
