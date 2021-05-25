import PropTypes from 'prop-types'
import {Check, QuestionMark, Cancel} from 'iconoir-react'
import {useContext} from 'react'
import {Context} from '../../context.js'

const baseClass = 'fn-CompanyItem'
export function CompanyItem({info, stats}) {
  const {config, i18n} = useContext(Context)
  const {MATCHING_SCORE_VALUES, MUST_HAVE_VALUES} = config

  const {name, web} = info

  const {
    matchingScore,
    warnings,
    missingInfo,
    mustHaves,
    superNiceToHaves,
    niceToHaves
  } = stats

  const mustHaveIcons = {
    [MUST_HAVE_VALUES.OK]: <Check color="green" />,
    [MUST_HAVE_VALUES.KO]: <Cancel color="red" />,
    [MUST_HAVE_VALUES.UNKWNOWN]: <QuestionMark color="gray" />
  }

  const matchingScoreDotClass = {
    [MATCHING_SCORE_VALUES.HIGH]: `${baseClass}-dot is-high`,
    [MATCHING_SCORE_VALUES.MEDIUM]: `${baseClass}-dot is-medium`,
    [MATCHING_SCORE_VALUES.NO_MATCH]: `${baseClass}-dot is-empty`,
    [MATCHING_SCORE_VALUES.NO_DATA]: `${baseClass}-dot is-empty`
  }

  return (
    <div className={baseClass}>
      <div className={`${baseClass}-info`}>
        <span className={`${baseClass}-infoName`}>{name}</span>
        <span className={`${baseClass}-infoWeb`}>{web}</span>
      </div>
      <div className={`${baseClass}-stat`}>
        <span className={matchingScoreDotClass[matchingScore]} />
        <span>{i18n.MATCHING_SCORE_VALUES[matchingScore]}</span>
      </div>
      <div className={`${baseClass}-stat`}>{warnings} %</div>
      <div className={`${baseClass}-stat`}>{missingInfo} %</div>
      <div className={`${baseClass}-stat`}>{mustHaveIcons[mustHaves]}</div>
      <div className={`${baseClass}-stat`}>{superNiceToHaves} %</div>
      <div className={`${baseClass}-stat`}>{niceToHaves} %</div>
    </div>
  )
}

CompanyItem.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    web: PropTypes.string
  }),
  stats: PropTypes.shape({
    matchingScore: PropTypes.string.isRequired,
    warnings: PropTypes.number.isRequired,
    missingInfo: PropTypes.number.isRequired,
    mustHaves: PropTypes.string.isRequired,
    superNiceToHaves: PropTypes.number.isRequired,
    niceToHaves: PropTypes.number.isRequired
  })
}
