import React from 'react'
import style from './Articles.module.css'

const EachFeature = (props) => {
  return (
    <div className={style.eachFeature}>
      <img src={props.image} alt='Image' />
      <h2>{props.heading}</h2>
      <p>{props.paragraph}</p>
    </div>
  )
}

export default EachFeature
