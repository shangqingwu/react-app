import React,{Component} from 'react';
import SearchHeader from '../../components/SearchHeader';
// 1. 可以从轮播图点击进来，/search/jingdian  /search/huazhuangpin
// 2. 搜索框输入内容进入   /search/all/keyword
// /search/:kind/:keyword
export default class Search extends Component{
    toSearch =(value)=>{
        this.props.history.push("/search/all/"+value);
    };
    render(){
        return (
            <div>
                <SearchHeader value={this.props.match.params.keyword || ""} history={this.props.history} toSearch={this.toSearch}/>
            </div>
        )
    }
}