import React,{Component} from 'react';
import './index.less';
export default class Buy extends Component{
    /*无论点击收藏还是购买，都要先判断是否登录过*/
    /*buy=()=>{
        this.props.buy();
    };*/
    render(){
        return (
            <div className="buy">
                <button onClick={this.props.store}>{this.props.isStore?"已收藏":"收藏"}</button>
                <button onClick={this.props.buy}>购买</button>
            </div>
        )
    }
}