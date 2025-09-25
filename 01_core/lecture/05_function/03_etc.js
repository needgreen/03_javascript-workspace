/**
 * 📌 즉시 실행 함수 
 * 1. 함수 정의와 동시에 즉시 호출되는 함수로 단 한번만 실행되며 다시 호출 할 수 없음
 * 2. 정의한 함수를 ()-그룹연산자 로 감싼 후 ()을 붙여 실행 
 * 3. 익명 함수를 사용하는게 일반적임 
 * 4. 기명 함수도 가능하긴 하나 해당 이름으로 다시 재호출은 불가
 */
 
(function() {
  console.log('익명 함수 즉시 실행! 함수 정의와 동시에 호출됨');
})();

(function() {
  let name;
})();        
// 함수 내에 코드를 모아두면(블럭으로 감싸기) 
// 변수 충돌 또는 의도치 않는 값 변경을 최소화 시킬 수 있음



/**
 * 📌 중첩 함수 
 * 1. 함수 내부에서 정의된 함수를 중첩함수 또는 내부함수라고 함 
 * 2. 중첩함수를 포함하는 함수는 외부함수라고 함 
 * 3. 일반적으로 중첩함수는 자신을 포함하는 외부함수를 돕는 헬퍼함수의 역할을 함 
 * 4. 외부함수는 내부함수 변수를 사용할 수 없음
 *    단, 내부함수는 외부함수의 변수를 사용할 수 있음 
 */

function fnOuter(a) {              // 외부 함수 - a
    console.log('외부 함수', a);   // 외부 함수는 내부 함수를 사용할 수 없음
   
    fnInner(a + 1);

  function fnInner(b) {        // 내부 함수 - b
    console.log('내부 함수', a, b);
  }
}

fnOuter(10);




/**  ⭐⭐⭐⭐⭐ 매우 중요 ⭐⭐⭐⭐⭐
 * 📌 콜백 함수 
 * 1. 인자로 다른 함수에 전달되서 실행되는 함수 
 * 2. 콜백함수를 전달받은 함수는 고차함수 라고 함 
 * 3. 즉, 콜백함수는 고차함수에 전달되어 헬퍼함수의 역할을 함
 * 
 * a 함수를 전달받은 b 함수는 본문에서 전달받은 a 함수를 다시 호출해야되므로 callback이라 함 
 * a 함수 == 콜백함수
 * b 함수 == 고차함수 
 */

// 예시 1. 경우에 따라서 특정 값을 증가 또는 감소를 시켜줘야 됨

function increase(value) {   // 전달 값을 1 증가 시켜주는 함수
  return value + 1;
}
function decrease(value) {   // 전달 값을 1 감소 시켜주는 함수
  return value - 1;
}

// 변화 시킬 값을 전달받아서 상황에 따라 변화를 주도록 적용시켜주는 함수
function apply(value, func) {    // value = 값, func(변수명) = 실행시킬 함수;
  return func(value);
}

// 특정 값을 1 증가 시키고 싶음
console.log( apply(5, increase) );    // increase : 콜백함수 apply: 고차함수 
                                      // console.log( increase(5)); 동일한 의도의 코드

// 특정 값을 1 감소 시키고 싶음
console.log( apply(7, decrease) );   // console.log( decrease(7)); 동일한 의도의 코드

// 특정 값을 2배 증가 시키고 싶음  :: 즉시 작성하여 실행하고자 할 때 
console.log( apply(5, (a) => a * 2) );                     // 코드 축약 버전
console.log( apply(5, function(a) { return a * 2; }) );    // 코드 정석 버전 


// 예시 2. 로그인 처리 시 아이디/비번/이메일/토근 중 두 개를 체크 해야 된다고 가정
// 각 요소를 체크하는 함수

const idCheck = () => console.log('아이디 체크 로직');
const pwdCheck = () => console.log('비번 체크 로직');
const emailCheck = () => console.log('이메일 체크 로직');
const tokenCheck = () => console.log('토큰 체크 로직');

// 로그인 처리용 함수 정의 (매번 경우에 따라 체크해야 될 두 개의 함수 콜백함로 전달 받기)
const login = (check1, check2) => {
  console.log('로그인 공통 로직 우선 실행');
  // 검증을 위한 두 개의 함수 실행
  check1();
  check2();
};

login(idCheck, pwdCheck);
login(emailCheck, pwdCheck);
login(idCheck, tokenCheck);



