import React, {Component} from 'react';
import RouterMap from '../routers/index';
import {connect} from "react-redux";// 建立连接，要通过connect，是react-redux的；
import {bindActionCreators} from 'redux';//绑定ActionCreator组成的对象；-> 将dispatch和action结合
import * as Actions from "../actions/userInfo"; //在userInfo中是一个个导出的，想要拿到全部的，并且组成一个对象，就要写 * as 变量名 ；
import {getStorage} from  "../local";

export class App extends Component {  //必须把名字改成App，如果是Home，则就变成自己渲染自己了；
    constructor() {
        super();//必须调用super，不调就没有this；
        this.state = {done: false}; // done: false 页面是否加载完，默认false没有加载完；
    }

    componentDidMount() {  //组件挂载完；
        // 1. 当访问这个路由的 时候，当页面一加载，就先去本地查找，是否存储过localStorage名字叫cityName的；
        // 2. 第一次当一打开一个应用，肯定没有cityName，赋予一个默认值(杭州)，并且存放到redux中；如果有值，就直接把那个值存放到redux中；
        // 3. 查找之后，要存放数据，就要先建立连接，要通过connect，是react-redux的，通过绑定bindActionCreators，派发动作action；
        let cityName = getStorage("cityName");
        if (cityName == null){
            cityName = "杭州";
        }
        //页面加载后，设置一个城市，存放到redux中；
        this.props.userAction.update({
            cityName
        });
        this.setState({
            done: true //当页面加载完，并且把城市存到redux中，并且通过Provider将store注入到页面中之后，将状态修改为页面已经加载完true；
        });
        // console.log(this.props.userAction);
    }

    render() {
        return (
            <div>
                {/*页面加载完，如果当路径为/ ，RouterMap就会变成为Home组件*/}
                {this.state.done ? <RouterMap/> : <div>正在加载</div> }
            </div>
        )
    }
}
export default connect(
    state=> {  // mapStateToProps
        return {}
    },
    dispatch=> { // mapDispatchToProps
        return {
            userAction: bindActionCreators(Actions, dispatch)
        }
    }
)(App); //把转成是属性又传到App内部；

