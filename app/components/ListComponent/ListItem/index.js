import React, {Component} from 'react';
import './index.less';
import {Link} from "react-router-dom";
export default class ListItem extends Component {
    render() {
        let {img, title, subTitle, price, id, distance, number}= this.props.data; //this.props.data拿到的是list后台数据中data数组中的每一条对象；
        return (
            <Link to={"/detail/"+id}>
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