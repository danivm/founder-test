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
    const requirimentsWithMissing = requirements.filter(
      ({value}) => value === REQUIREMENT_VALUES.UNKNOWN
    )
    const missingInfo = parseInt(
      (requirimentsWithMissing.length * 100) / totalRequirements
    )

    // nice to have
    const niceToHaveRequirements = investorRequirements.map(
      ({priority}) => priority === PRIORITY_TYPES.NICE
    )
    const niceToHaves = parseInt(
      (niceToHaveRequirements.length * 100) / totalRequirements
    )

    // super nice to have
    const superNiceToHaveRequirements = investorRequirements.map(
      ({priority}) => priority === PRIORITY_TYPES.SUPER_NICE
    )
    const superNiceToHaves = parseInt(
      (superNiceToHaveRequirements.length * 100) / totalRequirements
    )

    // must have
    const mustHaveRequirements = investorRequirements.map(
      ({priority}) => priority === PRIORITY_TYPES.MUST
    )

    const isSomeMust = requirement =>
      mustHaveRequirements.some(
        ({id}) =>
          requirements.find(
            ({investorRequirementId}) => investorRequirementId === id
          )?.value === requirement
      )

    let mustHaves
    if (isSomeMust(REQUIREMENT_VALUES.UNKNOWN)) {
      mustHaves = MUST_HAVE_VALUES.UNKNOWN
    } else if (isSomeMust(REQUIREMENT_VALUES.NO)) {
      mustHaves = MUST_HAVE_VALUES.KO
    } else {
      mustHaves = MUST_HAVE_VALUES.OK
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
