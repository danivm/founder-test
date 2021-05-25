import PropTypes from 'prop-types'
import {Check, QuestionMark, Cancel} from 'iconoir-react'
import {useContext} from 'react'
import {Context} from '../../context.js'

const baseClass = 'fn-CompanyItem'
export function CompanyItem({info, isSummary = false, stats}) {
  const {config, i18n, companies, setCompanies} = useContext(Context)
  const {DECISION_VALUES, MATCHING_SCORE_VALUES, MUST_HAVE_VALUES} = config

  const {id, name, web, decision} = info

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
    [MATCHING_SCORE_VALUES.HIGH]: `${baseClass}-dot ${baseClass}-dot--high`,
    [MATCHING_SCORE_VALUES.MEDIUM]: `${baseClass}-dot ${baseClass}-dot--medium`,
    [MATCHING_SCORE_VALUES.NO_MATCH]: `${baseClass}-dot ${baseClass}-dot--empty`,
    [MATCHING_SCORE_VALUES.NO_DATA]: `${baseClass}-dot ${baseClass}-dot--empty`
  }

  const handleChangeDecision = decision => {
    const newCompanies = companies.map(company => ({...company}))
    const index = newCompanies.findIndex(({info}) => info.id === id)
    newCompanies[index].info = {...newCompanies[index].info, decision}
    setCompanies(newCompanies)
  }

  const renderButtons = () => {
    return (
      <>
        {decision !== DECISION_VALUES.PASS && (
          <button
            className={`${baseClass}-decisionButton ${baseClass}-decisionButton--meet`}
            onClick={() => handleChangeDecision(DECISION_VALUES.MEET)}
          >
            {i18n.DECISION_VALUES.MEET}
          </button>
        )}
        {decision !== DECISION_VALUES.MEET && (
          <button
            className={`${baseClass}-decisionButton ${baseClass}-decisionButton--pass`}
            onClick={() => handleChangeDecision(DECISION_VALUES.PASS)}
          >
            {i18n.DECISION_VALUES.PASS}
          </button>
        )}
      </>
    )
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
      {!isSummary && (
        <>
          <div className={`${baseClass}-stat`}>{mustHaveIcons[mustHaves]}</div>
          <div className={`${baseClass}-stat`}>{superNiceToHaves} %</div>
          <div className={`${baseClass}-stat`}>{niceToHaves} %</div>
        </>
      )}
      <div className={`${baseClass}-stat`}>{renderButtons()}</div>
    </div>
  )
}

CompanyItem.propTypes = {
  info: PropTypes.shape({
    decision: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    web: PropTypes.string
  }),
  isSummary: PropTypes.bool,
  stats: PropTypes.shape({
    matchingScore: PropTypes.string.isRequired,
    warnings: PropTypes.number.isRequired,
    missingInfo: PropTypes.number.isRequired,
    mustHaves: PropTypes.string.isRequired,
    superNiceToHaves: PropTypes.number.isRequired,
    niceToHaves: PropTypes.number.isRequired
  })
}
