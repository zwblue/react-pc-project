import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// router
import { Route } from 'react-router-dom';


// style
import style from './Home.module.scss'

// Component
import LeftMenu from '../components/layout/LeftMenu'

import ReactBasic from './react/ReactBasic'
import LifeCycle from './react/LifeCycle'

import ReduxBasic from './redux/ReduxBasic'
import SyncAction from './redux/SyncAction'

import RouterBasic from './router/RouterBasic'
import RouterGuard from './router/RouterGuard'

import WebpackConfig from './webpack/WebpackConfig'
import WebpackPackage from './webpack/WebpackPackage'

export class Content extends Component {
  static propTypes = {
    // prop: PropTypes
  }
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div className={`${style.contentBox} all-border`}>
        <LeftMenu></LeftMenu>
        <div className={style.rightContent +' lf-border'}>
          <Route path="/home/react/basic" component={ReactBasic} />
          <Route path="/home/react/lifecycle" exact component={LifeCycle} />

          <Route path="/home/redux/basic" component={ReduxBasic} />
          <Route path="/home/redux/syncAction" component={SyncAction} />
          
          <Route path="/home/router/basic" component={RouterBasic} />
          <Route path="/home/router/guard" component={RouterGuard} />

          <Route path="/home/webpack/config" component={WebpackConfig} />
          <Route path="/home/webpack/package" component={WebpackPackage} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
