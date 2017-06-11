import React,{Component} from 'react';
import HomeHeader from '../../components/HomeHeader';
import Slider from '../../components/Slider';
import Ad from './subpage/Ad';
import List from './subpage/List';
import {connect} from 'react-redux';
class Home extends Component{
    render(){
        return (
            <div>
                <HomeHeader cityName={this.props.userInfo.cityName}/>
                <Slider/>
                <Ad/>
                <List cityName={this.props.userInfo.cityName}/>
            </div>
        )
    }
}
export default connect(
    state=>{
        return {userInfo:state.userInfo}
    }
)(Home);