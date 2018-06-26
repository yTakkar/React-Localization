import React from 'react'
import LocalizedMessage from '../LocalizedMessage'

class GoodMorning extends React.Component {
  render() {
    return (
      <LocalizedMessage what="goodMorning">
        {string => <h1>{string}</h1>}
      </LocalizedMessage>
    )
  }
}

export default GoodMorning
