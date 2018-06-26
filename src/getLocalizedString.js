import React from 'react'
import strings from './localization'
import { func, string } from 'prop-types'
import Context from './Context'

class UpdateLanguage extends React.Component {
  render() {
    let { children, what } = this.props
    return (
      <Context.Consumer>
        {({ state }) => {
          strings.setLanguage(state.language)
          return <React.Fragment>{children(strings[what])}</React.Fragment>
        }}
      </Context.Consumer>
    )
  }
}

UpdateLanguage.propTypes = {
  children: func.isRequired,
  what: string.isRequired
}

export default UpdateLanguage
