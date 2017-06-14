import React,{Component} from 'react';
import {getList} from '../../../fetch/Home';
import ListComponent from '../../../components/ListComponent';
import LoadMore from '../../../components/LoadMore';
export default class List extends Component{
    constructor(){
        super();
        this.state={
            data:[],
            hasMore:true,
            page:0,
            isLoading:true //默认正在加载；
        }
    }
    componentDidMount(){
        //由于在Home组件中已经获取到redux中的cityName了，所以只要通过属性传递到子组件中就可以了，可以通过this.props.cityName接收城市；
        this.processData(getList(this.props.cityName,0));
    }
    loadMore=()=>{  //当点击的时候，执行这个函数，将isLoading状态改为true，就不可以继续点击了；-> 实现正在加载按钮每次只能点击一次；
        // console.log("loadMore");
        this.setState({
            isLoading:true,//获取数据的时候，正在加载，就不能点击了；
            page:this.state.age+1
        },()=>{
            this.processData(getList(this.props.cityName,this.state.page));
        })
    };
    processData (result){
        result.then(res=>res.json()).then(({hasMore,data})=>{
            // console.log(data);
            this.setState({
                hasMore,
                data:this.state.data.concat(data),
                isLoading:false  //加载完之后，状态就改为没有正在加载，可以点击；
            })
        })
    }
    render(){
        return (
            <div>
                {this.state.data.length?<ListComponent data={this.state.data}/>:<div>正在加载</div>}
                <LoadMore hasMore={this.state.hasMore} loadMore={this.loadMore} isLoading={this.state.isLoading}/>
            </div>
        )
    }
}