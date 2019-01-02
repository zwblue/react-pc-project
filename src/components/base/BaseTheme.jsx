import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Menu, Dropdown, Icon } from 'antd';

export class BaseTheme extends Component {
  static propTypes = {
    name: PropTypes.string
  }

  render() {
    const {name} = this.props
    const menu = (
      <Menu>
        <Menu.Item key="0">
          白天模式
        </Menu.Item>
        <Menu.Item key="1">
          夜晚模式
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3" disabled>
          舒眼模式
        </Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={menu} placement='bottomCenter'>
        <a className="ant-dropdown-link">
          {name} <Icon type="down" />
        </a>
      </Dropdown>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseTheme)
