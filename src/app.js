import React, {useContext} from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

// Pages
import {LoginPage} from './pages/login/index'
import {InvestmentPage} from './pages/investment/index'
import {ScreeningCriteriaPage} from './pages/screeningCriteria/index'
import {SummaryPage} from './pages/summary/index'

// Context
import Provider, {Context} from './context'
import domain from './domain'
import config from './domain/config'
import literals from './literals'

// Components
import {Layout} from './components/layout'

// Styles
import './styles/index.scss'

const Routes = () => {
  const {user} = useContext(Context)

  return (
    <Router>
      {user ? (
        <Layout>
          <Switch>
            <Route path="/investment/" component={InvestmentPage} />
            <Route
              path="/screening_criteria/"
              component={ScreeningCriteriaPage}
            />
            <Route path="/summary/" component={SummaryPage} />
            <Redirect to="/screening_criteria" />
          </Switch>
        </Layout>
      ) : (
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Redirect to="/login" />
        </Switch>
      )}
    </Router>
  )
}

const App = () => {
  return (
    <Provider domain={domain} i18n={literals} config={config}>
      <Routes />
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
