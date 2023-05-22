import React from 'react'
import './App.css'
import Footer from "./components/Footer.jsx"
import HeaderMob from './components/HeaderMob'
import HeaderDesk from './components/HeaderDesk'
import Main from './components/Main'
import { useState, useEffect } from "react"

function App() {

  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth))
  }, [])

  return (
    <>
     {width > 767 ? <HeaderDesk /> : <HeaderMob />}
     <Main />
     <Footer />
    </>
  )
}

export default App
