import React, { useEffect, useState } from 'react'
import style from './SectionProdutos.module.css'
import Button from '../../Button/Button'
import Card from '../../Card/Card'

const SectionProdutos = () => {
    const [page, setPage] = useState(1)
    const [link, setLink] = useState("frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1")
    const [data, setData] = useState([])
    const [db, setDb] = useState([])
    function dataAPI() {
      return page == 1 ? fetch(`https://${link}`).then((response) => response.json())
        .then((value) => {
          setData(...data, value.products)
          setLink(value.nextPage)
  
        }) : fetch(`https://${link}`).then((response) => response.json())
          .then((value) => {
            setData(value.products)
            setLink(value.nextPage)
            for (let i = 0; value.products.length > i; i++) {
              db.push(value.products[i])
            }
          })
    }
    useEffect(() => {
      dataAPI()
    }, [page])
    const Cards = page == 1 ? data.map((data, index) => {
      db.push(data)
      return <Card Title={data.name} img={data.image} Descricao={data.description} oldPrice={data.oldPrice} Price={data.price} count={data.installments.count} value={data.installments.value} Class={style.Button} key={index.toString()} />
    }) : db.map((data, index) => {
      return <Card Title={data.name} img={data.image} Descricao={data.description} oldPrice={data.oldPrice} Price={data.price} count={data.installments.count} value={data.installments.value} Class={style.Button} key={index.toString()} />
    })
    function handClick() {
        setPage(page + 1)
    }
    return (
        <section>
            <div className={style.sectionProd}>
                <div className={style.linhaLeft}></div>
                <h3 className={style.title}>Sua seleção especial</h3>
                <div className={style.linhaRigth}></div>
            </div>
            <div className={style.Prod}>
                <div className={style.CardsArea}>
                    {Cards}
                </div>
                <Button Class={style.ButtonProducts} Texto="Ainda mais produtos aqui!" Event={handClick} />
            </div>
        </section>
    )
}

export default SectionProdutos