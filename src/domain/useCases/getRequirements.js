const GetRequirementsUseCase = ({repository}) => {
  return async ({investorId}) => {
    const requirementsAggregate = repository.getRequirements({investorId})

    return requirementsAggregate
  }
}

export default GetRequirementsUseCase
