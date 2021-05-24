import React, {createContext} from 'react'
import PropTypes from 'prop-types'

export const Context = createContext()

const Provider = ({config, children, domain, i18n}) => {
  const value = {
    config,
    domain,
    i18n
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

Provider.propTypes = {
  config: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
  domain: PropTypes.object.isRequired,
  i18n: PropTypes.object.isRequired
}

export default Provider
