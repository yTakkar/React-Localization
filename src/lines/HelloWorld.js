import React from 'react'
import LocalizedMessage from '../LocalizedMessage'

class HelloWorld extends React.Component {
  render() {
    return (
      <h1>
        <LocalizedMessage what="helloWorld" />
      </h1>
    )
  }
}

export default HelloWorld
