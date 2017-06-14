import React,{Component} from 'react';
import {getInfo} from "../../../fetch/detail";
import InfoComponent from "../../../components/InfoComponent";
export default class Info extends Component{
    constructor(){
        super();
        this.state={
            data:false/*因为data是一个对象，所以默认为false，这样才能在后面判断是否拿到data数据了，没拿到为false，拿到为对象，为真*/
        }
    }
    componentDidMount(){
        getInfo(this.props.id).then(res=>res.json()).then(data=>{
            this.setState({
                data
            });
        })
    };
    render(){
        return (
            <div>
                {/*如果拿到data了，就显示data中的数据，没有拿到就显示加载更多；*/}
                {this.state.data?<InfoComponent data={this.state.data}/>:<div>加载更多</div>}
            </div>
        )
    }
}