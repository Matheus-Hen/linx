import React from 'react'

const Input = ({Type, Id, Class, Value, Name, EventChange}) => {

  return (
    <input type={Type} id={Id} className={Class} name={Name} onChange={EventChange} value={Value}/>  )
}

export default Input