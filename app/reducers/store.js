// 合并reducer；
import * as Types from "../action-types/store";
let initState=[]; //默认state为空数组，存放多个收藏的商品；
export function store(state=initState,action) { //默认空数组，通过action的类型操作状态；
    switch (action.type){
        case Types.ADD_STORE: //会传进来id，拿到之后，就把他放到数组中；-> 先把state解构展开，把id放到后面；
            return [...state,action.data];
        case Types.REMOVE_STORE:
            return state.filter(item=>item!==action.data); //把数组中的id删掉；
        default:
            return state;
    }
}