import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// css
import style from './Header.module.scss'
// components
import { Button } from 'antd'
import BaseSearch from '../base/BaseSearch'
import BaseTheme from '../base/BaseTheme'

export class Header extends Component {
  static propTypes = {
    // prop: PropTypes
  }
  constructor(props) {
    super(props)
    this.state = {
       rightMenu: [
         {name:'首页', id: 1},
         {name:'组件', id: 2},
         {name:'问题', id: 3},
         {name:'配置', id: 4},
       ]
    }
  }
  
  render() {
    const {theme} = this.props
    const {rightMenu} = this.state
    const userName = this.props.userName || '未登录'
    return (
    <header className={`${style.header} bot-border`}>
      <div className={style.logo}>
          <img className={style.logoIcon} src="./favicon.ico" alt=""/>    React Project
      </div>
      <BaseSearch defaultText='在 react project 中搜索'></BaseSearch>
      <div className={style.rightMenu}>
        {
          rightMenu.map((item) => {
            return (
            <div key={item.id} className={`link ${style.menuItem}`}>
              {item.name}
            </div>
            )
          })
        }
        <div className={style.menuItem}> <BaseTheme theme={theme} name='主题'></BaseTheme></div>
        <Button ghost className={`${style[theme+'Login']} ${style.menuItem} all-border`}>{userName}</Button>
      </div>
    </header>
    )
  }
}

const mapStateToProps = (state) => ({
  theme: state.config.theme
})

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
