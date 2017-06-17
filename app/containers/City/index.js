import React,{Component} from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import CurrentCity from '../../components/CurrentCity';
import ChooseCity from '../../components/ChooseCity';
import {connect} from 'react-redux';
import * as Actions from '../../actions/userInfo';
import {bindActionCreators} from "redux";
class City extends Component{
    //当点击城市的时候，更新到最新选择的城市；
    //不能直接把city放到update中，city是字符串；也不能直接把cityName:city放进去，因为userInfo中有两个属性username和cityName，这样城市更新了，但是用户名就丢掉了；所以就要把以前的数据拿出来，把选择的城市修改掉，再放进update中更新城市；
    changeCity =(city)=>{
        let oldUserInfo = this.props.userInfo;
        oldUserInfo.cityName = city;
        this.props.userActions.update(oldUserInfo);
        // console.log(oldUserInfo);
        this.props.history.push("/");
    };
    render(){
        return (
            <div>
                {/*头*/}
                <HeaderComponent title="选择城市" history={this.props.history}/>
                {/*当前城市*/}
                <CurrentCity cityName={this.props.userInfo.cityName}/>
                {/*选择城市*/}
                <ChooseCity changeCity={this.changeCity}/>
            </div>
        )
    }
}
export default connect(
    state=>{
        return {userInfo:state.userInfo}
    },
    dispatch=>{
        return {userActions:bindActionCreators(Actions,dispatch)}
    }
)(City);