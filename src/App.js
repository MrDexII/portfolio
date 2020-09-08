import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import useMobileCheck from './useMobileCheck'

function App() {
  const isMobile = useMobileCheck();

  return (
    <div>
      {/* <Header isMobile={isMobile} /> */}
      <Main isMobile={isMobile} />
      {/* <Footer isMobile={isMobile} /> */}
    </div>
  )
}

export default App
