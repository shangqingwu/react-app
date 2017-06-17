/*
必须建文件夹，因为还要放样式；
react是单向数据流，都是父传子；
*/
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import SearchInput from '../SearchInput';
import './index.less';
// 主页头部组件；
export default class HomeHeader extends Component{
    toSearch = (value) => {
        //傻瓜组件中不自带history，需要从父级传递过来，才能用；
        this.props.history.push("/search/all/"+value);
    };
    render(){
        return (
            <div className="home-header back">
                <Link to="/city">
                    <div className="city">
                        {this.props.cityName}
                        <i className="iconfont icon-xiangxia2"></i>
                    </div>
                </Link>
                <div className="search">
                    <i className="iconfont icon-sousuo-xianxing"></i>
                    {/*此搜索框需要接受一个函数，当回车的时候，调用传递的函数，将值传递进来，进入/search/all/keywords输入框中的内容 */}
                    <SearchInput value="" toSearch={this.toSearch}/>{/*输入框默认value值为空*/}
                </div>
                <Link to="/login">
                    <div className="profile">
                        <i className="iconfont icon-yonghufill"></i>
                    </div>
                </Link>
            </div>
        )
    }
}