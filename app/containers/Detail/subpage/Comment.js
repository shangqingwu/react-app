import React,{Component} from 'react';
import {getComment} from '../../../fetch/detail';
import CommentComponent from '../../../components/CommentComponent';
import LoadMore from '../../../components/LoadMore';
export default class Comment extends Component{
    constructor(){
        super();
        this.state = {
            page:0,
            data:[],
            hasMore:true,
            isLoading:true
        }
    }
    //先获取数据，默认加载第一页，下拉刷新获取更多；
    componentDidMount(){
        this.processData(getComment(this.props.id,0));
    }
    //加载更多，设置状态 -> 每次让页码加1，并且默认正在加载isLoading；
    loadMore = () => {
        this.setState({
            isLoading:true,
            page:this.state.page+1,
        },()=>{
            this.processData(getComment(this.props.id,this.state.page));
        })
    };
    processData(result){
        result.then(res=>res.json()).then(({hasMore,data})=>{
            this.setState({
                hasMore,
                data:this.state.data.concat(data),
                isLoading:false
            })
        })
    }

    render(){
        return (
            <div>
                {this.state.data.length?<CommentComponent data={this.state.data}/>:<div>正在加载</div>}
                <LoadMore isLoading={this.state.isLoading} hasMore={this.state.hasMore} loadMore={this.loadMore}/>
            </div>
        )
    }
}