import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { message, Form, Icon, Input, Button, Checkbox, } from 'antd' 
import style from './Login.module.scss'
export class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount() {
    const { form } = this.props
    if(localStorage.getItem('userInfo')) {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'))
      form.setFieldsValue({
        password: userInfo.password,
        remember: true,
        userName: userInfo.user
      })
    }
   
  }
  static propTypes = {
    // prop: PropTypes
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        if (values.remember === true) {
          const userInfo = {
            user: 'admin',
            password: 'dadada'
          }
          localStorage.setItem('userInfo',JSON.stringify(userInfo))
        } else {
          localStorage.removeItem('userInfo')
        }
        if(values.userName==='zuowang' && values.password==='dadada'){
          sessionStorage.setItem('isLogin', true)
          this.props.history.push('/')
        } else {
          message.error('你输入的用户名或密码有误！');
        }
      } else {
        console.log(values)
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className={style.login}>
      <div className={style.loginBox}>
        <Form.Item>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input size='large' prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input size='large' prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </Form.Item>
        <Form.Item>
          <Button  size='large' type="primary" block htmlType="submit" className="login-form-button">
            登 录
          </Button>
        </Form.Item>            
        <Form.Item>
          <div className={style.desc}>
          <div>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: false,
            })(
              <Checkbox  style={{color: '#fff'}}>记住密码</Checkbox>
            )}
          </div>
           <div>
             <a className="login-form-forgot" href="https://www.baidu.com/">忘记密码</a>
             <span className='x-margin'> 或者 </span> <a href="https://www.baidu.com/">立即注册</a>
           </div>
          </div>
        </Form.Item>
      </div>
    </Form>
    );
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}
const Login = Form.create({ name: 'normal_login' })(LoginForm);

export default connect(mapStateToProps, mapDispatchToProps)(Login)
