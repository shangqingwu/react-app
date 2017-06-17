import React,{Component} from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import {connect} from "react-redux";//要获取state中的内容，就要先连接；
import * as Actions from "../../actions/userInfo";//拿到所有的actionCreator的对象；
import {bindActionCreators} from "redux";//绑成一个ActionCreators；
import LoginComponent from '../../components/LoginComponent';
class Login extends Component{
    constructor(){
        super();
        this.state = {
            //默认没有登录过，写一个方法校验是否登录过；
            login:false
        }
    }
    componentDidMount(){
        this.checkLogin();
    }
    //检查是否登录，在redux的state.userInfo中是否有username，有的话说明登录过，直接跳到user页面；
    checkLogin(){
        if (this.props.userInfo.username){ //登录过；
            //跳转页面；
            return this.props.history.push("/user");
        }
        //没有登录过，就显示登录的组件；
        this.setState({
            login:true
        })
    }
    // 在这里要写一个方法，用来登录的，将用户名userName存入redux中；
    //需要在傻组件LoginComponent中调用登录方法，点击登录的时候，再跳转页面；
    login(username){
        //更改redux的值，先把当前state的值取出来，在增加之后，在添加到redux中；
        let info = this.props.userInfo;
        info.username = username;
        //更新redux中的state，把info传进去；
        this.props.userActions.update(info);
        //登录成功，跳转用户页面，但是不能直接跳；
        //如果是从购买业进入，则再重新跳会购买页面；
        if (this.props.match.params.route){
            // console.log(this.props.match.params.route);
            //提交到login的路径，肯定是通过encode转化后的路径，跳转的时候需要解码跳转；
            //decodeURIComponent解压路径；-> /buy 会转化为 %2fbuy ，当访问的时候访问%2fbuy，因为前面是/#/login，所以访问的是/#/%2fbuy，当登录成功时会跳转到/buy页面；
            this.props.history.push(decodeURIComponent(this.props.match.params.route));
        }else { //如果没有指定跳回哪个页面，也就是/login后面没有路径，就默认回到用户页面；
            this.props.history.push("/user");
        }
    }

    render(){
        return (
            <div>
                <HeaderComponent title="登录" history={this.props.history}/>
                {/*如果登录过，显示登录组件，否则不显示，直接跳转用户页面*/}
                {this.state.login?<LoginComponent login={this.login.bind(this)}/>:<div></div>}
            </div>
        )
    }
}
export default connect(
    state => {
        return {userInfo:state.userInfo}
    },
    dispatch => {
        return {userActions:bindActionCreators(Actions,dispatch)}
    }
)(Login);