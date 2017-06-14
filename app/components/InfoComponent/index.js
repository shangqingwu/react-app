import React,{Component} from 'react';
import Star from '../../components/Star';
import './index.less';
export default class InfoComponent extends Component{
    render(){
        let {title,img,star,price,subTitle,desc} = this.props.data;
        return (
            <div className="info-component">
                <div className="info-list">
                    <img src={img} alt=""/>
                    <div>
                        <h3>{title}</h3>
                        <div className="info-star">
                            <Star count={star}/><span>￥{price}</span>
                        </div>
                        <p>{subTitle}</p>
                    </div>
                </div>
                <hr/>
                <div dangerouslySetInnerHTML={{__html:desc}}></div>{/*将内容转成HTML，这种做法很危险，如果是script脚本代码的话，就会直接执行了，但是desc中的数据是html格式，所以必须要转换成HTML，否则会将里面的内容当做字符串输出；*/}
            </div>
        )
    }
}