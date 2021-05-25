import DECISION_VALUES from '../../config/decisionValues'

/**
 * @param {Object} props
 * @param {String} props.id
 * @param {DecisionValues} props.decision
 * @param {String} props.name
 * @param {Requirement[]} props.requirements
 * @param {String} props.web
 */

const CompanyEntity = ({
  id,
  decision = DECISION_VALUES.WAITING,
  name,
  web,
  requirements
}) => {
  return Object.freeze({
    id,
    decision,
    name,
    requirements,
    web
  })
}

export default CompanyEntity
