import React from 'react'
import ChangeLanguage from './changeLanguage'

import HelloWorld from './lines/HelloWorld'
import GoodMorning from './lines/GoodMorning'
import HowRU from './lines/HowRU'

const App = () => {
  return (
    <div>
      <ChangeLanguage />
      <HelloWorld />
      <GoodMorning />
      <HowRU />
    </div>
  )
}

export default App
