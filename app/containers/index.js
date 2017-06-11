import React,{Component} from 'react';
import RouterMap from '../routes/index';
import {getStorage} from '../local';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from "../actions/userInfo";
class App extends Component{
    constructor(){
        super();
        this.state={done:false};
    }
    componentDidMount(){
        let cityName = getStorage("cityName");
        if (cityName == null){
            cityName = "杭州";
        }
        this.props.userActions.update({cityName});
        this.setState({
            done:true
        })
    }
    render(){
        return (
            <div>
                {this.state.done?<RouterMap/>:<div>正在加载</div>}
            </div>
        )
    }
}
export default connect(
    state=>{
        return {userInfo:state.userInfo};  // 合并后的状态 state={userInfo:{cityName:"杭州"},store:[id1,id2]}，所以取userInfo的时候，就要通过state.userInfo来取；
    },
    dispatch=>{
        return {userActions:bindActionCreators(Actions,dispatch)};
    }
)(App);