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

  console.log('Component', companies)

  if (!companies.length > 0) return null

  return (
    <div className={baseClass}>
      {companies.map(company => {
        const {info, stats} = company

        return <CompanyItem key={info.id} info={info} stats={stats} />
      })}
    </div>
  )
}
