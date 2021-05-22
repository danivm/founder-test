/**
 * @param {Object} props
 * @param {String} props.id
 * @param {String} props.name
 * @param {RequirementsAggregate} props.requirements
 */

const CompanyEntity = ({id, name, requirements}) =>
  Object.freeze({
    id,
    name,
    requirements
  })

export default CompanyEntity
