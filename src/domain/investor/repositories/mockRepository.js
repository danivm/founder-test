const MockRepository = ({
  requirementEntityFactory,
  requirementListValueObjectFactory
}) => ({
  getRequirements: async ({user}) => {
    const module = await import(`../../../../mock/${user}/defaultRequirements`)
    const {requirements} = module.default
    const requirementEntityList = requirements.map(requirementEntityFactory)
    const requirementListValueObject = requirementListValueObjectFactory({
      requirements: requirementEntityList
    })

    return requirementListValueObject
  }
})

export default MockRepository
