//Comments :

let btn = document.querySelector("button");
let para = document.querySelector("p");
// let currentIndex = 0;
// btn.addEventListener("click", async () => {
//   let res = await loadComments();

//   // res.data.forEach((obj) => {
//   //   para.innerText = obj.body ;
//   //   setTimeout(()=>{
//   //       para.innerText = ''
//   //   },3000)
//   // });
//   if (currentIndex < res.data.length) {
//     // console.log(res.data.length)
//     para.innerText = res.data[currentIndex].body; // Display the current comment
//     currentIndex++; // Increment currentIndex for the next click
//   } else {
//     para.innerText = "No more comments"; // Display a message when all comments are displayed
//   }
// });

// let url = "https://jsonplaceholder.typicode.com/comments";
// async function loadComments() {
//   let data = await axios.get(url);
//   return data;
// }

//Dog Images 

// btn.addEventListener('click',async()=>{
//     let img = document.querySelector('img')
//     let link = await showImage() ;
//     img.setAttribute('src',link );

// })

// let url2 = "https://dog.ceo/api/breeds/image/random";
// async function showImage(){
//     let res = await axios.get(url2);
//     return res.data.message ;
// }

//passing headers

// let url3 = "https://icanhazdadjoke.com/"

// async function getJokes(){
//     let config = { headers : {Accept : "application/json"}}
//     let jokes = await axios.get(url3,config);
//     console.log(jokes.data.joke)
//     //return a html file which is not readable
// }


let url4 ="http://universities.hipolabs.com/search?name=" ;
let btn2 = document.querySelector('button');
let ul = document.querySelector('ul')


btn2.addEventListener('click',async ()=>{
    let country = document.querySelector('input').value ;
    let collArr = await getColleges(country) ;
    // console.log(collArr)
    show(collArr);
   
})

function show(collArr){
    ul.innerHTML = '';
    for(col of collArr){
        let list = document.createElement('li');
        ul.appendChild(list)
            list.innerText = col.name
    }
}
async function getColleges(country){
    let url5 = await axios.get(url4+country);
    return url5.data ;
}

