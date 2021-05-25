import config from '../../config'

const {
  REQUIREMENT_VALUES,
  PRIORITY_TYPES,
  MUST_HAVE_VALUES,
  MATCHING_SCORE_VALUES
} = config

const GetCompanyInfoService = ({statsValueObjectFactory}) => {
  return async ({company, investorRequirements}) => {
    const totalRequirements = investorRequirements.length
    const {requirements} = company

    // warnings
    const requirimentsWithWarnings = requirements.filter(
      ({value}) => value === REQUIREMENT_VALUES.NO
    )
    const warnings = parseInt(
      (requirimentsWithWarnings.length * 100) / totalRequirements
    )

    // missing info
    const requirimentsWithoutMissing = requirements.filter(
      ({value}) =>
        value !== REQUIREMENT_VALUES.YES || value !== REQUIREMENT_VALUES.NO
    )
    const missingInfo = parseInt(
      ((totalRequirements - requirimentsWithoutMissing.length) * 100) /
        totalRequirements
    )

    // nice to have
    const investorNiceToHaveRequirements = investorRequirements.filter(
      ({priority}) => priority === PRIORITY_TYPES.NICE
    )
    const companyNiceToHaveRequirements = requirements.filter(
      ({investorRequirementId}) => {
        return investorNiceToHaveRequirements.some(
          ({id}) => id === investorRequirementId
        )
      }
    )
    const niceToHaves = investorNiceToHaveRequirements.length
      ? parseInt(
          (companyNiceToHaveRequirements.length * 100) /
            investorNiceToHaveRequirements.length
        )
      : 0

    // super nice to have
    const investorSuperNiceToHaveRequirements = investorRequirements.filter(
      ({priority}) => priority === PRIORITY_TYPES.SUPER_NICE
    )
    const companySuperNiceToHaveRequirements = requirements.filter(
      ({investorRequirementId}) => {
        return investorSuperNiceToHaveRequirements.some(
          ({id}) => id === investorRequirementId
        )
      }
    )
    const superNiceToHaves = investorSuperNiceToHaveRequirements.length
      ? parseInt(
          (companySuperNiceToHaveRequirements.length * 100) /
            investorSuperNiceToHaveRequirements.length
        )
      : 0

    // must have
    const investorMusts = investorRequirements.filter(
      ({priority}) => priority === PRIORITY_TYPES.MUST
    )
    const allMusts = investorMusts.every(({id}) => {
      const requirement = requirements.find(
        req => req.investorRequirementId === id
      )
      return requirement?.value === REQUIREMENT_VALUES.YES
    })

    const isSomeMustMissing = investorMusts.some(({id}) => {
      const requirement = requirements.find(
        req => req.investorRequirementId === id
      )
      const value = requirement?.value || REQUIREMENT_VALUES.UNKWNOWN
      return value !== REQUIREMENT_VALUES.YES && value !== REQUIREMENT_VALUES.NO
    })

    let mustHaves
    if (allMusts) {
      mustHaves = MUST_HAVE_VALUES.OK
    } else if (isSomeMustMissing) {
      mustHaves = MUST_HAVE_VALUES.UNKWNOWN
    } else {
      mustHaves = MUST_HAVE_VALUES.KO
    }

    // matchingScore
    let matchingScore
    if (
      mustHaves === MUST_HAVE_VALUES.OK &&
      superNiceToHaves > 50 &&
      niceToHaves > 50
    ) {
      matchingScore = MATCHING_SCORE_VALUES.HIGH
    } else if (mustHaves === MUST_HAVE_VALUES.OK) {
      matchingScore = MATCHING_SCORE_VALUES.MEDIUM
    } else if (mustHaves === MUST_HAVE_VALUES.KO) {
      matchingScore = MATCHING_SCORE_VALUES.NO_MATCH
    } else {
      matchingScore = MATCHING_SCORE_VALUES.NO_DATA
    }

    const statsValueObject = statsValueObjectFactory({
      matchingScore,
      missingInfo,
      mustHaves,
      niceToHaves,
      superNiceToHaves,
      warnings
    })

    return statsValueObject
  }
}

export default GetCompanyInfoService
