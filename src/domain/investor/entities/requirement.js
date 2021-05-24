/**
 * @param {Object} props
 * @param {String} props.id
 * @param {String} props.criteria
 * @param {PriorityType} props.priority
 */

const RequirementEntity = ({id, criteria, priority}) =>
  Object.freeze({
    id,
    criteria,
    priority
  })

export default RequirementEntity
