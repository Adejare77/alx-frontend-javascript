import { queryAPI, weakMap } from "./100-weak";

const endPoint = { protocol: 'http', name: 'getUsers' }
console.log(weakMap.get(endPoint))

queryAPI(endPoint)
console.log(weakMap.get(endPoint))

queryAPI(endPoint);
console.log(weakMap.get(endPoint))

queryAPI(endPoint)
queryAPI(endPoint)
queryAPI(endPoint)
queryAPI(endPoint)
