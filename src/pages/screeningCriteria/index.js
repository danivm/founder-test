import {RequirementsList} from '../../components/requirementsList'

const baseClass = 'fn-ScreeningCriteria'

export function ScreeningCriteriaPage() {
  return (
    <div className={baseClass}>
      <h1 className={`${baseClass}-title`}>Screening Criteria</h1>
      <RequirementsList />
    </div>
  )
}
