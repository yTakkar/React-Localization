import React from 'react'
import LocalizedMessage from '../LocalizedMessage'

class GoodMorning extends React.Component {
  render() {
    return (
      <h1>
        <LocalizedMessage of="goodMorning" />
      </h1>
    )
  }
}

export default GoodMorning
