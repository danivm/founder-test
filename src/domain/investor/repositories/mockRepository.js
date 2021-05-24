import defaultRequirements from '../../../../mock/defaultRequirements'

const MockRepository = ({
  requirementEntityFactory,
  requirementListValueObjectFactory
}) => ({
  getRequirements: async ({investorId}) => {
    const {requirements} = await defaultRequirements
    const requirementEntityList = requirements.map(requirementEntityFactory)
    const requirementListValueObject = requirementListValueObjectFactory({
      requirements: requirementEntityList
    })

    return requirementListValueObject
  }
})

export default MockRepository
