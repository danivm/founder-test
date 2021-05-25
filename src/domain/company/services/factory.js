import StatsValueObject from '../models/statsValueObject'
import GetCompanyInfoService from './getCompanyInfo'

const servicesFactory = {
  getCompaniesUseCase: () =>
    GetCompanyInfoService({
      statsValueObjectFactory: StatsValueObject
    })
}

export default servicesFactory
