import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {Logo} from './Logo'

const baseClass = 'fn-Layout'

export function Layout({children}) {
  return (
    <div className={baseClass}>
      <nav className={`${baseClass}-navbar`}>
        <ul className={`${baseClass}-list`}>
          <Link to="/">
            <li className={`${baseClass}-listItem ${baseClass}-navbarHeader`}>
              <Logo />
              <span className={`${baseClass}-navbarHeader-name`}>
                FN Ventures
              </span>
            </li>
          </Link>
          <Link to="/investment">
            <li className={`${baseClass}-listItem`}>Invesment Funnel</li>
          </Link>
          <Link to="/screening_criteria">
            <li className={`${baseClass}-listItem`}>Screening Criteria</li>
          </Link>
          <Link to="/summary">
            <li className={`${baseClass}-listItem`}>Summary</li>
          </Link>
        </ul>
      </nav>
      <div className={`${baseClass}-content`}>{children}</div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.element
}
