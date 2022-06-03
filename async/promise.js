 'use strict'

 // Promise is a JavaScript object for asyncronous operations
 // Promise에서 중점적으로 보아야 하는 두가지 State, Producet&Consumer
 
 // State : pending -> fullfilled or rejected
 // State는 Promise의 상태로서
 // operation이 수행중이라면 pending 상태
 // operation이 완료되었다면 fullfilled 상태
 // operation 수행에 문제가 생기면 rejected 상태

 // Producer vs Consumer
 // Producer : 우리가 원하는 기능을 수행해서 데이터를 만들어내는 
 //            Promise object
 // Consumer : 원하는 데이터를 소비하는  

 // 1. Producer
 // 우선 promise를 만들어 보자!
 // promise에는 파라미터가 필요하며 resolve와 reject로 이루어져있다.

 // when new Promise is created, the executor runs automatically.
 // promise의 안에 들어있는 함수들은 executor이다.

     // doing some heavy work in promise ( ex)network, read files, ... )
     // 만약 무거운(오래걸리는)일을 syncronous로 진행하게 되면 
     // 무거운 일을 수행하는 동안 다음에 오는 코드들이 기다려야 합니다.
     // 이때 Asyncronous로 무거운 일을 진행시키며 다음에 있는 코드를
     // 실행시켜주어야 효율적입니다.
 const promise = new Promise((resolve, reject)=>{
    // promise에서는 비동기적으로 수행하고 싶은 일을 코드로 적고
    // 기능이 잘 수행됬다면 resolve로 값을 Consumer에게 주고
    // 수행 중에 문제가 생기면 reject를 사용하여 왜 에러가 났는지
    // 알려주는 방식이다.
     console.log('doing someting...');
     const i = 0;   // 조건에 따라서 상황에 맞게 resolve or reject를 쓸 수 있다.
     setTimeout( () => {
         if(i === 1){
            resolve('ellie');  //파라미터로 있는 resolve라는 콜백함수를 통해 데이터를 Consumer에게 전달해준다.
         } else {
            reject(new Error('no network'));    //Error라는 object이다.
         }
    },1000); 
 });

 // 2. Consumers : then, catch, finally를 사용하여 
 //                Producer로 부터 생성된 데이터를 받아올 수 있다.
 // then : Producer(promise)로 부터 기능이 잘 수행되어 얻은 데이터값을 resolve로 부터 받아온다.
 // catch : Producer(promise)로 부터 기능 수행 중 발생한 error의 원인정보를 reject로 부터 받아온다.
 promise
 .then(value => {           // then에서 생성한 변수(value)에 resolve로 받은 값이 들어온다.
     console.log(value);    // 여기서도 .then이 다시 promise를 반환하기 때문에 
 })                         // 다음에 있는 .catch를 쓸 수 있는것이다!. array.js를 참고해보자!
 .catch(error =>{
     console.log(error);
 })
 .finally(()=> {            // .finally는 then이나 catch와 관계없이 마지막에 무조건 실행된다.
     console.log('finally');
 });

 // 3. Promise chaining

 const fetchNum = new Promise((resolve, reject) => {
     setTimeout(()=>{resolve(1)},1000);
 })

 fetchNum
    .then(num => num * 2)
    .then(num => num + 10)
    .then(num => {
        return new Promise((resolve, reject) => {       //.then은 새로운 Promise도 반환해 줄 수 있다.
            setTimeout(()=>{ resolve(num - 5)},1000);
        });
    })
    .then(num => console.log(num));