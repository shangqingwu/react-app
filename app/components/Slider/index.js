import React, {Component} from 'react';
import ReactSwipe from 'react-swipe'; //轮播图插件，是一个傻组件，只要引进来就行；
import "./index.less";
import {Link} from "react-router-dom";
export default class Slider extends Component {  // 必须得在页面级组件中引进去，也就是Home组件；
    constructor() {
        super();
        this.state = {
            index: 0
        }
    }

    render() {
        let opts = { //ReactSwipe中的swipeOptions属性提取出来；
            continuous: false,
            callback: (index)=> { //显示第几张图片，就将index修改成对应的值；
                this.setState({
                    index
                })
            }
        };
        return (
            <div>
                <ReactSwipe className="carousel" swipeOptions={opts}>
                    <div>
                        <ul>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </ReactSwipe>
                <ul className="dots">
                    <li className={this.state.index == 0 ? "active" : ""}></li>
                    <li className={this.state.index == 1 ? "active" : ""}></li>
                    <li className={this.state.index == 2 ? "active" : ""}></li>
                </ul>
            </div>
        )
    }
}