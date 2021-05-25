import {useContext} from 'react'
import {Context} from '../../context'
import {RequirementsList} from '../../components/requirementsList'

const baseClass = 'fn-ScreeningCriteriaPage'

export function ScreeningCriteriaPage() {
  const {i18n} = useContext(Context)

  return (
    <div className={baseClass}>
      <h1 className={`${baseClass}-title`}>{i18n.SCREENING_CRITERIA.TITLE}</h1>
      <RequirementsList />
    </div>
  )
}
