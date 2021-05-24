import {useState, useEffect, useContext} from 'react'
import {Context} from '../../context.js'

const baseClass = 'fn-ScreeningCriteria'

export function ScreeningCriteriaPage() {
  const [requirements, setRequirements] = useState([])
  const {config, domain, i18n} = useContext(Context)
  const {PRIORITY_TYPES} = config

  useEffect(() => {
    domain
      .getRequirementsUseCase({invertorId: 'foo'})
      .then(({requirements}) => setRequirements(requirements))
  }, [])

  return (
    <div className={baseClass}>
      <h1 className={`${baseClass}-title`}>Screening Criteria</h1>
      <div className={`${baseClass}-requirementList`}>
        {requirements.map(requirement => {
          const {id, criteria, priority} = requirement

          return (
            <div className={`${baseClass}-requirement`} key={id}>
              <span className={`${baseClass}-requirementName`}>{criteria}</span>
              <select
                className={`${baseClass}-requirementType`}
                name="requirements"
              >
                {Object.keys(PRIORITY_TYPES).map(type => {
                  return (
                    <option
                      value={type}
                      selected={type === priority}
                      key={type}
                    >
                      {i18n.PRIORITY_TYPES[type]}
                    </option>
                  )
                })}
              </select>
            </div>
          )
        })}
      </div>
    </div>
  )
}
