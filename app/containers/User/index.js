import React,{Component} from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import UserInfo from '../../components/UserInfo';
import {connect} from 'react-redux';
import OrderList from './subpage/OrderList';
class User extends Component{
    render(){
        return (
            <div>
                {/*点击返回后，会回到登录页，检查是否登录之后，会再次跳转回来；返回的时候不能跳转到login页面，就要指定返回的页面 首页/ ；需要在操作HeaderComponent；*/}
                <HeaderComponent title="用户信息" history={this.props.history} back="/"/>
                <UserInfo userInfo={this.props.userInfo}/>
                {/*此处是订单列表页*/}
                <OrderList username={this.props.userInfo.username}/>
            </div>
        )
    }
}
export default connect(
    state=>{ //取数据；
        return {userInfo:state.userInfo}
    }
)(User);