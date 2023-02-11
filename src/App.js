import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      setError(false)
      let colors = new Values(color).all(10)
      /*
       * get 10 tint/ 10 shade values from value.js
       */
      setList(colors)
      /*
       * set retrieved values to the list of color values
       */
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            /*
             * onChange => setColor to the value which user type in the input field
             */
            placeholder='#f15025'
            className={`${error ? 'error' : null}`}
            /*
             * If there is an error set class error if not set class null
             */
          />
          <button className='btn' type='submit'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          console.log(color)
          return <SingleColor key={index} {...color} index={index} />
          /*
           * {...color} passing all props of object color to SingleColor component
           * index => prop
           */
        })}{' '}
      </section>
    </>
  )
}

export default App
