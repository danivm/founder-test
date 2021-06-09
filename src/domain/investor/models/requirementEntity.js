/**
 * @param {Object} props
 * @param {String} props.id
 * @param {String} props.criteria
 * @param {Array} props.params
 * @param {PriorityType} props.priority
 * @param {String} props.isParamRequired
 */

const RequirementEntity = ({id, criteria, params, priority, selectedParam}) =>
  Object.freeze({
    id,
    criteria,
    params,
    priority,
    selectedParam
  })

export default RequirementEntity
