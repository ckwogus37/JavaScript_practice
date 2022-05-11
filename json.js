//1. Object to JSON
//stringfy(obj)

// json = JSON.stringify(['apple','banana']);
// console.log(json);

// const rabbit = {
//     name : 'tori',
//     color: 'white',
//     size : null,
//     birthDate : new Date(),
//     jump : function(){
//         console.log(`${name} can jump!`);
//     }
// }

// json = JSON.stringify(rabbit);
// console.log(json);

// 설명 : object to JSON의 경우, object 내부의 method나 JS에만 있는 
// 특수한 키워드 값은 JSON으로 변환되지 않고 무시된다.

//----------------------------------------------------

// json = JSON.stringify(rabbit,['name','color','size']);
// console.log(json);

// json = JSON.stringify(rabbit, (key, value) =>{
//     return key === 'name' ? 'elie' : value;
// })
// console.log(json)

// 설명 : 이렇게 obj to JSON을 해주는 과정에서 obj의 내용들을 더 세밀하게 다루고 싶다면
// stringfy의 파라미터에 [key1, key2, key3]을 사용하여 원하는 것들만 json.stringfy하거나
// 또는 콜백함수를 통해 조건문을 사용하여 JSON으로의 변환을 조정할 수 있다.

//2. JSON to Object