/**
 * 📌 단축 평가
 * 1. Short-Circuit Evaluation
 * 2. 표현식을 평가하는 도중 평가 결과가 확정 된 경우 나머지 평가 과정을 생략하는 것
 *     → 논리 연산자의 평가 결과가 확정 된 경우 나머지 평가 과정이 생략됨 
 * 3. 종류
 *   1) 논리 AND (&&)
 *       → 왼쪽 피연산자가 falsy 값일 경우 왼쪽 피연산자를 바로 반환 (오른쪽은 평가하지 않음)
 *       → 왼쪽 피연산자가 truthy 값일 경우 오른쪽 피연산자를 평가해서 반환 
 *   2) 논리 OR (||)
 *       → 왼쪽 피연산자가 truthy 값일 경우 왼쪽 피연산자를 바로 반환 (오른쪽은 평가하지 않음)
 *       → 왼쪽 피연산자가 falsy 값일 경우 오른쪽 피연산자를 평가해서 반환 
 */

// && - 좌측 항목이 falsy 값일 경우 
console.log(false && 'banana');    // false
console.log(0 && 'banana');        // 0  (0은 falsy값과 같음)
console.log('' && 'banana');       // 빈문자열 (빈문자열 '' 은 falsy값과 같음)

// && - 좌측 항목이 truthy 값일 경우 
console.log(true && 'banana');
console.log(13 && 'banana');
console.log('apple' && 'banana');


// || - 좌측 항목이 truthy 값일 경우
console.log(true || 'banana');
console.log(13 || 'banana');
console.log('apple' || 'banana');

// || - 좌측 항목이 falsy 값일 경우
console.log(false || 'banana');    
console.log(0 || 'banana');      
console.log('' || 'banana');     


// 적용 사례1 - 조건문을 간결하게 표현할 때 사용
// 로딩중 상태일 경우 "로딩중..." 출력

let isLoading = true ;

// if(isLoading) {
//   // 조건문 
//   console.log('로딩중...');
// }
isLoading && console.log('로딩중...'); // 조건문(if) 대신 활용 가능, 좌항 결과가 true일 경우 뒤쪽 구문 실행 
                                       // 좌항 결과가 false일 경우 뒤쪽 구문 실행 안됨


// 사용자 입력값이 존재할 경우 해당 값 출력
let input = '안녕';
// if(input) {
//   console.log(input);
// }                                       
input && console.log(`사용자 입력값 : ${input}`);

// 적용 사례2 - 기본값 설정
// 변수 = 입력값 || default값;
// 입력값이 존재하지 않을 경우(좌측 항목 '') 시스템 상의 기본값('입력안됨) 대입
let value = '' || '입력안됨';
console.log(value);

let age = 0 || 20;
console.log(age);



// 2. 옵셔널 체이닝 연산자 (?. 또는 ?[])

// 사용자가 입력한 문자열의 길이(문자열.length) 출력   *문자열:프로퍼티(properties)
// 'apple' => 5
// ''      => 0
// null, undefined => undefined

let str = null;
console.log(str.length); // length 프로퍼티에 바로 접근 - null일 경우 오류 발생

let str2 = '';
console.log(str2 && str2.length); // 단축평가 (&&) 사용 : 빈문자열은 falsy 값으로 확인되어 출력 안됨

let str3 = null;
console.log(str3?.length); // 옵셔널 체이닝 연산자 사용하면 모두 노출됨





