import React,{Component} from 'react';
import CommentItem from './CommentItem';
export default class CommentComponent extends Component{
    render(){
        return (
            <div>
                {/*把评论的每一项评论都传给一个小傻瓜组件；*/}
                {
                    this.props.data.map((item,index)=>(
                        <CommentItem data={item} key={index}/>
                    ))
                }
            </div>
        )
    }
}