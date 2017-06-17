import React, {Component} from 'react';
import  './index.less';
import Star from '../Star';
export default class InfoComponent extends Component {
    render() {
        let {img, star, desc, title, subTitle, price} = this.props.data;//拿到的data是对象，将里面的属性解构赋值出来；
        return (
            <div className="info-component">
                <div className="info-list">
                    <img src={img}/>
                    <div>
                        <h3>{title}</h3>
                        <div className="info-star">
                            <Star count={star}/><span>￥{price}</span>
                        </div>
                        <p>{subTitle}</p>
                    </div>
                </div>
                <hr/>
                <div dangerouslySetInnerHTML={{__html:desc}}></div>{/*将内容转换成HTML插入到页面中，比较危险，因为如果是脚本的话就直接执行了，但是人家desc中的数据本来就是html格式的，所以必须要转，否则就是字符串；*/}
            </div>
        )
    }
}