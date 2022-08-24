import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../Components/Header/Header'
import '../CSS/Email.css'
const Email = () => {
  const nomeUser = useSelector((state) => state.nomeUser.value)
  const nomeFriend = useSelector((state) => state.nomeFriend.value)
  return (
    <div>
      <Header styleHeader={{width: "600px"}} />
      <div>
        <h2>
          Olá {nomeFriend}
        </h2>
        <h5>
          Fizemos uma lista especial de produtos apenas para você. Isso mesmo: nesta lista temos só produtos <br/> 
          que você pode gostar. Seu amigo {nomeUser} lhe recomendou essa lista especial. Olha só:
        </h5>
      </div>
    </div>
  )
}

export default Email