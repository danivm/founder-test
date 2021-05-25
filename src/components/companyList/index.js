import {useState, useEffect, useContext} from 'react'
import {Context} from '../../context.js'
import {CompanyItem} from '../companyItem'

const baseClass = 'fn-CompaniesList'

export function CompanyList() {
  const [companies, setCompanies] = useState([])
  const {domain, requirements, i18n} = useContext(Context)

  useEffect(() => {
    if (requirements.length < 1) return

    domain
      .getListCompanyUseCase({
        invertorId: 'xxxx',
        inverstorRequirements: requirements
      })
      .then(setCompanies)
  }, [domain, requirements])

  if (!companies.length > 0) return null

  return (
    <div className={baseClass}>
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
        <div className={`${baseClass}-headerColumnName`}>
          {i18n.COMPANY_LIST.COLUMNS.MUST}
        </div>
        <div className={`${baseClass}-headerColumnName`}>
          {i18n.COMPANY_LIST.COLUMNS.SUPER_NICE}
        </div>
        <div className={`${baseClass}-headerColumnName`}>
          {i18n.COMPANY_LIST.COLUMNS.NICE}
        </div>
      </div>
      {companies.map(company => {
        const {info, stats} = company

        return <CompanyItem key={info.id} info={info} stats={stats} />
      })}
    </div>
  )
}
