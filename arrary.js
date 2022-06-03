// Q1 
//join은 배열의 데이터들을 모두 string으로 바꾸어 출력한다.
//join()안의 구분자 값을 넣어 각 데이터들을 구분자를 경계삼아 string으로 이어붙인다.
// const fruits = ['apple','banana','orange'];
// console.log(fruits.join('^'));

// // Q2
// //split은 string을 구분자로 쪼개고, 각각을 배열에 저장한다.
// const fruits2 = '🍎, 🥝, 🍌, 🍒';
// const result = fruits2.split(',');
// console.log(result);

// Q3
// const array = [5,4,3,2,1];
// console.log(array.reverse());

// Q4
// const array = [1,2,3,4,5];
// const result = array.slice(2, 5);
// console.log(result);

class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];

// Q5
//find는 callbackfun를 만족하는 데이터들을
//return합니다.
// const result = students.find(
//     function(student){
//         return student.score == 90;
//     }
// )
// console.log(result);

// //Q6
//filter는 array의 데이터값이 true일 경우에
//그 데이터를 반환합니다.
// const result = students.filter(
//     function(student){
//        return student.enrolled;
//     }
// );

// console.log(result);

// Q7
//function의 파라미터로 array의 데이터값을 줄 때, 파라미터가 의미하는것이
//무엇인지 이해하기 쉽게 파라미터 이름을 짓는게 좋다!
//map은 array의 데이터중에서 자신이 원하는 특정 값만을 따로 배열로 모을 수 있다.
// const result = students.map(
//     function(student){
//         return student.score;
//     }
// )

// console.log(result);

//Q8
//특정 조건으로 array의 모든 데이터들을 확인할 때 사용 가능한 메소드로
//some과 every가 있다.(true와 false를 반환한다.)
//array의 데이터 중에 특정 조건을
//하나라도 만족시키는 데이터가 존재하는지 찾는거면 some
//모두 만족해야 하는 거면 every를 사용하면 된다.
// const result = students.some(
//     function(student){
//         return student.score < 50;
//     }
// )
// console.log(result);


//Q9
//reduce는 array의 데이터들을 누적하여 반환합니다.
// zero-based indexing에 의해 첫번째 데이터부터 마지막 데이터까지 더해나갑니다.
//function()뒤에 붙어있는 0은 초기 prev값을 설정할 수 있습니다.
//초기 prev를 0으로 설정했다면 첫 curr은 0번 인덱스의 데이터입니다.
//초기 prev값을 설정하지 않는다면 
//prev는 0번 인덱스 데이터, curr은 1번 인덱스 데이터로 설정됩니다.
//curr으느 배열의 데이터들을 순차적으로 인덱스를 1씩 증가하며 array 전체를 돌고, 
//prev값에 return값이 반환됩니다.
//reduceRight는 마지막 인덱스부터 1씩 감소시키며 array 전체를 돕니다.
// const result = students.reduce(
//     function(prev, curr){
//         return prev + curr.score;
//     }, 0
// );

// console.log(result/students.length);

//Q10
//함수형 프로그래밍
//아래 코드처럼 map뒤에 filter를 바로 쓰고, 그 뒤에 join을 써줄 수 있다.
//이렇게 써주면 array에 대해 다수의 작업들을 한번에 해줄 수 있고,
//어떤 작업들이 실행되는지도 한번에 할 수 있어서 좋다.
// const result = students.map((student) => {
//         return student.score;
//     }).join();

// console.log(result);

//Bonus Quiz
//sort는 파라미터로 a와 b를 받는데 이건 array의 두 데이터를 의미한다.
//그리고 a, b는 a가 앞에 b가 뒤에 오도록 정렬한다는 것을 의미한다.
//뺄셈으로 이루어진 return값을 이용하여 결과값이 음수값이 나오면 
//앞에 값이 더 작다는 것을 의미하고, 이걸 이용해서 파라미터로 정해놓은 정렬순서로 
//array의 모든 데이터들을 정렬한다.

//만약 파라미터가 (a,b)이고 return이 b-a 라면, b가 a보다 작은 경우이고 
//정렬 순서는 그대로 a가 앞에 b가 뒤에 이니까 이때는 내림차순으로 정렬한다.
// const result = students
//   .map((student) => {
//     return student.score;
// }).sort((a,b) => {
//     return a-b;
// }). join();

// line 123 ~ 128 에서 dot을 연속적으로 사용하고 있는데, 
// 이것은 .map에서 return으로 student의 score을 반환하였기에 
// return된 값을 가지고 바로 .sort를 해주고, 또 student.score를
// 반환하기에 .join을 쓸 수 있다.


// console.log(result);