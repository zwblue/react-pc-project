import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Menu, Dropdown, Icon } from 'antd';
import { updateConfig } from '../../actions/config';

export class BaseTheme extends Component {
  static propTypes = {
    name: PropTypes.string,
    theme: PropTypes.string,
    updateTheme: PropTypes.func,
  }
  updateTheme(key){
    this.props.updateTheme(key)
    localStorage.setItem('theme', key)
  }
  render() {
    const {name, theme} = this.props
    const menu = (
      <Menu onClick={({key})=>this.updateTheme(key)} selectedKeys={[theme]}>
        <Menu.Item key="light">
          白天模式
        </Menu.Item>
        <Menu.Item key="dark">
          夜晚模式
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="green" disabled>
          舒眼模式
        </Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={menu} placement='bottomCenter'>
        <span className="ant-dropdown-link">
          {name} <Icon type="down" />
        </span>
      </Dropdown>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps =  (dispatch) => {
  return {
    updateTheme: (theme) => dispatch(updateConfig({theme}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseTheme)
