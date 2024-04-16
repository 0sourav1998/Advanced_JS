// function savedataTodB(data, successCB, failureCB) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 5) {
//       successCB();
//     } else {
//       failureCB();
//     }
//   }
//   savedataTodB(
//     "First Data",
//     () => {
//       console.log("Success:First Data was Saved");
//       savedataTodB(
//         "Second Data",
//         () => {
//           console.log("Succes : Second Data Saved");
//           savedataTodB(
//             "Third Data",
//             () => {
//               console.log("Success : Third data Saved");
//             },
//             () => {
//               console.log("Failure:Weak Connection");
//             }
//           );
//         },
//         () => {
//           console.log("Failure : Weak Connection");
//         }
//       );
//     },
//     () => {
//       console.log("Failure : Weak Connection");
//     }
//   );

// function savedataTodB(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 5) {
//       resolve("Success : Data Was Saved");
//     } else {
//       reject("Failure : Data Was not Saved because of Weak Connection");
//     }
//   });
// }

// savedataTodB("First Data")
// .then((result)=>{
//     console.log("Data1 Saved") ;
//     console.log(result);
//     return savedataTodB("Second Data")
// })
// .then((result)=>{
//     console.log("Data2 Saved");
//     console.log(result);
//     return savedataTodB("Third Data")
// })
// .then((result)=>{
//     console.log("Data3 Saved");
//     console.log(result);
// })

// .catch((error)=>{
//     console.log("Data not Saved Weak Connection")
//     console.log(error)
// })

//only one catch required in promise , any error in any chaining detected in catch 


let h1 = document.querySelector('h1') ;

// function colorChange(color,delay,callback){
//     setTimeout(()=>{
//         h1.style.color=color ;
//         callback();
//     },delay)
// }
// colorChange('red',1000,()=>{
//     colorChange('orange',1000,()=>{
//         colorChange('blue',1000,()=>{
//             colorChange('green',1000,()=>{
//                 colorChange('violet',1000)
//             })
//         })
//     })
// });


function colorChange(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color ;
           resolve('Color was Changed')
        },delay)
    })
}

colorChange("red",1000)
.then((result)=>{
    console.log(result) ;
    return colorChange('orange',1000)
})
.then((result)=>{
    console.log(result);
    return colorChange('blue',1000);
})
.then((result)=>{
    console.log(result);
    return colorChange('green',1000);
})
.then((result)=>{
    console.log(result);
    return colorChange('violet',1000)
})
.then((result)=>{
    console.log(result)
})
.catch(()=>{
    console.log("Rejected")
})

//only one catch required in promise , any error in any chaining detected in catch 