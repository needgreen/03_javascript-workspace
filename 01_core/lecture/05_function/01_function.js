/**
 * 📌 함수 
 * 1. 함수는 특정 작업을 수행하는 코드의 집합(블럭)
 * 2. 인자를 받아서 특정 작업을 실행하고 결과를 반환 할 수 있음 
 * 
 *               인자(input)
 *                    ↓
 *         ┌──────┘       └──────────┐
 *         │      함수(function)     │
 *         └────────────┐       ┌────┘
 *                           ↓
 *                      결과(output)
 *       
 * 3. 자신만의 실행 범위 (scope)를 가짐 
 * 4. 코드 재사용성을 높이고 프로그램을 구조화하여 유지보수에 용이함
 * 5. 함수 정의와 작동 방식
 *   1) 인자값을 받을 수 있는 매개변수와 실행 코드를 중괄호 블럭에 작성하여 정의한다.
 *   2) 함수는 호출(call)되어야만 내부 코드가 실행된다. 
 *   3) 함수는 실행 중 return문으로 결과값을 반환할 수 있다. 
 *      (반환값이 없을 경우 기본적으로 undefined가 반환된다.)
 * 6. 함수의 장점 
 *   1) 코드 중복 방지 : 반복되는 코드를 함수로 정의하여 여러번 호출 가능 
 *   2) 코드 구조화    : 기능별 함수를 분리하여 가독성 향상 
 *   3) 유지보수 용이  : 각 함수별로 수정 가능  
*/




/* 
  * 함수 정의 방법
    1. 함수 선언식
    2. 함수 표현식
    3. 화살표 함수
*/




/**
 * 📌 함수 선언식 (function declaration)
 * 1. 함수 이름을 결정해서 함수를 정의하는 방식 (기명함수)
 * 2. 단, 동일한 이름의 함수 정의시 마지막에 정의한 함수만 존재함 
 * 3. 작성법
 *     function 함수명([매개변수]){
 *       실행구문
 *       [return 결과;]
 *     }
 * 4. 호출법
 *     함수명([인자값]);
 * 
 * ‼️ 참고사항 
 * - 함수 선언식은 "호이스팅" 특성을 가지고 있음 
 *    → 함수 선언문 이전에 함수를 참조할 수 있고 호출할 수 있음 
 */
 
// 전달되는 이름값과 함께 "안녕하세요" 룰력
hello('박좋아');
function hello(name) {
  console.log(`${name}님 환영합니다.`);
}

function hello(name) {
  console.log(`${name}님 잘가요.`);
}

hello('홍길동');  //  let name = '홍길동';  
                  //  console.log(`${name}님 환영합니다.`); 와 같은 작성법
hello('김ㅋㅋ');
hello();




/**
 * 📌 함수 표현식 (function expression)
 * 1. 함수를 변수에 저장하는 방식 
 * 2. 주로 익명함수를 변수에 저장하는 용도로 사용 (기명함수도 대입 가능하긴 함)
 * 3. 작성법
 *     const 변수명 = function([매개변수]) {
 *       실행구문
 *       [return 결과;]
 *     };
 * 4. 호출법
 *     변수명([인자값]);
 * 
 *‼️ 참고사항 
 * 자바스크립트에서는 함수는 일급객체(first-class object)로 취급됨 
 *  → 함수를 다른 일반적인 값들처럼 변수에 저장할 수 있고, 
 *    매개변수로 전달할 수 있고, 반환값으로 사용할 수도 있음 
 *  → 즉, 함수가 단순히 호출되는 기능을 넘어 하나의 "값"으로 다뤄질 수 있음을 의미 
 * 
 * * 일급객체의 특징 
 * 1) 무명의 리터럴로 생성할 수 있다. 
 * 2) 변수나 자료구조(객체, 배열 등)에 저장할 수 있다. 
 * 3) 함수의 매개변수에 전달할 수 있다. 
 * 4) 함수의 반환값으로 사용할 수 있다. 
 */
 
 // 함수 객체를 변수에 대입하면 '변수명이 함수의 식별자로 저장'됨. 
 // 그러므로 함수명을 입력하지 않아도 됨.
const hi = function (name) {
  console.log(`${name}님 안녕하세요!`);
};
hi('김ㅋㅋ');


const hi2 = function (name) {
  console.log(`${name}님 안녕하세요!`);
};
console.log(hi2, typeof(hi2));



/**
 * 📌 매개변수와 인자(전달값)
 * 1. 함수 호출시 전달되는 인자값(argument)을 받아주기 위한 변수 
 * 2. 매개변수 선언시 선언 키워드(var, let, const)는 사용하지 않음
 * 3. 나머지(rest) 매개변수 또는 arguments 배열을 이용해 0개 이상의 인자를 처리할 수 있음
 * 4. 인자가 전달되지 않는 경우에 사용할 디폴트값을 지정할 수 있음 
 */
 
function parameterTest(param) {
  console.log(param);
}

parameterTest('hello');
parameterTest(10);
parameterTest('a','b','c'); // 더 많은 인자값 전달 시 초과되는 값은 무시됨
parameterTest();            // 더 적은 인자값 전달 시 매개변수에는 초기화되지 않음(undefined) 



/*
  * arguments
  1) 함수 내에서 암묵적으로 하나씩 존재하는 객체 
  2) 인자값이 해당 객체의 프로퍼티로 보관됨 
*/

function argumentsTest() {
  console.log(arguments);
}
argumentsTest();
argumentsTest('sv','dd','ef');


// 함수 표현식
const argumentsTest2 = function() {
  console.log(arguments);
}
argumentsTest2();
argumentsTest2('sv','dd','ef');




/*
  * 나머지 매개변수 (rest parameter)
  1) 함수의 매개변수 목록 끝에 작성하며, 여러 인자값들을 하나의 배열로 묶어줌 
  2) 함수 내부에서는 배열로 다뤄짐  
  3) ES6 이후 도입된 문법 
  4) 작성법
      function 함수명([매개변수], ...rest매개변수){
        실행구문
        [return 결과;]
      }
*/

//rest문법 (... 변수명)으로 표시
function restTest(...good) {
  console.log(good);
  console.log(typeof(good));         // 객체의 타입 확인
  console.log(Array.isArray(good));  // 메소드의 객체를 정확히 확인

  for(let i=0; i<good.length; i++) {   // 문자열의 갯수, 길이를 동적으로 확인하려고 할 떄 .length 를 활용 
    console.log(good[i]);             // 배열의 특정 인덱스를 확인할 때 
  }
}
restTest ();
restTest ('df','d','g');            // 0번 인덱스, 1번 인덱스, 2번 인덱스




/*
  * 기본 매개변수 (default parameter) 
  1) 매개변수에 기본값을 설정할 수 있음 
  2) 함수 호출시 인자값이 전달되지 않을 경우 또는 undefined가 전달될 경우 기본값이 대입되도록 설정 
  3) ES6 이후 도입된 문법 
  4) 작성법
      function 함수명([매개변수] = 기본값){
        실행구문
        [return 결과;]
      }
*/

function defaultTest (x, y) {
  console.log(`x: ${x}, ${y}`);
}
defaultTest(10, 20);
defaultTest(100);     // x 값 호출, y 값이 없을 땐 undefined


function defaultTest2 (x = 1, y = 2) {
  console.log(`x: ${x}, ${y}`);
}
defaultTest2(10, 20);
defaultTest2(100);   // x 값 호출, y 값이 없을 땐 최초 대입값 표시 2



/**
 * 📌 반환 (return)
 * 1. 함수 실행 후 특정값을 반환할때 return 구문과 함께 값 작성 
 * 2. return 값; 을 통해 호출한 곳으로 값이 반환되며 함수 종료
 * 3. return; 을 통해 함수 강제 종료 가능
 */

// 두 수를 전달받아 덧셈연산 후 결과를 반환하는 함수
function sum (a, b) {
  console.log('덧셈연산 실행 중..');
  return a + b
}
// console.log(sum(10, 20));
const result = sum(10, 20);
console.log(result);


function printMessage(name) {
  if(!name) {
  // name이 존재하지 않을 경우('', null, undefined) 함수 강제 종료
  // if(name === null || name === '' || name === undefined) 을 if(!name) 으로 쓸 수 있음.
  return;  // 강제 종료
  }
  console.log(`${name}님 환영합니다.`);
}
printMessage('김ㅋㅋ');
printMessage('');




