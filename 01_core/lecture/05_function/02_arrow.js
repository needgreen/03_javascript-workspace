/**
 * 📌 화살표 함수 
 * 1. arrow function
 * 2. 람다 함수라고도 표현 
 * 3. ES6에 도입된 문법 
 * 4. function 키워드 대신에 화살표를 사용해 좀 더 간략한 방법으로 함수를 선언할 수 있음 
 *     → 가독성을 높이고 간단한게 표현 가능 
 *     → 본문이 한 줄인 함수 작성시 유용
 * 5. 익명함수만 화살표함수로 정의할 수 있음 
 * 6. 단, 화살표함수에서는 arguments를 지원하지 않음 
 * 7. 작성법 : () => { 실행내용 }
 *   1) (): 매개변수 작성란
 *   2) {}: 함수내의 코드 작성란 
 * 8. 특징
 *   1) 단일 매개변수일 경우 소괄호() 생략 가능
 *   2) 단일 실행문일 경우 중괄호{} 생략 가능
 *   3) 별도의 실행내용 없이 결과값만 존재할 경우 return 생략 가능 
 */


// 예시 1. 매개변수 없음, 실행문 1개인 경우
// 함수 표현식
const fnExp1 = function() {
  console.log('fnExp1');
};
fnExp1();

const fnArrow1 = () => console.log('fnArrow1');  // 단일 실행문은 {} 생략 가능
fnArrow1();



// 예시 2. 매개변수 1개 
const fnExp2 = function (a) {
  console.log('fnExp2');
  console.log(a);
};

const fnArrow2 = (a) => {                    // 매개변수 '(a)' 1개인 경우 () 생략 가능
  console.log('fnExp2');
  console.log(a);
};
fnArrow2(10);



// 예시 3. 매개변수 여러개
const fnExp3 = function (a, b) {            // 매개변수가 여러개인 경우 생략 안됨
  console.log('fnExp3');
  console.log(a,b);
  return a + b;
};
const fnArrow3 = (a, b) => {
  console.log('fnArrow3');
  console.log(a,b);
  return a + b;
};
console.log(fnArrow3(10, 20));


// 예시 4.  결과값만 바로 반환하는 함수
const fnExp4 = function(x, y) {
  return x + y;
}
const fnArrow4 = (x, y) => x + y;         // 바로 값을 반환하는 함수일 경우 {}, return 생략 가능
const result = fnArrow4(5, 7);
console.log(result);
//console.log(fnArrow4(7, 4));

