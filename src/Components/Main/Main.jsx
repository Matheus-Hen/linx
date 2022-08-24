import React from 'react'
import Newslatter from '../Newslatter/Newslatter'
import SectionForm from '../Section/SectionForm/SectionForm'
import SectionProdutos from '../Section/SectionProdutos/SectionProdutos'

const MainWeb = () => {
  return (
    <main>
        <SectionForm />
        <SectionProdutos />
        <Newslatter />
    </main>
  )
}

export default MainWeb