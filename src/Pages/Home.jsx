import React from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import MainWeb from '../Components/Main/Main'
import Navigation from '../Components/Navigation/Navigation'
import '../CSS/App.css'

const Home = () => {
    return (
        <div style={{padding: "0px"}}>
            <Header styleHeader={{width: "1500px", heigth: "500px"}} Navigation={<Navigation />} />
            <div className="conteiner">
                <MainWeb />
            </div>
            <Footer />
        </div>
    )
}

export default Home