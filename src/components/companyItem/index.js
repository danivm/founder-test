import PropTypes from 'prop-types'
// import {useState, useEffect, useContext} from 'react'
// import {Context} from '../../context.js'

const baseClass = 'fn-CompanyItem'

export function CompanyItem({info, stats}) {
  // const {config, domain, i18n} = useContext(Context)

  const {name, web} = info

  const {
    matchingScore,
    warnings,
    missingInfo,
    mustHaves,
    superNiceToHaves,
    niceToHaves
  } = stats

  return (
    <div className={baseClass}>
      <div className={`${baseClass}-info`}>
        <span className={`${baseClass}-infoName`}>{name}</span>
        <span className={`${baseClass}-infoWeb`}>{web}</span>
      </div>
      <div className={`${baseClass}-stat`}>{matchingScore}</div>
      <div className={`${baseClass}-stat`}>{warnings} %</div>
      <div className={`${baseClass}-stat`}>{missingInfo} %</div>
      <div className={`${baseClass}-stat`}>{mustHaves}</div>
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
