import React from 'react'
import GetLocalizedString from '../getLocalizedString'

class AllGood extends React.Component {
  render() {
    return (
      <GetLocalizedString what="allGood">
        {string => <h1>{string}</h1>}
      </GetLocalizedString>
    )
  }
}

export default AllGood
