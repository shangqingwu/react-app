import React,{Component} from 'react';
import './index.less';
export default class HeaderComponent extends Component{
    back=()=>{
      this.props.history.go(-1);
    };
    render(){
        return (
            <div className="back header-component">
                <i className="iconfont icon-fanhui" onClick={this.back}></i>
                <span>
                    {this.props.title}
                </span>
            </div>
        )
    }
}