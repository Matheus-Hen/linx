import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateName } from '../../feature/Nome/NomeSlice'
import { validCPF, validEmail, validNome } from '../../Validation/Regex'
import Button from '../Button/Button'
import Input from '../Input/Input'
import Label from '../Label/Label'
import style from './Form.module.css'

const Form = () => {
    const  [styleNome, setStyleNome] = useState(style.inputText)
    const  [styleEmail, setstyleEmail] = useState(style.inputText)
    const  [styleCPF, setstyleCPF] = useState(style.inputText)
    const dispachat = useDispatch()
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    function handleAlert(e){
        e.preventDefault()
        const nomeValid = validNome.exec(nome)
        const emailValid = validEmail.exec(email)
        const cpfValid = validCPF.exec(cpf)
        console.log(nomeValid, emailValid, cpfValid);
        if(nomeValid!= null && emailValid!=null && cpfValid!=null){
            setStyleNome(style.Valid)
            setstyleCPF(style.Valid)
            setstyleEmail(style.Valid)
            dispachat(updateName(nomeValid[0]));
        }   
        else{
            nomeValid==null? setStyleNome(style.Invalid): setStyleNome(style.Valid)
            emailValid==null? setstyleEmail(style.Invalid): setstyleEmail(style.Valid)
            cpfValid==null? setstyleCPF(style.Invalid): setstyleCPF(style.Valid)
            alert("Dados preenchidos incorretamente")
        }
    }
    return (
        <form className={style.form}>
            <Label text="Nome" />
            <Input Type="text" Id="Nome" Value={nome} EventChange={(e)=>{setNome(e.target.value)}} Class={styleNome}/>
            <Label text="Email" />
            <Input Type="email" Id="Email" Value={email} EventChange={(e)=>{setEmail(e.target.value)}} Class={styleEmail}/>
            <Label text="CPF" />
            <Input Type="text" Id="CPF" Value={cpf} EventChange={(e)=>{setCpf(e.target.value)}} Class={styleCPF} />
            <div>
                <Label text="Masculino" />
                <Input Type="radio" Id="Masculino" Name="Sexo" Value="Masculino" Class={style.inputCheckBox} />
                <Label text="Feminino" />
                <Input Type="radio" Id="Feminino" Name="Sexo" Value="Feminino" />
            </div>
            <Button Texto="Enviar" Class={style.button} Event={handleAlert} />
        </form>
    )
}

export default Form