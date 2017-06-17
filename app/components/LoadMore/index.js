import React,{Component} from 'react';
import './index.less';
export default class LoadMore extends Component{
    loadMore(){ //调用父组件List传递过来的加载更多的函数；
        if (!this.props.isLoading){
            this.props.loadMore();
        }
    }
    //当加载更多的字 刚一出现在屏幕中时，就要继续加载；调用LoadMore方法；
    componentDidMount(){
        // 要绑定window.onScroll事件；两个用同一个函数，绑定在实例上；
        this.fn = ()=>{
            clearTimeout(this.timer);
            this.timer = setTimeout(()=>{ //保证每次鼠标滑动一下，都只触发滚动一次；
                //如果是正在加载则没有意义；
                if (this.props.isLoading){  // 当出现加载更多了，正在加载的时候，但是网很慢，反复滑动的时候，就没有意义了，因为已经发出去一次请求了，反复滑动的时候就不再发请求加载了；
                    return;
                }
                let screen = window.screen.height;//获取屏幕的高度；
                // this.refs.more就是原生DOM
                let top = this.refs.more.getBoundingClientRect().top;//getBoundingClientRect()：获得当前元素距离屏幕上下左右的距离；
                if (top < screen) { // 如果按钮进入可视窗口则就要加载更多；
                    this.props.loadMore();
                }
            },50)
        };
        window.addEventListener("scroll",this.fn);
    }
    componentWillUnmount(){
        //移除滚动事件 ；
        // 当页面切换的时候，组件就不在了，此时就要把事件移除，否则组件不在了，但是事件还在，当滑动的时候还会触发这个事件，但是已经无法获取到this.refs.more这个真实的DOM元素了，会报错；
        window.removeEventListener("scroll",this.fn);
    }
    render(){
        return (
            <div className="has-more">
                {this.props.hasMore?<div ref="more" onClick={this.loadMore.bind(this)}>加载更多</div>:<div>我是有底线的</div>}
            </div>
        )
    }
}