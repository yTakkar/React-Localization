import React from 'react'
import GetLocalizedString from '../getLocalizedString'

class HelloWorld extends React.Component {
  render() {
    return (
      <GetLocalizedString what="helloWorld">
        {string => <h1>{string}</h1>}
      </GetLocalizedString>
    )
  }
}

export default HelloWorld
