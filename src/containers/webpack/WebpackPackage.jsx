import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class WebpackPackage extends Component {
  static propTypes = {
    // prop: PropTypes
  }

  render() {
    return (
      <div>
          WebpackPackage 页面
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(WebpackPackage)
