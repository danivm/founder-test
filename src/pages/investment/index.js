import {useContext} from 'react'
import {Context} from '../../context'
import {CompanyList} from '../../components/companyList'

const baseClass = 'fn-InvestmentPage'

export function InvestmentPage() {
  const {config} = useContext(Context)
  const {DECISION_VALUES} = config

  return (
    <div className={baseClass}>
      <CompanyList decision={DECISION_VALUES.WAITING} />
      <CompanyList decision={DECISION_VALUES.MEET} />
      <CompanyList decision={DECISION_VALUES.PASS} />
    </div>
  )
}
