import MockRepository from './mockRepository'
import RequirementsAggregate from '../aggregates/requirements'

const repositoriesFactory = {
  mockRepository: () =>
    MockRepository({
      requirementsAggregateFactory: RequirementsAggregate
    })
}

export default repositoriesFactory
