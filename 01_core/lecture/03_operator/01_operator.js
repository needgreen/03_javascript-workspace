/**
 * 📌 연산자
 * 1. 산술 연산자
 *   1) 이항 연산자 
 *   2) 종류
 *       → 덧셈(+), 뺄셈(-), 곱셈(*), 나눗셈(/), 나머지(%)
 *       → 제곱(**) => ES7에서 추가된 연산자
 * 2. 증감 연산자
 *   1) 단항 연산자
 *   2) 변수 값을 1씩 증가/감소
 *   3) 종류
 *       → 증가(++), 감소(--)
 * 3. 대입(할당) 연산자 
 *   1) 오른쪽 값을 왼쪽 변수에 할당
 *   2) 종류
 *       → 대입(=)
 *       → 복합 대입(+=, -=, *=, **=, /=, %=)
 * 4. 비교 연산자
 *   1) 이항 연산자 
 *   2) 두 피연산자를 비교하여 참/거짓을 반환
 *   3) 종류
 *       → 대소 비교(>, <, >=, <=)
 *       → 동등 비교(==, !=)   
 *       → 일치 비교(===, !==) 
 * 5. 논리 연산자
 *   1) 이항 연산자 
 *   2) 두 논리값의 피연산자를 연산하여 참/거짓을 반환
 *   3) 종류
 *       → 논리 AND(&&), 논리 OR(||), 논리 NOT(!)
 * 6. 조건 연산자
 *   1) 삼항 연산자
 *   2) 조건식의 참/거짓 여부에 따라 반환값을 결정
 *   3) 작성법
 *       → [조건식] ? [true일 때 반환값] : [false일 때 반환값]
 * 7. 문자열 연결 연산자
 *   1) 문자열과 문자열을 연결하여 새로운 문자열을 반환
 *   2) 종류
 *       → 문자열 연결(+)
 *       → 문자열 연결 할당(+=)
 * 
 * 
 * ‼️ 연산자 우선순위 (높은 순으로 나열)
 * 1) 괄호, 대괄호, 마침표(멤버 접근, 함수호출) 
 * 2) 단항 연산자 : new, ++, --, !, +, -, typeof, delete 등
 * 3) 산술 연산자 : **   >   *, /, %   >   +, -
 * 4) 비교 연산자 : <, <=, >, >=, instanceof, in   >   ==, ===, !=, !==
 * 5) 논리 연산자 : &&   >   ||
 * 6) 조건(삼항) 연산자
 * 7) 대입 연산자 : =, +=, -=, *=, /=, %=, **=
 */



// 1. 산술 연산자
console.log(10 + 20);
console.log(10 - 20);
console.log(10 * 20);
console.log(10 / 20);
console.log(10 % 20);
console.log(2 ** 3);


// 2. 증감 연산자
let num = 10;
console.log(num);  // 10   
num++;             // num = num + 1;
console.log(num);  // 11

console.log(num++); //  선 출력 후 증감 연산 수행 12
console.log(num);   // 12

console.log(++num); // 선 증감 후 출력 수행 13


// 3. 대입 연산자
let num2 = 10;         // 일반 대입 연산자
// num2 = num2 + 20;   // 20 증가 값 구문
num2 += 20;            // 복합 대입 연산자 구문

console.log(num2);

num2 -= 10;
console.log(num2);

num2 *= 2;
console.log(num2);

// 4. 비교 연산자
// 1) 대소 비교 
console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 5);
console.log(10 <= 5);


// 2) 동등 비교 (값만 가지고 비교) 
//    동등 비교 연산자는 피연산자의 타입을 일치(자동형 변환)시킨 다음 비교
//    타입이 맞지 않아도 실질적 값만 가지고 비교
console.log(1 == 1);
console.log(1 == '1');
console.log(1 == true);
console.log(0 == true);
console.log(1 != '1');  // 같지 않은지 비교할 때 != 사용


// 3) 일치 비교 (타입+값 모두를 비교)
console.log(1 === 1);
console.log(1 === '1');
console.log(1 === true);

// null , undefined
console.log(null == undefined);    // true
console.log(null === undefined);   // false

// NaN : 자기 자신과 일치하지 않는 유일한 값
console.log(NaN == NaN);
console.log(NaN === NaN);

// Number.isNaN 를 사용해서 비교 : 특정 데이터가 NaN인지 확인해야 할 때 
console.log(Number.isNaN(NaN));    // true 

// 문자열간의 대소 비교 : 유니코드 순으로 비교
console.log('apple' < 'banana');   // true  - 아스키코드 기준 


// 5. 논리 연산자 : AND(&&), OR(||), NOT(!)
// 1) AND(&&) : 논리값 && 논리값  
//   두 개의 논리값 모두 참(true)일 때 최종 참(true)을 반환 
//   둘 중 하나라도 거짓(false)일 경우 최종 거짓(false)로 반환
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false

// num 변수가 1이상"이면서"(&&) 10이하인지 확인하는 방법 (문서 위쪽 num 최종값으로 연산)
console.log(num >= 1 && num <= 10);  // false

// 2) OR (||) : shift + \ 누르면 || 
//    논리값 || 논리값 : 두 개의 논리값 중에 하나라도 참(true)이라면 최종 참으로 변환
//    둘 다 거짓(false)이여야 최종 거짓으로 반환
console.log(true || true);      // true
console.log(true || false);     // true
console.log(false || true);     // true

console.log(num >= 1 || num <= 10);  // true

// num 변수가 3의 배수이거나 4의 배수 인지 확인
console.log(num % 3 === 0 || num % 4 === 0);   // false


// 3) NOT (!) : !논리값 
// 참일 경우 거짓을 반환, 거짓일 경우 참을 반환
// 반대되는 조건의 경우
console.log(!true);
console.log(!false);

// num 변수가 NaN이 아니고 10이상인지 확인
console.log(!Number.isNaN(num) && num >= 10);


// 6. 삼항 연산자 - [조건식] ? [true일 때 반환값] : [false일 때 반환값]
console.log(num > 0 ? "양수" : "양수가 아니다");
console.log(num % 2 === 0 ? "짝수" : "홀수");

let isLoading = true;                            // 정의
console.log(isLoading ? "로딩중.." : "로딩완료");  // 연산 확인


// 7. 문자열 연결 연산자
let str = 'Hello' + 'World';
str += '!!';
console.log(str);

