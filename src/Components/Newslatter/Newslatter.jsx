import React from 'react'
import Input from '../Input/Input'
import Label from '../Label/Label'
import styleNews from './Newslatter.module.css'
import style from '../Form/Form.module.css'
// import Button from '../Button/Button'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { updateNameFriend } from '../../feature/Nome/NomeFriend'

const Newslatter = () => {
  const gName = useSelector((state)=> state.nomeUser.value)

  const dispachat = useDispatch()
 function handleChangeName(e){
    dispachat(updateNameFriend(e.target.value))
  }
  return (
    <section>
      <div className={styleNews.sectionNews}>
        <div className={styleNews.linhaLeft}></div>
        <h3 className={styleNews.title}>Compartilhe a novidade!</h3>
        <div className={styleNews.linhaRigth}></div>
      </div>
      <div className={styleNews.AreaNews}>
        <h3 style={{marginTop: "50px"}}>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora! </h3>
        <div className={styleNews.form}>
          <div>
            <Label text="Nome" />
            <Input EventChange={handleChangeName} Value={gName} Type="text" Class={style.inputText} Id="Nome" />
          </div>
          <div>
            <Label text="Email" />
            <Input Type="email"  Class={style.inputText} Id="Email" />
          </div>
        </div>
      <Link className={styleNews.link} to="/email">Enviar agora</Link>
      </div>
    </section>
  )
}

export default Newslatter