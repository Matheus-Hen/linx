import React from 'react'
import style from "./Header.module.css"
const Header = ({Navigation, styleHeader}) => {
  return (
    <header style={styleHeader} className={style.header}>
      <div className={style.textHeaders}>
        <h3 style={{margin: "5px"}}>Uma seleção de produtos</h3>
        <h1 style={{margin: "0px"}}>Especial para você</h1>
        <h5 style={{margin: "30px"}}>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</h5>
      </div>
      {Navigation}
    </header>
  )
}

export default Header