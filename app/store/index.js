//拿到合并后的reducers；创建store; -> 在app/index.js中可以获取到这个configureStore方法来创建store；
import {createStore} from "redux";
import reducers from "../reducers/index";//就相当于是combineReducers合并之后的结果；state:{userInfo:{action.data}} -> {userInfo:{cityName:"杭州"}}； 因为合并的时候，放了一个reducer，所以把这一个放到了对象中；
//配置store
export function configureStore(initState) { // 通过合并后的reducers，创建出来的store仓库；
    return createStore(reducers,initState,window.devToolsExtension?window.devToolsExtension():undefined);//第一个参数是创建仓库store时，必须要放进去的一个reducer，所以要把合并后的reducers放进去，因为一个项目中只能有一个store和一个状态state；
// 第二个参数可以放一个默认的状态；
// 第三个参数在下载Redux DevTool插件 之后才需要配置；-> Redux DevTool插件 （谷歌）：可以看当前redux的所有状态；但是要用这个Redux DevTool插件就要配置第三个参数，不安可以不写;
}
// Redux DevTool插件 （谷歌）：可以看当前redux的所有状态；