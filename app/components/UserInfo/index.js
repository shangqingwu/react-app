import React,{Component} from 'react';
import './index.less';
export default class UserInfo extends Component{
    //检查是否登录过，如果没有登录过，就跳转到登录页；
    render(){
        return (
            <div className="user-info">
                <span>用户名：{this.props.userInfo.username}</span>
                <span>城　市：{this.props.userInfo.cityName}</span>
            </div>
        )
    }
}