import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Nav from './components/Nav'
import useMobileCheck from './useMobileCheck'

function App() {

  return (
    <>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
