import React,{Component} from 'react';
import {getAd} from "../../../fetch/Home/index";
import "./index.less";
export default class Ad extends Component{
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    componentDidMount(){ // 组件加载完成就要拿到Ad的数据，并且之后要渲染到页面上；要想在render中拿到获取的数据，就要设置一个初始状态，并且把获取到的数据赋值给state的data，循环data，渲染页面；
        getAd().then(res=>res.json()).then(data=>{
            this.setState({
                data
            })
        });
    }
    render(){
        //data有长度，就循环data，将里面的数据展示出来，如果没有数据，就显示正在加载；
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