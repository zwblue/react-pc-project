import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// style
import style from './Content.module.scss'

// Component
import { Card } from 'antd';

export class Content extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <Card  className={style.cardContent}>
      </Card>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
