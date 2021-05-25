import React, {createContext, useEffect, useState} from 'react'
import PropTypes from 'prop-types'

export const Context = createContext()

const Provider = ({config, children, domain, i18n}) => {
  const [companies, setCompanies] = useState([])
  const [requirements, setRequirements] = useState([])

  useEffect(() => {
    domain
      .getRequirementsInvestorUseCase({invertorId: 'xxxx'})
      .then(setRequirements)
  }, [domain])

  useEffect(() => {
    if (requirements.length < 1) return

    domain
      .getListCompanyUseCase({
        invertorId: 'xxxx',
        inverstorRequirements: requirements
      })
      .then(setCompanies)
  }, [domain, requirements])

  const value = {
    config,
    companies,
    domain,
    i18n,
    requirements,
    setCompanies,
    setRequirements
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
