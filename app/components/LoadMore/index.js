import React,{Component} from 'react';
import './index.less';
export default class LoadMore extends Component{
    loadMore=()=>{
        if (!this.props.isLoading){  //当点击的时候，如果是未加载的状态，则执行loadMore这个函数，加载更多数据；点击之后 -> 在List.js中的LoadMore方法中，先将isLoading改为true，再获取数据，此时不能点击了，点击了也不起作用，获取完数据之后，再将isLoading改为false，就又可以加载了；-> 从而实现每次点击多次的话，只有一次起作用，也就是只发送一次请求；
            this.props.loadMore();
        }
    };
    render(){
        return (
            <div className="has-More">
                {this.props.hasMore?<div onClick={this.loadMore}>加载更多</div>:<div>已经到底了</div>}
            </div>
        )
    }
}