import React,{Component} from 'react';
import {getAd} from "../../../fetch/home"
import "./index.less"
export default class Ad extends Component{ //组件加载完时就要用Ad；
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        // getAd()执行之后，返回一个promise，调用then方法，成功回调函数的res.json()执行之后,把response转成json数据，又返回一个promise，调用then方法，里面拿到的数据data就是我们需要的数据；-> fetch就是这么用的
        getAd().then(res=>res.json()).then(data=>{
            // console.log(data);
            this.setState({data});
        })
    }
    render(){
        // 大括号{}中不能放对象，所以不能直接写{this.state.data}输出，会报错；
        return (
            <div className="ad">
                <h3>超值特惠</h3>
                {
                    this.state.data.length?this.state.data.map((item,index)=>(
                    <a href={item.link} key={index}>
                        <img src={item.img} title={item.title}/>
                    </a>
                    )):<div>正在加载</div>
                }
            </div>
        )
    }
}