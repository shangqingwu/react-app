import React,{Component} from 'react';
import  './index.less';
export default class Star extends Component{
    constructor(props){
        // console.log(props);
        super(props);
        let arr = [];
        for (let i=1;i<=5;i++){
            if (i<=props.count){
                arr.push(true);
            }else {
                arr.push(false);
            }
        }
        // console.log(arr); //[true, true, true, true, false]
        //由于arr要放到下面用，所以把它放到状态中；
        this.state={
            arr
        }
    }
    render(){
        /*item是一个布尔值*/
        return (
            <div>
                {
                    this.state.arr.map((item,index)=>(
                        item?<i className="iconfont icon-collection_fill font" key={index}></i>:<i className="iconfont icon-collection font" key={index}></i>
                    ))
                }
            </div>
        )
    }
}