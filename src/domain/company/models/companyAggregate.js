/**
 * @param {Object} props
 * @param {CompanyEntity} props.company
 * @param {StatsValueObject} props.stats
 */

const CompanyAggregate = ({company, stats}) => {
  return Object.freeze({
    info: company,
    stats
  })
}

export default CompanyAggregate
