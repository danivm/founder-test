import MockRepository from './mockRepository'
import RequirementValueObject from '../valueObjects/requirement'
import CompanyEntity from '../entities/company'
import CompanyListValueObject from '../valueObjects/companyList'

const repositoriesFactory = {
  mockRepository: () =>
    MockRepository({
      companyEntityFactory: CompanyEntity,
      companyListValueObjectFactory: CompanyListValueObject,
      requirementValueObjectFactory: RequirementValueObject
    })
}

export default repositoriesFactory
