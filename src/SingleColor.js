import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColors }) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  /*
   * bcg => background based on rgb property from the object color
   * rgb is an object, with join is possible to join his values with ',' as a string
   */
  const hex = rgbToHex(...rgb)
  /*
   * using rgbToHex function from utils.js from stackoverflow to convert rgb to hex
   */

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => clearTimeout()
  }, [alert])

  /*
   * setTimeout when alert change and remove paragraph from the color square
   * clearTimeout after each change
   */

  return (
    <article
      className={`color ${index > 8 && 'color-light'}`}
      /*
       * className => add class color and if index > 8 add another class color-light
       * for darker colors
       */
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hex)
      }}
      /*
       * setAlert to true to display a paragraph
       * function for copy to clipboard
       */
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hex}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
      {/*
       * If alert is true display a paragraph
       */}
    </article>
  )
}

export default SingleColor
