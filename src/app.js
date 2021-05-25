import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

// Pages
import {InvestmentPage} from './pages/investment/index'
import {ScreeningCriteriaPage} from './pages/screeningCriteria/index'
import {SummaryPage} from './pages/summary/index'

// Context
import Provider from './context'
import domain from './domain'
import config from './domain/config'
import literals from './literals'

// Components
import {Layout} from './components/layout'

// Styles
import './styles/index.scss'

const App = () => {
  return (
    <>
      <Provider domain={domain} i18n={literals} config={config}>
        <Router>
          <Layout>
            <Switch>
              <Route path="/investment/" component={InvestmentPage} />
              <Route
                path="/screening_criteria/"
                component={ScreeningCriteriaPage}
              />
              <Route path="/summary/" component={SummaryPage} />
              <Redirect to="/investment" />
            </Switch>
          </Layout>
        </Router>
      </Provider>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
