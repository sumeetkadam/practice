let result1 = document.getElementById('result1');
let result2 = document.getElementById('result2');
let result3 = document.getElementById('result3');
let dell={
    brand:'dell',
    hardDisk:'2TB',
    color:'black'
}

let buyLaptop = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(dell)
    },3000);
})

let buyLaptop2 = fetch('https://jsonplaceholder.typicode.com/p/posts')
      .then(response => response.json())
      .then(json => console.log(json))

function fetch1(){

    result1.innerHTML='Fetching data..';
    buyLaptop.then(res=>{
        console.log(res);
        result1.innerText=JSON.stringify(res);
    })
}
async function fetch2(){

    result2.innerText='Fetching data..';
    let res =  await buyLaptop;
    result2.innerText=JSON.stringify(res);
}
function fetch3(){

    result3.innerText='Fetching data..';
    buyLaptop2.then(res=>{
        result3.innerText=JSON.stringify(res);
    })
}
    