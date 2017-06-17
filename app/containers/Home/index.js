import React,{Component} from 'react';
import HomeHeader from '../../components/HomeHeader/index';
import Slider from '../../components/Slider/index';
import Ad from './subpage/Ad';
import List from './subpage/List';
import {connect} from "react-redux";
class Home extends Component{
    render(){
        return (
            <div>
                <HomeHeader cityName={this.props.userInfo.cityName} history={this.props.history}/>
                <Slider/>
                <Ad/>
                <List cityName={this.props.userInfo.cityName}/>
            </div>
        )
    }
}
// 取出redux中的城市传递给HomeHeader组件；还得和redux连接，连接之后，可以拿到状态；
// 只要想从redux拿数据，就要先连接connect，要拿的话，就用第一个参数state，想改的话，用第二个参数dispatch；
export default connect(
    state=>{
        return {userInfo:state.userInfo}; //取出redux state中的userInfo数据，赋值给变量userInfo；
    }
)(Home)