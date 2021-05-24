import defaultCompanies from '../../../../mock/defaultCompanies'

const MockRepository = ({
  companyEntityFactory,
  companyListValueObjectFactory,
  requirementValueObjectFactory
}) => ({
  getCompanyList: async ({investorId}) => {
    const {companies} = await defaultCompanies

    const companyList = companies.map(company => {
      const {requirements} = company
      const requirementsValueObjects = requirements.map(
        requirementValueObjectFactory
      )
      const companyEntity = companyEntityFactory({
        ...company,
        requirements: requirementsValueObjects
      })
      return companyEntity
    })

    const companyListValueObject = companyListValueObjectFactory({
      companies: companyList
    })

    return companyListValueObject
  }
})

export default MockRepository
