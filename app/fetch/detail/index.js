import {get} from "../index";
export function getInfo(id) { //通过id获取商户信息；
    return get("/api/detail/info/"+id+"")
}
export function getComment(id,page) { //通过id、page获取评价列表；
    return get("/api/detail/comment/"+id+"/"+page+"")
}