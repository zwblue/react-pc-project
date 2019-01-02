import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { updateConfig } from '../actions/config';

import css from './App.module.scss'

export class App extends Component {
  static propTypes = {
    theme: PropTypes.string,
  }
  componentDidMount() {
    this.props.updateConfig({theme: 'white'})
  }
  render() {
    return (
      <div>
        <Button type='primary' dashed block ghost size='small' icon='loading'>首页加载中</Button>
        <div className={css.lfBox}></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  theme: state.config.theme
})

const mapDispatchToProps = (dispatch) => ({
  updateConfig: (config)=>dispatch(updateConfig(config))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
