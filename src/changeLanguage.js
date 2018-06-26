import React from 'react'
import Context from './Context'
import Options from './options'

const ChangeLanguage = () => {
  return (
    <Context.Consumer>
      {({ actions }) => {
        let handleChange = e => actions.changeLanguage(e.target.value)

        return (
          <select value="" onChange={handleChange}>
            <Options />
          </select>
        )
      }}
    </Context.Consumer>
  )
}

export default ChangeLanguage
