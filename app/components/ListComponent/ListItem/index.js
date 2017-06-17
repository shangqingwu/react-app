import React,{Component} from 'react';
import "./index.less";
import {Link} from "react-router-dom";
export default class ListItem extends Component{
    render(){
        let {img,title,subTitle,distance,price,number,id}=this.props.data;
        return  (
            <Link to={"/detail/"+id}>{/*Link默认a标签，必须要有to属性，代表要跳到哪；*/}
                <div className="list-item">
                    <img src={img}/>
                    <div className="list-item-content">
                        <h3>{title}</h3>
                        <p>{subTitle}</p>
                        <div>
                            <strong>￥{price}</strong>
                            <span>已售{number}</span>
                        </div>
                        <span className="distance">{distance}</span>
                    </div>
                </div>
            </Link>
        )
    }
}