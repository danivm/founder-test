const GetListUseCase = ({
  repository,
  getCompanyInfoService,
  companyAggregateFactory,
  inverstorRequirementListValueObjectFactory
}) => {
  return async ({investorId, inverstorRequirements}) => {
    const companyListValueObject = await repository.getCompanyList({
      investorId
    })

    const inverstorRequirementListValueObject = inverstorRequirementListValueObjectFactory(
      {requirements: inverstorRequirements}
    )

    const createCompanyAggregate = async companyValueObject => {
      const statsValueObject = await getCompanyInfoService({
        company: companyValueObject,
        investorRequirements: inverstorRequirementListValueObject.requirements
      })

      const companyAggregate = companyAggregateFactory({
        company: companyValueObject,
        stats: statsValueObject
      })

      return companyAggregate
    }

    const companyAggregateList = await Promise.all(
      companyListValueObject.companies.map(createCompanyAggregate)
    )

    return [...companyAggregateList]
  }
}

export default GetListUseCase
