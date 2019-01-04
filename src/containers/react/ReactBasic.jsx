import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// css
import './ReactBasic.module.scss'
export class ReactBasic extends Component {
  static propTypes = {
    // prop: PropTypes
  }

  render() {
    return (
      <div>
        ReactBasic 页面
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactBasic)
