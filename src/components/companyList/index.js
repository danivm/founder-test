import PropTypes from 'prop-types'
import {useState, useContext, useEffect} from 'react'
import {Context} from '../../context.js'
import {CompanyItem} from '../companyItem'

const baseClass = 'fn-CompaniesList'

export function CompanyList({decision, isSummary = false}) {
  const {companies, i18n} = useContext(Context)
  const [filteredCompanies, setFilteredCompanies] = useState([])

  useEffect(() => {
    const filteredCompanies = decision
      ? companies.filter(({info}) => info.decision === decision)
      : companies
    setFilteredCompanies(filteredCompanies)
  }, [companies, decision])

  if (!filteredCompanies.length > 0) return null

  return (
    <div className={baseClass}>
      <h1 className={`${baseClass}-title`}>{i18n.INVESTMENT_PAGE[decision]}</h1>
      <div className={`${baseClass}-header`}>
        <div className={`${baseClass}-headerColumnName`}>
          {i18n.COMPANY_LIST.COLUMNS.COMPANY}
        </div>
        <div className={`${baseClass}-headerColumnName`}>
          {i18n.COMPANY_LIST.COLUMNS.MATCHING_SCORE}
        </div>
        <div className={`${baseClass}-headerColumnName`}>
          {i18n.COMPANY_LIST.COLUMNS.WARNINGS}
        </div>
        <div className={`${baseClass}-headerColumnName`}>
          {i18n.COMPANY_LIST.COLUMNS.MISSING_INFO}
        </div>
        {!isSummary && (
          <>
            <div className={`${baseClass}-headerColumnName`}>
              {i18n.COMPANY_LIST.COLUMNS.MUST}
            </div>
            <div className={`${baseClass}-headerColumnName`}>
              {i18n.COMPANY_LIST.COLUMNS.SUPER_NICE}
            </div>
            <div className={`${baseClass}-headerColumnName`}>
              {i18n.COMPANY_LIST.COLUMNS.NICE}
            </div>
          </>
        )}
        <div className={`${baseClass}-headerColumnName`}>
          {i18n.COMPANY_LIST.COLUMNS.DECISION}
        </div>
      </div>
      {filteredCompanies.map(company => {
        const {info, stats} = company

        return (
          <CompanyItem
            key={info.id}
            info={info}
            stats={stats}
            isSummary={isSummary}
          />
        )
      })}
    </div>
  )
}

CompanyList.propTypes = {
  decision: PropTypes.string.isRequired,
  isSummary: PropTypes.bool
}
