//1. 因为一个项目中只能有一个store和一个状态state；而创建store需要reducer，reducer返回新的state，如果有好多状态的话，就会有好多reducer，所以要把reducer合并成一个reducers，返回一个状态，也就是相当于把所有状态合并起来，放到一个对象中；
//2. 通过combineReducers合并所有reducer，导出去（store/index.js），让createStore使用，创建store；-> 依赖redux；
import {combineReducers} from "redux";
import {userInfo} from "./userInfo";
import {store} from "./store";
// userInfo:{num:123}  userInfo1:{name:123}  -> state:{userInfo:{num:123},userInfo1:{name:123}}
export default combineReducers({
    userInfo,
    store
})  // 导出去的内容state为{userInfo:{action.data}}，也就是update方法（是一个Action Creator，返回一个action）中传进来的data数据；例如：就相当于containers文件夹中的index文件App组件中的update中传进来的cityName -> {userInfo:{cityName:"杭州"}}；
