// let h1 = document.querySelector('h1') ;
// function colorChange(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             h1.style.color=color ;
//            resolve('Color was Changed')
//         },delay)
//     })
// }

// colorChange("red",1000)
// .then((result)=>{
//     console.log(result) ;
//     return colorChange('orange',1000)
// })
// .then((result)=>{
//     console.log(result);
//     return colorChange('blue',1000);
// })
// .then((result)=>{
//     console.log(result);
//     return colorChange('green',1000);
// })
// .then((result)=>{
//     console.log(result);
//     return colorChange('violet',1000)
// })
// .then((result)=>{
//     console.log(result)
// })
// .catch(()=>{
//     console.log("Rejected")
// })

// let h1 = document.querySelector("h1");
// function colorChange(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       h1.style.color = color;
//       resolve("Color was Changed");
//     }, delay);
//   });
// }

// async function showColor() {
//   await colorChange("red", 1000);
//   await colorChange("orange", 1000);
//   await colorChange("blue", 1000);
//   await colorChange("green", 1000);
//   await colorChange("violet", 1000);
//   //holds the execution of other function call,once the promise is fullfilled or rejected it come to next function call
// }

//handling rejections throught await

let h1 = document.querySelector("h1");
function colorChange(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 5) + 1;
      if (num < 3) {
        reject("Promise Rejected");
      }
      h1.style.color = color;
      console.log(`Color was Changed to ${color}`);
      resolve("Color was Changed");
    }, delay);
  });
}

async function showColor() {
  try {
    await colorChange("red", 1000);
    await colorChange("orange", 1000);
    await colorChange("blue", 1000);
    await colorChange("green", 1000);
    await colorChange("violet", 1000);
    //we wrap the function calls that gaving tendency to be rejected
  } catch (error) {
    console.log("Error found ", error);
    //if rejected it caugth by catch 
  }
  let newNum= 5 ;
  console.log(newNum);
  //this will not effect
}
