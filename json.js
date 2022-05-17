//1. Object to JSON
//stringfy(obj)

// json = JSON.stringify(['apple','banana']);
// console.log(json);

const rabbit = {
    name : 'tori',
    color: 'white',
    size : null,
    birthDate : new Date(),
    jump : ()=>{
        console.log(`${name} can jump!`);
    }
}

// json = JSON.stringify(rabbit);
// console.log(json);

// 설명 : Serialization직렬화(object to JSON)의 경우, 
// object 내부의 method나 JS에만 있는 특수한 키워드 값(Date 값)은 
// JSON으로 변환되지 않습니다.
// 위에서 birthDate의 경우 JSON으로 변환되면서 string 으로 변환됩니다.(단순 문자열)

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
// 콜백함수를 사용하는 경우에, 전달되는 rabbit obj의 정보중에 제일 첫번째는
// rabbit을 감싸고 있는 제일 최상위의 것이 전달됩니다. 
// => 최초의 obj인 "Object"에 대한 정보!

//2. JSON to Object
// parse(JSON)

json = JSON.stringify(rabbit);
//const obj = JSON.parse(json);

//console.log(obj);
rabbit.jump();
//obj.jump()
console.log(rabbit.birthDate.getDate());
//console.log(obj.birthDate.getDate());

// 설명 : 위에서 언급했던 것 처럼, obj to JSON의 경우에 object만의
// method나 키워드값들은 JSON으로 전환이 안되기에, 
// JSON.parse()를 통해서 다시 obj로 변환하여도 기존의 jump method나, 단순 문자열로
// 변환된 birthDate의 Date 부속함수들은 obj에서 사용할 수 없다.

//하지만 method들은 몰라도 obj안의 특수한 obj의 경우 다시 사용할 수 있다!
// 단, JSON형식안에 남아있어야 한다. jump() method의 경우 아예 무시되었지만
// birthDate와 같은 obj는 string으로 남아있다. 
// 이때는 parse의 기능을 더욱 활용하여 더 세밀하게 json to obj를 할 수 있다.

const obj = JSON.parse(json, (key, value)=> {
    return key === 'birthDate'? new Date(value) : value;
});

// 위에 있는 rabbit.birthDate.getDate()의 경우 작동됬지만
// obj에 있는 Date함수는 작동하지 않았다.
// 하지만 parse의 revier을 사용하여 콜백함수를 만들어 주었기에 Date 변수가
// obj에 온전히 들어올 수 있게되었고, Date 함수들이 정상적으로 작동한다.

console.log(obj.birthDate.getDate());
