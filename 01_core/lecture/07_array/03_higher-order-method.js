/*
  * Array 고차 함수 (콜백함수를 인자로 전달받는 함수) 

  1. Array.prototype.sort([callbackFn(element1, element2)])
     → callbackFn에 의해 배열 내의 요소들을 정렬시켜 반환 
     → callbackFn 생략시 기본 오름차순으로 정렬 (문자열 요소일 경우 사전등재순으로 정렬)
     → callbackFn
       1) 반환값 : number (양수 반환시 비교되는 두 요소의 순서가 변경됨)
       2) 매개변수 
          (1) element1 : compare할 비교 요소1
          (2) element2 : compare할 비교 요소2
       즉, 오름차순 정렬시키고자 할 경우 => element1가 더 클 경우 양수 반환하도록 
           내림차순 정렬시키고자 할 경우 => element2가 더 클 경우 양수 반환하도록       

  2. Array.prototype.forEach(callbackFn(element[, index[, array]])[, thisArg])
     → 각 배열 요소에 대해 제공한 callbackFn 함수를 한 번씩 실행함
     → callbackFn
       1) 반환값 : 없음(undefined)
       2) 매개변수
         (1) element : 배열에서 처리 중인 현재 요소
         (2) index   : 배열에서 처리 중인 현재 요소의 인덱스
         (3) array   : forEach() 메소드를 호출한 배열
     → thisArg(Optional) : callbackFn을 실행할 때 this로 사용되는 값

  3. Array.prototype.map(callbackFn(currentValue[, index[, array]])[, thisArg])
     → 제공된 callbackFn 함수에 의해 반환된 요소들을 모은 새로운 배열을 반환함
     → callbackFn
       1) 반환값 : 배열의 각 요소를 callbackFn 내부에서 처리한 값
       2) 매개변수
         (1) currentValue : 처리할 현재 요소
         (2) index        : 처리할 현재 요소의 인덱스
         (3) array        : map() 메소드를 호출한 배열
     → thisArg(Optional) : callbackFn을 실행할 때 this로 사용되는 값

  4. Array.prototype.filter(callbackFn(element[, index[, array]])[, thisArg])
     → 제공된 callbackFn 함수에 의해 구현된 테스트를 통과한 요소들만 모은 새로운 배열을 반환함
     → callbackFn
       1) 반환값 : true 또는 false
       2) 매개변수
         (1) element : 배열에서 처리 중인 현재 요소
         (2) index   : 배열에서 처리 중인 현재 요소의 인덱스
         (3) array   : filter() 메소드를 호출한 배열
     → thisArg(Optional) : callbackFn을 실행할 때 this로 사용되는 값
*/

const numbers = [30, 21, 101, 14, 1, 284, 50, 7];
console.log(numbers);

numbers.sort();           
// sort는 숫자 크기대로 정렬되지 않음, 
// 숫자를 문자열로 변경 후 아스키코드 순서로 오름차순 정렬함
console.log(numbers);

// 숫자의 크기대로 오름차순 정렬 => 앞의 숫자가 더 크면 => 순서 변경해야 함 == 양수 반환
numbers.sort( (a, b) => a > b ? 1 : -1 );
    // 두 개의 값 전달 받아 앞의 값이 더 크면 양수를 반환 연산 
// 위의 연산 코드를 풀어서 보면 아래와 같음
// numbers.sort( (a, b) => {
//   return a > b ? 1 : -1;
//   }
// );
console.log(numbers);

numbers.sort( (a, b) => a - b );    // 숫자의 크기대로 오름차순 정렬
console.log(numbers);

numbers.sort( (a, b) => b - a );    // 내림차순 정렬
console.log(numbers);


console.log('------------------------');

const lectures = ['HTML', 'CSS', 'JavaScript', 'React'];

// for 문 작성 시 
for(let idx in lectures) {
  console.log(idx);
  console.log(lectures[idx]);
}

// forEach 메소드
lectures.forEach( (item, idx, arr) => {
  //console.log("실행됨")
  console.log(`접근한 요소의 인덱스 ${idx}`); 
  console.log(`접근한 요소 ${item}`); 
  console.log(`배열 ${arr}`); 
});


console.log('------------------------');


const datas = [true, 1, 'text'];

// map 메소드 사용
const types = datas.map( (item) => typeof item );
// const types = ['boolean', 'number', 'string'];

// forEach 메소드 사용 
// const types = [];
// datas.forEach( (item) => types.push(typeof item) );


const months = [ 1, 2, 3, 4, 5, 6, 7];   // ["1월", "2월"...] 
// const newMonths =  months.map( (item) => item + "월" )
// console.log(newMonths);

months 
  .map( (item) => item + "월" )
  .forEach( (item) => console.log(item) );

console.log(months);


// 홀수 데이터만 취득
console.log(numbers.filter( (item) => item % 2 == 1 ));


// 종합 실습
const nums = [12, 5, 90, 45, 1, 18, 2, 19];
// 짝수인 데이터들만 *2한 결과를 내림차순 정렬해서 출력

nums
  .filter( (item) => item % 2 === 0 )
  .map( (item) => item * 2 )
  .sort( (a, b) => b - a )
  .forEach( (item) => console.log(item) );


// 연습 예시
const students = [
  {id: 1, name: '홍길동', age: 20},
  {id: 2, name: '한나라', age: 19},
  {id: 3, name: '장의리', age: 22},
  {id: 4, name: '박좋아', age: 24},
  {id: 5, name: '김ㅋㅋ', age: 22},
];

const result = students
  .map( (student) => `<li id="student${student.id}">이름: ${student.name}, 나이: ${student.age}</li>` )
  .join("");

console.log(result);
