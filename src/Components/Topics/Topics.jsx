import React from 'react'
import style from './Topics.module.css'

const Topics = ({texto}) => {
  return (
    <div className={style.boxTopics}>
      <p className={style.text}>{texto}</p>
      </div>
  )
}

export default Topics