import React from 'react'
import Context from '../Context'
import Options from './options'

const ChangeLanguage = () => {
  return (
    <Context.Consumer>
      {({ state, actions }) => {
        let handleChange = e => actions.changeLanguage(e.target.value)

        return (
          <React.Fragment>
            <select value="" onChange={handleChange}>
              <Options />
            </select>{' '}
            ({state.language})
          </React.Fragment>
        )
      }}
    </Context.Consumer>
  )
}

export default ChangeLanguage
