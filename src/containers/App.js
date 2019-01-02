import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateConfig } from '../actions/config';

// components
import Header from '../components/layout/Header'
import Content from './Content'



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
  updateConfig: (config)=>dispatch(updateConfig(config))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
