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

  return (
    <article
      className={`color ${index > 8 && 'color-light'}`}
      /*
       * className => add class color and if index > 8 add another class color-light
       * for darker colors
       */
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hex}</p>
    </article>
  )
}

export default SingleColor
