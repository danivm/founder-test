import repositoriesFactory from '../repositories/factory'
import GetRequirementsUseCase from './getRequirements'

const useCasesFactory = {
  getRequirementsUseCase: () =>
    GetRequirementsUseCase({
      repository: repositoriesFactory.mockRepository()
    })
}

export default useCasesFactory
