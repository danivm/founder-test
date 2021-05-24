import companyUseCasesFactory from './company/useCases/factory'
import investorUseCasesFactory from './investor/useCases/factory'

export default {
  // company
  getListCompanyUseCase: companyUseCasesFactory.getListUseCase(),
  // investor
  getRequirementsInvestorUseCase: investorUseCasesFactory.getRequirementsUseCase()
}
