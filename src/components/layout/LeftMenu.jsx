import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// component
import { Menu, Icon } from 'antd';
// router
import { withRouter } from 'react-router-dom'
// uitls
import { getRouterParams } from '../../utils/common'
const SubMenu = Menu.SubMenu;
const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_824133_5nkbucjjgq4.js', // 在 iconfont.cn 上生成
});
export class LeftMenu extends Component {
  static propTypes = {
    theme: PropTypes.string
  }
  state = {
    menuList: [
      {
        subId: 'react',
        subName: 'react',
        subIcon: 'icon-react',
        menus: [
          {
            id: 'react_basic',
            name: 'react基本语法',
          },
          {
            id: 'react_lifeCycle',
            name: 'react生命周期',
          }
        ]
      },
      {
        subId: 'redux',
        subName: 'redux',
        subIcon: 'icon-redux',
        menus: [
          {
            id: 'redux_basic',
            name: 'redux基础用法',
          },
          {
            id: 'redux_ansyAction',
            name: 'redux异步方法',
          },
        ]
      },
      {
        subId: 'router',
        subName: 'router',
        subIcon: 'icon-routers',
        menus: [
          {
            id: 'router_basic',
            name: 'router基本用法',
          },
          {
            id: 'router_guard',
            name: 'router路由拦截',
          },
        ]
      },
      {
        subId: 'webpack',
        subName: 'webpack',
        subIcon: 'icon-webpack',
        menus: [
          {
            id: 'webpack_config',
            name: 'webpack环境配置',
          },
          {
            id: 'webpack_package',
            name: 'package包的介绍',
          },
        ]
      },
    ],
    menu: '',
  }
  componentWillUpdate(props,state) {
    if(state.menu !== this.state.menu) {
      this.props.history.push({search:`menu=${state.menu}`})
    }
  }
  componentDidMount(){
    const activemenu = getRouterParams(this.props.location.search, 'menu')
    this.setRouterParams(activemenu, 'menu')
  }
  // 如果没有menu  默认选中的sub菜单为第一个数组，
  // 如果有参数，将其中的选中的item为当前路由指定的菜单
  setRouterParams(routerParams, type) {
    const {menuList} = this.state
    const defaultmenuId = menuList[0].menus[0].id
    if(!routerParams){
      this.setState({
        [type]: defaultmenuId,
      },() => {
        this.props.history.push({search:`menu=${this.state.menu}`})
      })
    } else {
      this.setState({
        [type]: routerParams
      });
    }
  }
  handleClick = (e) => {
    this.setState({
      menu: e.key,
    });
  }
  render() {
    const {menuList, menu} = this.state
    const openKey = menu.split('_')[0]
    return (
      openKey &&  <Menu
      theme={this.props.theme}
      onClick={this.handleClick}
      style={{ width: 256 ,overflowY: 'auto', padding: '5px 0', border: 'none'}}
      defaultOpenKeys={[openKey]}
      selectedKeys={[menu]}
      mode="inline"
      >
      {
        menuList.map((subItem) => {
          return(
          <SubMenu key={subItem.subId} title={<span><MyIcon type={subItem.subIcon} /><span>{subItem.subName}</span></span>}>
            {
              subItem.menus.map((item) => {
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
