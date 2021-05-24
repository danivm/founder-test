import repositoriesFactory from '../repositories/factory'
import servicesFactory from '../services/factory'
import GetListUseCase from './getList'
import CompanyAggregate from '../aggregates/companyAggregate'
import InvestorRequirementListValueObject from '../../investor/valueObjects/requirementList'

const useCasesFactory = {
  getListUseCase: () =>
    GetListUseCase({
      repository: repositoriesFactory.mockRepository(),
      getCompanyInfoService: servicesFactory.getCompaniesUseCase(),
      companyAggregateFactory: CompanyAggregate,
      inverstorRequirementListValueObjectFactory: InvestorRequirementListValueObject
    })
}

export default useCasesFactory
