const MockRepository = ({
  companyEntityFactory,
  companyListValueObjectFactory,
  requirementValueObjectFactory
}) => ({
  getCompanyList: async ({user}) => {
    const module = await import(`../../../../mock/${user}/defaultCompanies`)
    const {companies} = module.default
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
