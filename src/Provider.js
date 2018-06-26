import React from 'react'
import Context from './Context'
import { languagesArray } from './languages'

class Provider extends React.Component {
  state = {
    language: languagesArray[0]
  }

  actions = () => ({
    changeLanguage: language => this.setState({ language })
  })

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          actions: this.actions()
        }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Provider
