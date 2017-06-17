import React,{Component} from 'react';
import  './index.less';
export default class OrderListItem extends Component{
    constructor(props){
        super(props);
        /*将外面传进来的状态转化成自己的状态*/
        this.state={
            commentState:props.data.commentState
        }
    }
    changeCommentState = ()=>{ //状态变成评价中；
        this.setState({
            commentState:1
        })
    };
    cancel = () =>{ //点击之后，评价框消失，状态变成未评价；
        this.setState({
            commentState:0
        })
    };
    //确认提交；
    changeState = () => {
        this.setState({
            commentState:2
        })
    };
    sureComment = () =>{ //this.changeState必须得修改this，否则传到爷爷组件OrderList的时候，this就变成了爷爷组件OrderList；-> 修改this三种方法：bind、箭头函数、声明时用箭头函数；
        this.props.commitComment(this.props.data.id,this.comment.value,this.changeState);
    };
    render(){
        //传过来的data是orderList数组中的每一个对象，要用到里面的数据，先解构赋值，要不写起来麻烦；
        let {id,commentState,img,title,count,price} = this.props.data;
        return (
            <div>
                <div className="order-list-item">
                    <img src={img} alt=""/>
                    <div className="order-list-content">
                        <h3>商户：{title}</h3>
                        <span>数量：{count}</span>
                        <span>价格：{price}</span>
                    </div>
                    <div className="order-list-button">
                        {/*三个状态：0未评价，1正在评价，2已评价；-> 需要设置一个状态*/}
                        {
                            this.state.commentState === 0?<button onClick={this.changeCommentState}>评价</button>:
                                this.state.commentState === 1?"":
                                    <button className="unselect">已评价</button>
                        }
                    </div>
                </div>
                <div>
                    {
                        this.state.commentState === 1?
                            <div className="comment-area">
                                <textarea ref={ref=>this.comment=ref}></textarea>
                                <div>
                                    <button onClick={this.sureComment}>确认评价</button>
                                    <button onClick={this.cancel}>取消</button>
                                </div>
                            </div>:""
                    }
                </div>
            </div>

        )
    }
}