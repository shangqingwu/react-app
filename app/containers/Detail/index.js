import React,{Component} from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import Info from './subpage/Info';
export default class Detail extends Component{
    render(){
        return (
            <div>
                {/*商品详情*/}
                <HeaderComponent title="商品详情" history={this.props.history}></HeaderComponent>
                {/*商户信息*/}
                <Info id={this.props.match.params.id}></Info>
                {/*收藏和购买*/}
                {/*评论*/}
            </div>
        )
    }
}