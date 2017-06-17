//在reducer中用；
import * as Types from "../action-types/store"; //要把type用一个对象接收
//ActionCreator -> 返回action；
export function add(id) {
    return {
        type: Types.ADD_STORE,
        data: id
    }
}
export function remove(id) {
    return {
        type: Types.REMOVE_STORE,
        data: id
    }

}