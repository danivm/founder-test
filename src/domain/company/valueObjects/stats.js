/**
 * @param {Object} props
 * @param {MatchingScoresValues} props.matchingScore
 * @param {Number} props.missingInfo
 * @param {MustHavesValues} props.mustHaves
 * @param {Number} props.niceToHave
 * @param {Number} props.superNiceToHaves
 * @param {Number } props.warnings
 */

const StatsValueObject = ({
  matchingScore,
  missingInfo,
  mustHaves,
  niceToHaves,
  superNiceToHaves,
  warnings
}) => {
  return Object.freeze({
    matchingScore,
    missingInfo,
    mustHaves,
    niceToHaves,
    superNiceToHaves,
    warnings
  })
}

export default StatsValueObject
