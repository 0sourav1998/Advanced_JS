// let obj = {
//     name :"sourav",
//     email : "sourav@gmail.com",
//     password : 12345
// }
// // console.log(obj.name)
// let jsonString = JSON.stringify(obj) ;
// console.log(jsonString)

//convert a obj into 

let json = '{"name":"sourav","email":"sourav@gmail.com","password":12345}' ;
// console.log(json.name)
//JSON send by the server is basically a string so . property will not work , we need to convert this into a js obj
let obj = JSON.parse(json)
//converted to obj
console.log(obj)
//now we can we use . property to access key value
console.log(obj.name)