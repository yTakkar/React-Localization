import React from 'react'
import strings from './localization'
import { string } from 'prop-types'
import Context from './Context'

class UpdateLanguage extends React.Component {
  render() {
    let { of } = this.props
    return (
      <Context.Consumer>
        {({ state }) => {
          strings.setLanguage(state.language)
          return strings[of]
        }}
      </Context.Consumer>
    )
  }
}

UpdateLanguage.propTypes = {
  of: string.isRequired
}

export default UpdateLanguage
