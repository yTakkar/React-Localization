import React from 'react'
import Context from './Context'

class Provider extends React.Component {
  state = {
    language: 'english'
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
