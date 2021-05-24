import {CompanyList} from '../../components/companyList'

const baseClass = 'fn-InvestmentPage'

export function InvestmentPage() {
  return (
    <div className={baseClass}>
      <h1 className={`${baseClass}-title`}>InvestmentPage</h1>
      <CompanyList />
    </div>
  )
}
