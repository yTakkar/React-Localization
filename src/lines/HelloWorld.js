import React from 'react'
import LocalizedMessage from '../LocalizedMessage'

class HelloWorld extends React.Component {
  render() {
    return (
      <LocalizedMessage what="helloWorld">
        {string => <h1>{string}</h1>}
      </LocalizedMessage>
    )
  }
}

export default HelloWorld
