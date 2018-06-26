import React from 'react'
import ChangeLanguage from './changeLanguage/changeLanguage'
import Visit from './visit'

import HelloWorld from './lines/HelloWorld'
import GoodMorning from './lines/GoodMorning'
import HowRU from './lines/HowRU'
import AllGood from './lines/AllGood'

const App = () => {
  return (
    <div>
      <Visit />
      <ChangeLanguage />
      <HelloWorld />
      <GoodMorning />
      <HowRU />
      <AllGood />
    </div>
  )
}

export default App
