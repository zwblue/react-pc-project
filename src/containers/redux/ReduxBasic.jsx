
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class ReduxBasic extends Component {
  static propTypes = {
    // prop: PropTypes
  }

  render() {
    return (
      <div>
        ReduxBasic 页面
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxBasic)
