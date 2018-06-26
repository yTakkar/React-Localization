import React from 'react'
import GetLocalizedString from '../getLocalizedString'

class GoodMorning extends React.Component {
  render() {
    return (
      <GetLocalizedString what="goodMorning">
        {string => <h1>{string}</h1>}
      </GetLocalizedString>
    )
  }
}

export default GoodMorning
