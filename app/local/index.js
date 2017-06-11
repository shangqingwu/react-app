//本地存储，当获取cityName的时候，先来这里面看看本地有没有存cityName；
export function getStorage(key){
    return localStorage.getItem(key);
}
export function setStorage(key,value){
    return localStorage.setItem(key,value);
}