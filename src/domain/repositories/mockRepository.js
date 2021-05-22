import defaultRequirements from '../../../mock/defaultRequirements'

const MockRepository = ({requirementsAggregateFactory}) => ({
  getRequirements: async ({investorId}) => {
    const requirementsReponse = await defaultRequirements

    const requirementsAggregate = requirementsAggregateFactory(
      requirementsReponse
    )

    return requirementsAggregate
  }
})

export default MockRepository
