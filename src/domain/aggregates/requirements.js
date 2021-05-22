/**
 * @param {Object} props
 * @param {RequirementEntity[]} props.requirements
 */

import RequirementEntity from '../entities/requirement'

const RequirementsAggregate = ({requirements}) => {
  const requirementsAggregate = requirements.map(RequirementEntity)

  return Object.freeze({
    requirements: requirementsAggregate
  })
}

export default RequirementsAggregate
