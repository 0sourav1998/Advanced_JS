// let h1 = document.querySelector('h1') ;

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

//callback nesting ---> Callback Hell

function savedataTodB(data, successCB, failureCB) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  if (internetSpeed > 5) {
    successCB();
  } else {
    failureCB();
  }
}
savedataTodB(
  "First Data",
  () => {
    console.log("Success:First Data was Saved");
    savedataTodB(
      "Second Data",
      () => {
        console.log("Succes : Second Data Saved");
        savedataTodB(
          "Third Data",
          () => {
            console.log("Success : Third data Saved");
          },
          () => {
            console.log("Failure:Weak Connection");
          }
        );
      },
      () => {
        console.log("Failure : Weak Connection");
      }
    );
  },
  () => {
    console.log("Failure : Weak Connection");
  }
);

//Callback nesting --> Callback hell
