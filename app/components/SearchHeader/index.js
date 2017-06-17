import React,{Component} from 'react';
import SearchInput from '../SearchInput';
import  './index.less';
export default class SearchHeader extends Component{
    back=()=>{
        this.props.history.go(-1);
    };
    render(){
        return (
            <div className="back search-header">
                <i className="iconfont icon-fanhui" onClick={this.back}></i>
                <div>
                    <SearchInput value={this.props.value} toSearch={this.props.toSearch}/>
                </div>
            </div>
        )
    }
}