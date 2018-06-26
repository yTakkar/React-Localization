import React from 'react'
import LocalizedMessage from '../LocalizedMessage'

const HowRU = () => (
  <LocalizedMessage what="howRU">
    {string => <h1>{string}</h1>}
  </LocalizedMessage>
)

export default HowRU
