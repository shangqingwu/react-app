import React, {Component} from 'react';
import './index.less';
export default class LoadMore extends Component {
    loadMore = ()=> {
        if (!this.props.isLoading) {  //当点击的时候，如果是未加载的状态，则执行loadMore这个函数，加载更多数据；点击之后 -> 在List.js中的LoadMore方法中，先将isLoading改为true，再获取数据，此时不能点击了，点击了也不起作用，获取完数据之后，再将isLoading改为false，就又可以加载了；-> 从而实现每次点击多次的话，只有一次起作用，也就是只发送一次请求；
            this.props.loadMore();
        }
    };

    componentDidMount() {
        //将fn函数放到当前组件LoadMore上，这样就可以通过this来调用fn了；
        this.fn = () => {
            clearTimeout(this.timer);
            this.timer = setTimeout(()=> {
                //先判断是否正在加载，如果正在加载的话，就不要再获取了；
                if (this.props.isLoading){
                    return;
                }
                //判断加载更多按钮距离屏幕顶端的高度 与 可视窗口的高度 ， 如果小于，则说明加载更多进入可视窗口就要继续加载数据；-> 也就是在调用LoadMore方法；
                let top = this.refs.more.getBoundingClientRect().top; //获取当前元素的距离屏幕顶部的距离；通过非受控组件this.refs.more属性来获取当前的真实元素；
                let screen = window.screen.height;
                if (top < screen){ //加载更多按钮进入屏幕中；
                    this.props.loadMore();
                }
            }, 50);
        };
        window.addEventListener("scroll", this.fn)
    }

    componentWillUnmount() {
        // 必须要写这个移除事件，因为如果不写的话，当切换到别的组件之后，这个组件就没有了，但是事件还是绑定着的，当滑动滚轮的时候，还是会触发这个事件，但是已经没有this.refs.more这个真实的dom了，就会报错；
        window.removeEventListener("scroll", this.fn)
    }

    render() {
        return (
            <div className="has-More">
                {this.props.hasMore ? <div onClick={this.loadMore} ref="more">加载更多</div> : <div>已经到底了</div>}
            </div>
        )
    }
}

let str = "_a_b";
let reg = /[_]/g;
