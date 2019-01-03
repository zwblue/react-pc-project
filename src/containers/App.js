import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateConfig } from '../actions/config';

// components
import Header from '../components/layout/Header'
import Content from './Content'

// style
import style from './App.module.scss'

export class App extends Component {
  static propTypes = {
    theme: PropTypes.string,
  }
  componentDidMount() {
  }
  render() {
    const {theme} = this.props
    return (
      <div className={`${style.appBox} ${theme}Theme`}>
        <Header></Header>
        <Content></Content>
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
