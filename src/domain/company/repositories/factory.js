import MockRepository from './mockRepository'
import RequirementValueObject from '../models/requirementValueObject'
import CompanyEntity from '../models/companyEntity'
import CompanyListValueObject from '../models/companyListValueObject'

const repositoriesFactory = {
  mockRepository: () =>
    MockRepository({
      companyEntityFactory: CompanyEntity,
      companyListValueObjectFactory: CompanyListValueObject,
      requirementValueObjectFactory: RequirementValueObject
    })
}

export default repositoriesFactory
