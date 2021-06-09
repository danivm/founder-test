import {useContext} from 'react'
import {Context} from '../../context.js'

const baseClass = 'fn-RequirementsList'

export function RequirementsList() {
  const {config, i18n, requirements, setRequirements} = useContext(Context)
  const {PRIORITY_TYPES} = config

  const handleChangePriority = id => e => {
    const priority = e.target.value
    const index = requirements.findIndex(req => req.id === id)
    const newRequirements = [...requirements]
    newRequirements[index] = {...newRequirements[index], priority}
    setRequirements(newRequirements)
  }

  const handleChangeParam = id => e => {
    const param = e.target.value
    const index = requirements.findIndex(req => req.id === id)
    const newRequirements = [...requirements]
    newRequirements[index] = {...newRequirements[index], selectedParam: param}
    setRequirements(newRequirements)
  }

  if (!requirements.length > 0) return null

  return (
    <div className={`${baseClass}`}>
      {requirements.map(requirement => {
        const {id, criteria, params, priority, selectedParam} = requirement
        const hasParams = params && params.length > 0
        const requirementSelectClass = selectedParam
          ? `${baseClass}-requirementType`
          : `${baseClass}-requirementType is-empty`

        return (
          <div className={`${baseClass}-requirement`} key={id}>
            <div>
              <span className={`${baseClass}-requirementName`}>{criteria}</span>
              {hasParams && (
                <select
                  className={requirementSelectClass}
                  name="params"
                  value={selectedParam}
                  onChange={handleChangeParam(id)}
                  disabled={!(params && params.length > 0)}
                >
                  {!selectedParam && (
                    <option value="" key="disabled" disabled selected />
                  )}
                  {params.map((param, i) => {
                    return (
                      <option value={param} key={i}>
                        {param}
                      </option>
                    )
                  })}
                </select>
              )}
            </div>
            <select
              className={`${baseClass}-requirementType`}
              name="requirements"
              value={priority}
              onChange={handleChangePriority(id)}
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
