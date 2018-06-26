import React from 'react'
import languages from './languages'

const SelectInput = () => {
  let Cap = str => str.charAt(0).toUpperCase() + str.substr(1)

  return (
    <React.Fragment>
      <option value="">Select Language</option>
      {Object.keys(languages).map(language => (
        <option key={language} value={language}>
          {Cap(language)}
        </option>
      ))}
    </React.Fragment>
  )
}

export default SelectInput
