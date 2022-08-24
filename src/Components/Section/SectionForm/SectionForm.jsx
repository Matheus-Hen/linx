import React from 'react'
import Form from '../../Form/Form'
import Article from '/src/Components/Article/ArticleForm/ArticleForm'
import style from './SectionForm.module.css'
const SectionForm = () => {
    return (
        <section className={style.sectionForm}>
           <Article />
           <Form />
        </section>
    )
}

export default SectionForm