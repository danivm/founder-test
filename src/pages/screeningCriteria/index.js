import {RequirementsList} from '../../components/requirementsList'

const baseClass = 'fn-ScreeningCriteriaPage'

export function ScreeningCriteriaPage() {
  return (
    <div className={baseClass}>
      <h1 className={`${baseClass}-title`}>Screening Criteria</h1>
      <RequirementsList />
    </div>
  )
}
