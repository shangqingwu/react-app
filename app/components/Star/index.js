import React,{Component} from 'react';
export default class Star extends Component{
    constructor(props){
        super(props);
        /*将父组件InfoComponent传进来星星总数转换为数组，数组中默认有5项，代表好评率，有几个星星就有几个true，其余为false；再通过判断true或false显示实心星星或者空心星星；*/
        let ary = [];
        for (let i = 1; i <= 5; i++){
            i<=props.count?ary.push(true):ary.push(false);
        }
        this.state={
            ary
        }
    }
    render(){
        console.log(this.state.ary);
        return (
            <div>
                {
                    this.state.ary.map((item,index)=>(
                        item?<i className="iconfont icon-collection_fill font" key={index}></i>:<i className="iconfont icon-collection font" key={index}></i>
                    ))
                }
            </div>
        )
    }
}