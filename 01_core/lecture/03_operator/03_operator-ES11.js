/**
 * 📌 ES11에 추가된 연산자
 * 1. null 병합 연산자 (??)
 *   1) nullish coalescing operator
 *   2) 좌항의 피연산자가 null 또는 undefined일 때만 오른쪽 피연산자를 평가하여 반환 
 *   3) 기존에 좌항이 falsy 값일 경우 오른쪽 피연산자를 평가했던 || 와 달리 
 *      0, '', false 값은 유효한 값으로 처리함 
 * 2. 옵셔널 체이닝 연산자 (?. 또는 ?[])
 *   1) optional chaining operator
 *   2) 좌항의 피연산자가 null 또는 undefined일 경우 undefined를 반환, 
 *      그렇지 않으면 우항의 프로퍼티 참조를 이어감 
 *   3) null 병합 연산자와 동일하게 0, '', false 값은 유효한 값으로 처리함
 *   4) 주로 객체의 프로퍼티 참조할때 사용 
 */


// 1. null 병합 연산자 (??)
//   입력된 점수값이 존재하지 않을 경우(falsy=0) 50점으로 대입

const grade2 = 0 || 50 ;    // 50
console.log(grade2);

const grade = 0 ?? 50 ;     // 0  : ?? 사용 시 0 데이터를 유의미한 값으로 판별
console.log(grade);



// 사용자 입력값(선택사항) 기록
const input = '' || 'Hello';    // Hello
console.log(input);

const input2 = 0 ?? 'Hello';   // 빈문자열
console.log(input2);

const input3 = null || 'Hello';  // 우항의 값이 노출 되는 경우는 null 또는 undefined
console.log(input3);

