/**
 * @param {Object} props
 * @param {String} props.investorRequirementId
 * @param {RequirmentValue} props.value
 */

const RequirementValueObject = ({investorRequirementId, value}) =>
  Object.freeze({
    investorRequirementId,
    value
  })

export default RequirementValueObject
