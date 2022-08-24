import React from 'react'
import Button from '../Button/Button'
import style from './Card.module.css'
const Card = ({ img, Title, Descricao, oldPrice, Price, value, count, Class }) => {
  return (
    <div className={style.Card}>
      <img src={img} className={style.Image} />
      <h5 className={style.Card}>{Title}</h5>
      <p className={style.Card}>{Descricao}</p>
      <h6 className={style.Card}>De: {oldPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h6>
      <h3 className={style.Card} style={{ fontWeight: "bold" }}>Por: {Price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h3>
      <span style={{ marginBottom: "10px" }}>ou {count} de {value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
      <div>
        <Button Class={Class} Texto="Comprar" />
      </div>
    </div>
  )
}

export default Card