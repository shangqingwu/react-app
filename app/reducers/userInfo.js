//里面存放reducer；-> 并且导到reducers/index.js中合并reducer；
import * as Type from "../action-types/userInfo";
let initState = {};
export function userInfo(state=initState,action) {  //在actions/userInfo.js中定义的updateAction Creator 返回的 action:{ type:Type.UPDATE_CITY, data } -> data是update方法传进来的数据（例如：cityName:"杭州" -> 也就是 action:{ type:Type.UPDATE_CITY, data:{cityName:"杭州"} }）；
    switch (action.type){
        //将传入的state更新成最新的状态；
        case Type.UPDATE_CITY:
            return action.data;  // 相当于是{cityName:"杭州"}
        default:
            return state;
    }
}