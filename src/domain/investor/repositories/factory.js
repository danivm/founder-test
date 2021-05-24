import MockRepository from './mockRepository'
import RequirementEntity from '../entities/requirement'
import RequirementListValueObject from '../valueObjects/requirementList'

const repositoriesFactory = {
  mockRepository: () =>
    MockRepository({
      requirementEntityFactory: RequirementEntity,
      requirementListValueObjectFactory: RequirementListValueObject
    })
}

export default repositoriesFactory
