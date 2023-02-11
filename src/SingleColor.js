import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColors }) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hex = rgbToHex(...rgb)
  /*
   * bcg => background based on rgb property from the object color
   * rgb is an object, with join is possible to join his values with ',' as a string
   */
  return (
    <article className={`color`} style={{ backgroundColor: `rgb(${bcg})` }}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hex}</p>
      {/*
       * using rgbToHex function from utils.js from stackoverflow to convert rgb to hex
       */}
    </article>
  )
}

export default SingleColor
