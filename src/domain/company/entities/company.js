/**
 * @param {Object} props
 * @param {String} props.id
 * @param {String} props.name
 * @param {Requirement[]} props.requirements
 */

const CompanyEntity = ({id, name, web, requirements}) => {
  return Object.freeze({
    id,
    name,
    requirements,
    web
  })
}

export default CompanyEntity
