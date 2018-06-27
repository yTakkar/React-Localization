import React from 'react'
import strings from './localization'
import { string } from 'prop-types'
import Context from './Context'

class UpdateLanguage extends React.Component {
  render() {
    let { what } = this.props
    return (
      <Context.Consumer>
        {({ state }) => {
          strings.setLanguage(state.language)
          return strings[what]
        }}
      </Context.Consumer>
    )
  }
}

UpdateLanguage.propTypes = {
  what: string.isRequired
}

export default UpdateLanguage
