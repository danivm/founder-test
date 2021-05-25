import MockRepository from './mockRepository'
import RequirementEntity from '../models/requirementEntity'
import RequirementListValueObject from '../models/requirementListValueObject'

const repositoriesFactory = {
  mockRepository: () =>
    MockRepository({
      requirementEntityFactory: RequirementEntity,
      requirementListValueObjectFactory: RequirementListValueObject
    })
}

export default repositoriesFactory
