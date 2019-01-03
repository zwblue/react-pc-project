import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


// style
import style from './Content.module.scss'

// Component
import LeftMenu from '../components/layout/LeftMenu'

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
        <div className={style.rightContent}>
       
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
