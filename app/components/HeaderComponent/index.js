import React, {Component} from 'react';
import './index.less';
export default class HeaderComponent extends Component {
    back(){
        if (this.props.back){ //手动设置跳转页；如果传递了back这个属性，则就跳转到自己设置的路径；
            this.props.history.push(this.props.back);
        }else {
            this.props.history.go(-1);//返回上一级页面；
        }
    }
    render() {
        return (
            <div className="back header-component">
                <i className="iconfont icon-fanhui" onClick={this.back.bind(this)}></i>
                <span>
                    {this.props.title}
                </span>
            </div>
        )
    }
}