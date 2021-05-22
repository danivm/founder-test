import REQUIREMENT_VALUES from '../config/requirementValues'

/**
 * @param {Object} props
 * @param {String} props.id
 * @param {String} props.criteria
 * @param {PriorityType} props.priority
 * @param {RequirmentValue} props.value
 */

const RequirementEntity = ({
  id,
  criteria,
  priority,
  value = REQUIREMENT_VALUES.UNKNOWN
}) =>
  Object.freeze({
    id,
    criteria,
    priority,
    value
  })

export default RequirementEntity
