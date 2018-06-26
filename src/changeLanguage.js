import React from 'react'
import Context from './Context'

const ChangeLanguage = () => {
  return (
    <div>
      <Context.Consumer>
        {({ actions }) => {
          let handleChange = e => {
            actions.changeLanguage(e.target.value)
          }

          return (
            <select value="" onChange={handleChange}>
              <option value="">Select Language</option>
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="gu">Gujrati</option>
              <option value="mr">Marathi</option>
            </select>
          )
        }}
      </Context.Consumer>
    </div>
  )
}

export default ChangeLanguage
