import React, { memo } from 'react'

const Button = ({ Texto, Event, Class }) => {
  return (
    <button className={Class} onClick={Event}>{Texto}</button>
  )
}

export default memo(Button)