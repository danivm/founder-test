import React, {createContext, useEffect, useState} from 'react'
import PropTypes from 'prop-types'

export const Context = createContext()

const Provider = ({config, children, domain, i18n}) => {
  const [companies, setCompanies] = useState([])
  const [requirements, setRequirements] = useState([])
  const [user, setUser] = useState(localStorage.getItem('user'))

  useEffect(() => {
    user ? localStorage.setItem('user', user) : localStorage.removeItem('user')
  }, [user])

  useEffect(() => {
    if (user)
      domain.getRequirementsInvestorUseCase({user}).then(setRequirements)
  }, [domain, user])

  useEffect(() => {
    if (!user || requirements.length < 1) return

    domain
      .getListCompanyUseCase({
        user,
        inverstorRequirements: requirements
      })
      .then(setCompanies)
  }, [domain, requirements, user])

  const value = {
    config,
    companies,
    domain,
    i18n,
    requirements,
    setCompanies,
    setRequirements,
    loginUser: setUser,
    logout: () => setUser(null),
    user
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
