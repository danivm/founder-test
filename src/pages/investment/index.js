import {useContext} from 'react'
import {Context} from '../../context'
import {CompanyList} from '../../components/companyList'

const baseClass = 'fn-InvestmentPage'

export function InvestmentPage() {
  const {i18n} = useContext(Context)

  return (
    <div className={baseClass}>
      <h1 className={`${baseClass}-title`}>{i18n.INVESTMENT_PAGE.WAITING}</h1>
      <CompanyList />
    </div>
  )
}
