import React from 'react'
import ReactDOM from 'react-dom'
import {Layout} from './components/layout'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Home} from './pages/home/index'
import {InvestmentPage} from './pages/investment/index'
import {ScreeningCriteriaPage} from './pages/screeningCriteria/index'
import {SummaryPage} from './pages/summary/index'
import './styles/index.scss'

ReactDOM.render(
  <Router>
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/investment/" component={InvestmentPage} />
        <Route path="/screening_criteria/" component={ScreeningCriteriaPage} />
        <Route path="/summary/" component={SummaryPage} />
      </Switch>
    </Layout>
  </Router>,
  document.getElementById('root')
)
