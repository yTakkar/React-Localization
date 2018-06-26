import React from 'react'
import GetLocalizedString from '../getLocalizedString'

const HowRU = () => (
  <GetLocalizedString what="howRU">
    {string => <h1>{string}</h1>}
  </GetLocalizedString>
)

export default HowRU
