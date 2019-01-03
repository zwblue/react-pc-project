import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// component
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

export class LeftMenu extends Component {
  static propTypes = {
    theme: PropTypes.string
  }
  state = {
    theme: 'light',
    current: '1',
  }
  componentDidMount(){
    console.log(this.props)
  }
  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
 
  render() {
    return (
      <Menu
      theme={this.props.theme}
      onClick={this.handleClick}
      style={{ width: 256 ,overflowY: 'auto', padding: '5px 0'}}
      defaultOpenKeys={['sub1']}
      selectedKeys={[this.state.current]}
      mode="inline"
      >
      <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
        <Menu.Item key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigtion Two</span></span>}>
        <Menu.Item key="5">Option 5</Menu.Item>
        <Menu.Item key="6">Option 6</Menu.Item>
        <SubMenu key="sub3" title="Submenu">
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
      </SubMenu>
      <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <Menu.Item key="11">Option 11</Menu.Item>
        <Menu.Item key="12">Option 12</Menu.Item>
      </SubMenu>
    </Menu>
    )
  }
}

const mapStateToProps = (state) => ({
  theme: state.config.theme
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu)
