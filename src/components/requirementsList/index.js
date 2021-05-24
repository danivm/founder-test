import {useState, useEffect, useContext} from 'react'
import {Context} from '../../context.js'

const baseClass = 'fn-RequirementsList'

export function RequirementsList() {
  const [requirements, setRequirements] = useState([])
  const {config, domain, i18n} = useContext(Context)
  const {PRIORITY_TYPES} = config

  useEffect(() => {
    domain
      .getRequirementsUseCase({invertorId: 'foo'})
      .then(({requirements}) => setRequirements(requirements))
  }, [])

  if (!requirements.length > 0) return null

  return (
    <div className={`${baseClass}`}>
      {requirements.map(requirement => {
        const {id, criteria, priority} = requirement

        return (
          <div className={`${baseClass}-requirement`} key={id}>
            <span className={`${baseClass}-requirementName`}>{criteria}</span>
            <select
              className={`${baseClass}-requirementType`}
              name="requirements"
              value={priority}
            >
              {Object.keys(PRIORITY_TYPES).map(type => {
                return (
                  <option value={type} key={type}>
                    {i18n.PRIORITY_TYPES[type]}
                  </option>
                )
              })}
            </select>
          </div>
        )
      })}
    </div>
  )
}
