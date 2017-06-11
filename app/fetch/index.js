import "es6-promise";
import "whatwg-fetch";
export function get(url) {
    return fetch(url,{
        Accept:"application/json"
    })
}