import React from "react"
import './CSS/App.css'
import Home from "./Pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Email from "./Pages/Email"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/?" element={<Home />} />
          <Route path="email" element={<Email />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
