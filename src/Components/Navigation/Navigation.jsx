import React from 'react'
import Topics from '../Topics/Topics'
import style from './Navigation.module.css'
const Navigation = () => {
  return (
    <div className={style.topics}>
    <Topics texto="Conheça a linx" />
    <Topics texto="Ajude o algoritmo" />
    <Topics texto="Seus produtos" />
    <Topics texto="Compartilhe" />
  </div>
  )
}

export default Navigation