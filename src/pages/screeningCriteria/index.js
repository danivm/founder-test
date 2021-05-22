import {useState, useEffect} from 'react'
import domain from '../../domain/index'

export function ScreeningCriteriaPage() {
  const [requirements, setRequirements] = useState([])

  useEffect(() => {
    domain
      .getRequirementsUseCase({invertorId: 'foo'})
      .then(({requirements}) => setRequirements(requirements))
  }, [])

  console.log({requirements})

  return <div>ScreeningCriteriaPage</div>
}
