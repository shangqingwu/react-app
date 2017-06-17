import React,{Component} from 'react';
import './index.less';
export default class LoginComponent extends Component{
    constructor(){
        super();
        this.state = {
            val:"" // 就是用户名username；
        }
    }
    login = () =>{
        //调用登录方法，点击登录，跳转页面；
        this.props.login(this.state.val);
    };
    changeValue(e){
        this.setState({
            val:e.target.value
        })
    }
    render(){
        return (
            <div className="login-component">
                {/*可以通过ref（非受控组件）或事件源来获取input中的值；还可以通过受控组件获取：onChange+state*/}
                {/* onChange={(e)=>this.changeValue(e)}也可以写成这样，只有第一个函数中才会自己带事件对象e，如果用箭头函数，需要将e传给里面的函数，这样那个函数才能用；*/}
                <input type="text" value={this.state.val} onChange={this.changeValue.bind(this)} placeholder="请输入用户名"/>
                <button onClick={this.login}>登录</button>{/*一点登录，就拿到input里面的值*/}
            </div>
        )
    }
}