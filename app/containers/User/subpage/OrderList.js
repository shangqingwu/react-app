import React,{Component} from 'react';
import {getOrderList,postComment} from '../../../fetch/orderList';
import OrderListComponent from '../../../components/OrderListComponent';
export default class OrderList extends Component{
    constructor(){
        super();
        this.state = { //定义一个状态接收数据；
            data:[]
        }
    }
    componentDidMount(){
        //获取订单列表的信息数据；
        getOrderList(this.props.username).then(res=>res.json()).then(data=>{
            // console.log(data);
            this.setState({
                data
            })
        })
    }
    //提交评价，将内容提交到后台；-> 点击孙子组件OrderListItem的确认提交按钮，将将内容提交到后台，涉及到操作数据，就要在只智能组件中操作，就要在它的爷爷组件也就是这个组件中写逻辑，再传给儿子组件OrderListComponent，儿子再传给孙子组件OrderListItem；-> 在孙子组件中调用commitComment这个方法；
    commitComment (id,comment,callback){  //参数：商户id、评价内容comment 、callback：更改评价状态为已评价；
        // console.log(id, comment);
        // callback();
        postComment({id,comment}).then(res=>res.json()).then(data=>{
            callback();
        });
    }
    render(){
        return (
            <div>
                {this.state.data.length?<OrderListComponent data={this.state.data} commitComment={this.commitComment.bind(this)}/>:<div>正在加载</div>}
            </div>
        )
    }
}