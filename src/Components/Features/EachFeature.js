import React from 'react'
import style from './Features.module.css'

const EachFeature = (props) => {
  return (
    <div className={style.eachFeature}>
      <img src={props.image} alt='Image' />
      <h1>{props.heading}</h1>
      <p>{props.paragraph}</p>
    </div>
  )
}

export default EachFeature
