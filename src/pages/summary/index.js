import {useContext} from 'react'
import {Context} from '../../context'
import {CompanyList} from '../../components/companyList'

const baseClass = 'fn-SummaryPage'

export function SummaryPage() {
  const {config} = useContext(Context)
  const {DECISION_VALUES} = config

  return (
    <div className={baseClass}>
      <CompanyList decision={DECISION_VALUES.WAITING} isSummary />
      <CompanyList decision={DECISION_VALUES.MEET} isSummary />
      <CompanyList decision={DECISION_VALUES.PASS} isSummary />
    </div>
  )
}
