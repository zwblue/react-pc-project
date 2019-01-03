import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// component
import { Menu, Icon } from 'antd';
// router
import { withRouter } from 'react-router-dom'

const SubMenu = Menu.SubMenu;
const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_824133_5nkbucjjgq4.js', // 在 iconfont.cn 上生成
});
export class LeftMenu extends Component {
  static propTypes = {
    theme: PropTypes.string
  }
  state = {
    current: '1',
    menuList: [
      {
        subId: 'sub1',
        subName: 'react',
        subIcon: 'icon-react',
        menuItems: [
          {
            id: 'sub1_item1',
            name: 'react基本语法',
          },
          {
            id: 'sub1_item2',
            name: 'react生命周期',
          }
        ]
      },
      {
        subId: 'sub2',
        subName: 'redux',
        subIcon: 'icon-redux',
        menuItems: [
          {
            id: 'sub2_item1',
            name: 'redux基础用法',
          },
          {
            id: 'sub2_item2',
            name: 'redux异步方法',
          },
        ]
      },
      {
        subId: 'sub3',
        subName: 'router',
        subIcon: 'icon-routers',
        menuItems: [
          {
            id: 'sub3_item1',
            name: 'router基本用法',
          },
          {
            id: 'sub3_item2',
            name: 'router路由拦截',
          },
        ]
      },
      {
        subId: 'sub4',
        subName: 'webpack',
        subIcon: 'icon-webpack',
        menuItems: [
          {
            id: 'sub4_item1',
            name: 'webpack环境配置',
          },
          {
            id: 'sub4_item2',
            name: 'package包的介绍',
          },
        ]
      },
    ]
  }
  componentDidMount(){
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    const menuList = this.state.menuList
    return (
      <Menu
      theme={this.props.theme}
      onClick={this.handleClick}
      style={{ width: 256 ,overflowY: 'auto', padding: '5px 0'}}
      defaultOpenKeys={['sub1']}
      selectedKeys={[this.state.current]}
      mode="inline"
      >
      {
        menuList.map((subItem) => {
          return(
          <SubMenu key={subItem.subId} title={<span><MyIcon type={subItem.subIcon} /><span>{subItem.subName}</span></span>}>
            {
              subItem.menuItems.map((item) => {
                return(
                  <Menu.Item key={item.id}>{item.name}</Menu.Item>
                )
              })
            }
          </SubMenu>
          )
        })
      }
    </Menu>
    )
  }
}

const mapStateToProps = (state) => ({
  theme: state.config.theme
})

const mapDispatchToProps = {
  
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LeftMenu))
