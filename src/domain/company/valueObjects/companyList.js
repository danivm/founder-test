/**
 * @param {Object} props
 * @param {CompanyEntity[]} props.requirements
 */

const CompanyListValueObject = ({companies}) =>
  Object.freeze({
    companies
  })

export default CompanyListValueObject
