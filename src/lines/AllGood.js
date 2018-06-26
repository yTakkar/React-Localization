import React from 'react'
import LocalizedMessage from '../LocalizedMessage'

class AllGood extends React.Component {
  render() {
    return (
      <LocalizedMessage what="allGood">
        {string => <h1>{string}</h1>}
      </LocalizedMessage>
    )
  }
}

export default AllGood
