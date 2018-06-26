import React from 'react'
import { languagesArray } from '../languages'

const Options = () => {
  let Cap = str => str.charAt(0).toUpperCase() + str.substr(1)

  return (
    <React.Fragment>
      <option value="">Select Language</option>
      {languagesArray.map(language => (
        <option key={language} value={language}>
          {Cap(language)}
        </option>
      ))}
    </React.Fragment>
  )
}

export default Options
