//原理：直接调用update方法就相当于是：在reducers/userInfo.js中执行userInfo这个reducer的时候作为第二个参数action传进去使用；
//所有用户信息都放在这里面；-> action是一个对象，里面存放type和要做的事；
import * as Type from "../action-types/userInfo";
//action Creator -> updata是一个函数，返回action；
export function update(data) {
    return {
        type:Type.UPDATE_CITY,
        data
    }
}







