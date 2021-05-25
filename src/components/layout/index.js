import {useContext} from 'react'
import PropTypes from 'prop-types'
import {Link, useLocation} from 'react-router-dom'
import {Context} from '../../context'
import {Logo} from './Logo'
import PATHS from './paths'

const baseClass = 'fn-Layout'

export function Layout({children}) {
  const {i18n} = useContext(Context)
  const {pathname} = useLocation()

  const getItemClass = path => {
    const className = `${baseClass}-listItem`
    const isSelectedClass = 'is-selected'

    return path === pathname ? `${className} ${isSelectedClass}` : className
  }

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
          <Link to={PATHS.INVESTMENT}>
            <li className={getItemClass(PATHS.INVESTMENT)}>
              {i18n.NAVBAR.INVESTMENT}
            </li>
          </Link>
          <Link to={PATHS.SCREENING_CRITERIA}>
            <li className={getItemClass(PATHS.SCREENING_CRITERIA)}>
              {i18n.NAVBAR.SCREENING_CRITERIA}
            </li>
          </Link>
          <Link to={PATHS.SUMMARY}>
            <li className={getItemClass(PATHS.SUMMARY)}>
              {i18n.NAVBAR.SUMMARY}
            </li>
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
