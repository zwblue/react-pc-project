import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Component
import { Input } from 'antd';

import style from './BaseSearch.module.scss'

export class BaseSearch extends Component {
  static propTypes = {
    defaultText: PropTypes.string
  }

  render() {
    const Search = Input.Search;
    const { defaultText } = this.props
    return (
      <div className={style.searchBox}>
        <Search
        placeholder={ defaultText }
        onSearch={value => console.log(value)}
        style={{ width: 300 }}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseSearch)
