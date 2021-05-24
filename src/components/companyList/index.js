import {useState, useEffect, useContext} from 'react'
import {Context} from '../../context.js'
import {CompanyItem} from '../companyItem'

const baseClass = 'fn-CompaniesList'

export function CompanyList() {
  const [requirements, setRequirements] = useState([])
  const [companies, setCompanies] = useState([])
  const {domain} = useContext(Context)

  useEffect(() => {
    if (requirements.length < 1) return

    domain
      .getListCompanyUseCase({
        invertorId: 'xxxx',
        inverstorRequirements: requirements
      })
      .then(setCompanies)
  }, [domain, requirements])

  useEffect(() => {
    domain
      .getRequirementsInvestorUseCase({invertorId: 'xxxx'})
      .then(setRequirements)
  }, [domain])

  if (!companies.length > 0) return null

  return (
    <div className={baseClass}>
      <div className={`${baseClass}-header`}>
        <div className={`${baseClass}-headerColumnName`}>Company</div>
        <div className={`${baseClass}-headerColumnName`}>Matching Score</div>
        <div className={`${baseClass}-headerColumnName`}>Warnings</div>
        <div className={`${baseClass}-headerColumnName`}>Missing Info</div>
        <div className={`${baseClass}-headerColumnName`}>Must Haves</div>
        <div className={`${baseClass}-headerColumnName`}>
          Super Nice to Haves
        </div>
        <div className={`${baseClass}-headerColumnName`}>Nice to Haves</div>
      </div>
      {companies.map(company => {
        const {info, stats} = company

        return <CompanyItem key={info.id} info={info} stats={stats} />
      })}
    </div>
  )
}
