import React from 'react'
import ChangeLanguage from './changeLanguage'

import HelloWorld from './lines/HelloWorld'
import GoodMorning from './lines/GoodMorning'
import HowRU from './lines/HowRU'
import AllGood from './lines/AllGood'

const App = () => {
  return (
    <div>
      <ChangeLanguage />
      <HelloWorld />
      <GoodMorning />
      <HowRU />
      <AllGood />
    </div>
  )
}

export default App
