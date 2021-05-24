import StatsValueObject from '../valueObjects/stats'
import GetCompanyInfoService from './getCompanyInfo'

const servicesFactory = {
  getCompaniesUseCase: () =>
    GetCompanyInfoService({
      statsValueObjectFactory: StatsValueObject
    })
}

export default servicesFactory
