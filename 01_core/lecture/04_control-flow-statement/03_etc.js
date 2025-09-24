
/**
 * 📌 기타 제어문 
 * 1. 반복문 내에 사용되며, 반복문의 흐름을 제어하는 역할 
 * 2. 주요 종류 및 작성법 
 *   1) break문 
 *      → 현재 속한 반복문을 종료하는 역할 
 *         break;
 *   2) continue문 
 *      → 현재 속한 반복문의 나머지 코드를 실행하지 않고 조건 검사로 이동하는 역할 
 *         continue;
 *   3) label문 (비추천)
 *      → 반복문에 라벨을 붙여서 해당 라벨이 붙은 반복문을 제어하는 역할 
 *      → break문과 continue문을 통해 특정 라벨이 붙은 반복문을 제어할 수 있음 
 *         label: 반복문;
 */



// 1. break 문
// 반복문 수행 시마다 난수(랜덤값, 1~100) 발생시켜 출력
// 단, 발생된 랜덤값이 5이 배수일 경우 반복 종료

// Math.random()                       : 0.0 <= 난수 < 1.0
// Math.random() * 100                 : 0.0 <= 난수 < 100.0
// Math.random() * 100 + 1             : 1.0 <= 난수 < 101.0  - 1씩 
// Math.floor(Math.random() * 100 +1)   : 1  <= 난수 < 101


while(true) { 
  // (true) -> 무한 반복
  //난수 발생 시켜 출력
  let random = Math.floor(Math.random() * 100 +1);
    console.log(random);
  if(random % 5 === 0) {
    break;
  }  
}


// 2. continue 문
// 1부터 100까지의 총 합계 구하기

let sum = 0;
//sum += 1;
//sum += 2;

for(let i=1; i<=100; i++) {
  if(i % 6 === 0) { // 6의 배수가 아닌 수들은 포함되지 않음 
   continue;
   }
  sum += i; // 6의 배수가 아닌 수들은 sum에 계속 더해짐
}
console.log("합계:",sum); // 6의 배수를 제외한 나머지 합
