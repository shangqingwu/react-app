import React, {Component} from 'react';
import HeaderComponent from '../../components/HeaderComponent/index';
import Buy from '../../components/Buy';
import Info from "./subpage/Info";
import Comment from "./subpage/Comment";
import {connect} from "react-redux"; // 组件连接redux，属于react-redux；
import * as Actions from "../../actions/store"; //先获取store的所有的actions，也就是add和remove；-> 在store中是一个个导出的，想要拿到全部的，并且组成一个对象，就要写 * as 变量名 ；
import {bindActionCreators} from "redux"; // 绑定ActionCreators，属于redux；
//只有通过路由渲染的组件都会在this.props上增加很多属性，例如：history（里面有push方法，可以跳转页面；go方法，可以返回上一页面；）、match（可以匹配路径参数，可以通过params获取路径上的信息）、location...
//只有Detail中有history方法，HeaderComponent中没有，就要传过去；
class Detail extends Component {
    constructor(){
        super();
        this.state={
            isStore:false //是否收藏；
        }
    }
    componentDidMount(){
        //先看看有没有收藏过；-> 先从redux中获取所有的收藏列表是一个数组[]，如果收藏了就显示已收藏，没有就是未收藏；
        // console.log(this.props.store);
        //需要新建状态来维护；this.state;
        // 1. 首先拿到商户的id；
        let id = this.props.match.params.id;
        // 2. 去收藏的数组中查询；通过数组的some方法，判断是否有id，也就是收藏过，有就返回true，没有就返回false；
        let flag = this.props.store.some(item=>item===id); //this.props.store是从reducer中取出来的，从下面获取到的；
        if (flag){
            this.setState({
                isStore:flag
            })
        }
        //把状态传给儿子显示出来；

    };
    checkLogin = () =>{ //检查是否登录过，登录过就返回true，未登录false；
        if (this.props.userInfo.username){
            return true;
        }
        return false;
    };
    buy = ()=> { //购买
        let flag = this.checkLogin();
        if (flag){ //如果登录成功点击购买时，跳到user页面（user页面是用来显示用户名和城市，并且可以评价的）；
            this.props.history.push("/user");
        }else {
            //如果没有登录点击，跳到登录页；登录成功载跳回详情页；
            // 没登录的时候，点击购买会出现/#/login/%252Fdetail%252F09961221387669106路径，进行登录；点击登录之后，直接跳到/#/detail/09961221387669106路径，返回详情页；
            //当进入登录页，就把路径传到的login里了，在那里面解码了；才会登录完再跳回来；
            this.props.history.push("/login/"+encodeURIComponent("/detail/"+this.props.match.params.id));
        }
    };
    store=()=>{ //收藏
        //验证是否登录，没登录就去登录，登录了，就跳回详情页；
        let flag = this.checkLogin();
        if (!flag){ //没登录，就跳到登录页；
            //已经把redux中的state放到this.state中了，所以直接判断this.state里面的isStore就可以了；
            this.props.history.push("/login/"+encodeURIComponent("/detail/"+this.props.match.params.id));
        }
        let id = this.props.match.params.id;
        if (this.state.isStore){ //已经收藏了，点击的时候，就把id在store中的state数组中移除掉；
            this.props.storeActions.remove(id);
        }else { //未收藏，点击的时候，把id放到数组中；
            this.props.storeActions.add(id);
        }
        this.setState({
            isStore:!this.state.isStore  //更新状态，点击之后，状态（已收藏/未收藏）与之前相反；
        })
    };
    render() {
        return (
            <div>
                {/*头部：傻组件*/}
                <HeaderComponent title="商户详情" history={this.props.history}/>
                {/*商户信息*/}
                <Info id={this.props.match.params.id}/>
                {/*购买和收藏*/}
                <Buy buy={this.buy} store={this.store} isStore={this.state.isStore}/>
                {/*评论*/}
                <Comment id={this.props.match.params.id}/>
            </div>
        )
    }
}
export default connect(//导出连接后的组件；
    state=>{
        return {
            userInfo:state.userInfo,
            store:state.store  //这里存放的是收藏的商品数组；
        }
    },
    dispatch=>{
        return {
            storeActions:bindActionCreators(Actions,dispatch)//把所有的actions包装成一个对象，挂载到属性props上，当调用this.props.add的时候，他会自动的把add放到dispatch中执行，自动的派发add动作；

            /*  bindActionCreators(Actions,dispatch)这句话的意思就相当于是下面的代码；可以直接通过this.props.add/remove调用，效果是一样的；
            {
               add:(data)=>{
                    dispatch({type:'ADD_STORE',data})
                },
                remove:(data)=>{
                    dispatch({type:'REMOVE_STORE',data})
                }
            }*/
        }
    }
)(Detail);