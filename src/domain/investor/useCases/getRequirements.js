const GetRequirementsUseCase = ({repository}) => {
  return async ({investorId}) => {
    const requirementListValueObject = await repository.getRequirements({
      investorId
    })

    return requirementListValueObject.requirements
  }
}

export default GetRequirementsUseCase
