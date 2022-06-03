'use strict';

// JavaScript is synchronous. 
// Synchronous(동기) : 동기는 요청을 보낸 후 응답(결과물)을 받아야지만 다음
// 동장이 이루어지는 방식이다. 모든 일은 순차적으로 실행되며 어떤 작업이 수행중
// 이라면 다음 작업은 대기하게 된다.

// Asynchronous(비동기) : 언제 코드가 실행될지 예측할 수 없는 방식.

// Execute the code block by orger(=in order) after hoisting
// hoisting : var, function declaration
// 아래 의 경우 1을 출력 후, setTimeout이 실행되지만 1000ms를 기다린 후에
// 2가 출력되므로 1 다음에 line16에 있는 3을 출력 하고 
// 1000ms이후에 2를 출력한다. 이게 동기를 나타내는 예시이다.

// console.log(`1`); //동기
// setTimeout(function(){
//     console.log(`2`); //비동기
// },1000);
// console.log(`3`); //동기
// ---------------------------------

// Syncronous callback //
// function printImmediately(print){ //함수선언 - hoisting으로 맨 위에서 선언된것과 같다.
//     print();
// }
// printImmediately(function(){
//     console.log(`hello`); //동기
// })

// 설명
// line24처럼 printImmediately를 선언하면 JS의 특징인 Hoisting에 의해
// printImmediately 함수 선언문이 코드의 맨 위로 올라가는 것과 같게 됩니다.
// 이후 코드를 다시 실행해보면 1, 3, hello, 2가 출력됩니다.
// 여기서 2는 1000ms 이후에 출력되므로 그 사이에 printImmediatly 함수가
// 실행된 것입니다.

//Asynchronous callback//
// function printWithDelay(print, timeout){ //함수선언 - hoisting으로 맨 위에서 선언된것과 같다.
//     setTimeout(print, timeout);
// }

// printWithDelay(function(){
//     console.log('async callback'); //비동기
// }, 2000);

// 설명
// line39의 함수 선언은 Hoistin으로 코드 맨 위로 올라가는 것과 같게 됩니다.
// 이후 코드를 실행해 보면 1, 3, hello, 2, async callback이 출력됩니다.
// 1, 3, hello는 동기적으로 바로 실행이 되며, 2와 async callback은 
// 각각 1초와 2초 뒤에 실행되기 때문에 비동기적 성질을 띄며 실행됩니다.
// 1초와 2초를 기다린 뒤에 출력이 되는 시점은 Synchronous 성질에 따라
// 코드 맨 위에서 내려오며 callback함수를 부르는 시점부터 정해진 ms만큼 
// 기다리게 됩니다.

// Callback Hell example //
//★★★ 1. class의 선언시에는 내부 method들간의 파라미터와 실행체계를 설정한다.
class UserStorage {     
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else{
                onError(new Error('not found'));
            }
        },2000);
    }


    getRoles(user, onSuccess, onError) {
        setTimeout(()=> {
            if(user === 'ellie'){
                onSuccess({name : 'ellie', role : 'admin'});
            } else {
                onError(new Error('no access'));
            }
        },1000);
    }
}

//★★★ 2. 실제 작동하는 부분에서는 내가 원하는 기능대로 되도록 class 선언시에 파라미터로 설정해두었던
//★★★    함수들의 기능을 여기서 구현한다.
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password,
    user => {    // loginUser의 onSuccess일때 실행되는 함수
        userStorage.getRoles(
            user,       //위에서 loginUser의 onSuccess에 들어갈 때 파라미터로 들어가는 id가 여기서는 user로 들어간다.
            userWithRole => {    //getRoles의 onSuccess일때 실행되는 함수
                alert(
                    `hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                );
            },
            error => {   //getRoles의 onError
                console.log(error);
            }
        );
    },
    error => {   //loginUser의 onError
        console.log(error);
    }
);

// 위의 콜백지옥을 작성하며 느낀 것이, JS에서는 function을 변수로서 사용할 수 있는데
// 함수2를 파라미터로 받는 함수1을 실제 호출할 때, 파라미터에 함수 자체를 새로 선언해서
// 사용하는 것읇 볼 수 있다. 이게 내가 알고있던 C와의 차이점인데 [파라미터로서의 함수]가
// 많이 어색하기에 많이 사용해보자. 익숙해진다면 이전부터 들어왔던 말대로 C보다 훨씬 알고리즘
// 구현하기가 쉬울것이라는 직감이 든다.

