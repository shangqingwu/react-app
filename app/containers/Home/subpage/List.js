import React,{Component} from 'react';
import {getList} from '../../../fetch/home';
import ListComponent from '../../../components/ListComponent/ListComponent';
import LoadMore from '../../../components/LoadMore/index';
export default class List extends Component{ //目的：获取数据；
    constructor(){
        super();
        this.state={
            data:[],
            hasMore:true,
            page:0, //页码
            isLoading:true //是否正在加载，当点击的时候可能会点多次，这样会获取多次；当正在加载的时候，不能点击；
        }
    }
    componentDidMount(){
        //通过containers的Home下的index首页传过来city；默认第一页，索引为0；
        this.processData(getList(this.props.cityName, 0));
    }
    //需要在当前写一个加载更多的函数，传递给LoadMore，当点击按钮，触发传递函数；因为LoadMore是傻组件，不会写数据逻辑，只能展示到页面中；
    loadMore(){
        // console.log("loading");
        this.setState({  //this.setState是一个异步的，不能直接在下面拿到它里面的数据，此时就要在它后面写第二个参数回调函数，当刚更新完state，就可以拿到最新的数据；
            page:this.state.page+1, //每次调用这个函数的时候，都要让当前页码+1；
            isLoading:true //每次加载更多时，状态都应该为正在加载
        },()=>{//这个函数可以获取到最新页码的状态；-> 主要用于后台；
            this.processData(getList(this.props.cityName, this.state.page));
        })
    }
    //处理成功后的逻辑，也就是把then方法抽离出来
    processData(result){
        result.then(res=>res.json()).then(({hasMore,data})=>{ //由于data不能直接赋值，所以要将获取到的数据解构出来，将新data与老data拼接起来，形成一个新的data，再更新到状态中；
            // console.log(data);
            this.setState({
                hasMore,
                data:this.state.data.concat(data), //继续加载，不能直接写data，会覆盖掉；旧数据和最新数据拼接在一起；
                isLoading:false  //加载完成之后，改为false；
            })
        })
    }
    render(){
        return (
            <div>
                {this.state.data.length?<ListComponent data={this.state.data}/>:<div>正在加载</div>}
                {/*如果还有数据就加载更多，没有就显示到底了；在傻组件中写；*/}
                <LoadMore hasMore={this.state.hasMore} loadMore={()=> this.loadMore()} isLoading={this.state.isLoading}/>
            </div>
        )
    }
}