let url = "https://catfact.ninja/fact";

// fetch(url)
// //return a promise
// //first call
// .then((res)=>{
//     console.log(res);
//     return res.json();
// })
// .then((data)=>{
//     console.log("Data1 = ",data.fact) ;
//     return fetch(url);
//     //second call
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log("Data2 = " ,data.fact)
// })
// .catch((err)=>{
//     console.log(err)
// })

async function getFacts() {
  // let res = fetch(url);
  // //as it is returning a promise we must use await otherwise js will come to console.log part and as it does not received any response it will send undefined
  // console.log(res)
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);
    //first call

    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log(data2.fact);
    //second call
  } catch (err) {
    console.log(err);
  }
}
