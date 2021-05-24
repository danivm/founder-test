import {useState, useEffect, useContext} from 'react'
import {Context} from '../../context.js'

const baseClass = 'fn-RequirementsList'

export function RequirementsList() {
  const [requirements, setRequirements] = useState([])
  const {config, domain, i18n} = useContext(Context)
  const {PRIORITY_TYPES} = config

  useEffect(() => {
    domain
      .getRequirementsUseCase({invertorId: 'xxxx'})
      .then(({requirements}) => setRequirements(requirements))
  }, [domain])

  const handleChange = id => e => {
    const priority = e.target.value
    const index = requirements.findIndex(req => req.id === id)
    const newRequirements = [...requirements]
    newRequirements[index] = {...newRequirements[index], priority}
    setRequirements(newRequirements)
  }

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
              onChange={handleChange(id)}
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
