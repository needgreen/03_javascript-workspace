 /**
  * 📌 Array
  * 1. 다수의 데이터를 순서대로 저장하고, 각 데이터에 인덱스를 통해 접근할 수 있는 
  *    선형 자료구조(Linear Data Structure)
  * 2. 다양한 타입의 데이터를 한 배열에 저장할 수 있으며, 크기가 동적으로 변함 
  * 3. 용어 
  *   1) 요소(element) : 배열에 저장된 각 데이터
  *   2) 인덱스(index) : 요소의 위치를 나타내는 숫자 (0부터 시작)
  *   3) 배열의 길이(length) : 배열에 포함된 요소의 개수
  * 4. 배열 생성 방식
  *   1) 배열 리터럴 
  *       → 변수 = [];
  *       → 변수 = [element, element, ..];
  *   2) Array 생성자 함수
  *       → 변수 = new Array([크기]);
  *       → 변수 = new Array(element, element, ..);
  *   3) Array.of 메소드
  *       → 변수 = Array.of(element, element, ..);
  * 5. 배열 요소 접근 방식
  *     → 배열[index]
  * 6. 각 요소들은 쉼표(comma)로 구분하며, 후행쉼표(trailing comma)를 사용할 수 있음
  */
  
 const arr1 = ['바나나', '복숭아'];       // [] 표시는 배열 방식의 메소드
 console.log(arr1);

 const arr2 = new Array();
 console.log(arr2);

 const arr3 = new Array(10);             // 숫자 데이터 사용 시 크기로 인식
 console.log(arr3);

 const arr4 = new Array(1, 2, 3, 'a');  // 여러개 사용 시 데이터 기록
 console.log(arr4);

 const arr5 = Array.of(1, 2, 'hello', 'hi');
 console.log(arr5);
 console.log(arr5.length);              // 요소의 갯수가 궁금하다면 .length 메소드 사용
 console.log(arr5[2]);                  // 인덱스의 요소를 확인하려면 [] 사용함, 0부터 시작이므로 2번은 hello
 console.log(arr5[10]);                 // 오류가 나지는 않지만 10번에는 프로퍼티가 정의되어 있지 않으므로(요소 없음) undefined 출력


  /*
    * 배열과 for문 
    1) for in 문
        → 배열의 인덱스를 순차적으로 가져옴
        → 형식
            for(인덱스 in 배열) {          // 각 요소의 위치 번호, 0부터 시작
              본문
            }
    2) for of 문
        → 배열의 요소를 순차적으로 가져옴
        → 형식
            for(요소 of 배열) {            // 데이터, 배열 안의 실제 값
              본문
            }
  */

const fruits = ['apple', 'banana', 'kiwi'];

for(let i=0; i<fruits.length; i++) {    // for 문법 사용 코드
  console.log(i, fruits[i]);
}

for(let idx in fruits) {                 // for in 문법 사용 시 간결
  // 변수 = 0 => 변수 = 1 => 변수 =2
  console.log(idx, fruits[idx]);
}


const cities = ['seoul', 'roma', 'newyork', 'sidney', 'tokyo'];
for(let city of cities) {                  // 변수 = 'seoul' => 변수 = 'roma' ...
  console.log(city);
}

console.log('-----------------------------');


  /*
    * 배열에서의 구조 분해 할당 
    1) 배열의 요소를 해체하여 그 값을 개별 변수에 담을 수 있게 함
    2) 사용 예시
        → 배열의 각 요소를 순서대로 변수에 할당 
          const [a, b, c] = [1, 2, 3];
          // a = 1, b = 2, c = 3
        → 일부 요소만 할당하거나, 필요 없는 값은 쉼표로 건너뜀
          let [a, , c] = [1, 2, 3]            ➡️ 요소의 갯수 만큼 ,로 표시
          // a = 1, c = 3
        → ...rest 문법(나머지 문법)을 이용해 필요한 변수만 할당 가능
          let [a, ...rest] = [1, 2, 3]
          // a = 1, rest = [2, 3]
  */


const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

console.log('-----------------');

const [fruit4, , fruit5] = fruits;
console.log(fruit4);
console.log(fruit5);
          
console.log('-----------------');

const [city1, ...cityRest] = cities;
console.log(city1);
console.log(cityRest);




