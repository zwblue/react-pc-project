import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class LifeCycle extends Component {
  static propTypes = {
    // prop: PropTypes
  }

  render() {
    return (
      <div>
          LifeCycle 页面
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(LifeCycle)
