const GetRequirementsUseCase = ({repository}) => {
  return async ({user}) => {
    const requirementListValueObject = await repository.getRequirements({
      user
    })

    return requirementListValueObject.requirements
  }
}

export default GetRequirementsUseCase
