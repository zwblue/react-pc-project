import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// components
import Header from '../components/layout/Header'
import Home from './Home'
import Components from './ReactComponent'
import Qus from './ReactQuestion'
import Config from './WebpackConfig'
// router
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// style
import style from './App.module.scss'

export class App extends Component {
  static propTypes = {
    theme: PropTypes.string,
  }
  render() {
    const {theme} = this.props
    return (
      <div className={`${style.appBox} ${theme}Theme`}>
        <Router>
          <div>
            {/* withRouter 包装的组件 必须在Router里面 */}
            <Header></Header> 
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/components" component={Components} />
              <Route path="/qus" component={Qus} />
              <Route path="/config" component={Config} />
              <Redirect from='/' to='/home'></Redirect>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  theme: state.config.theme
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
