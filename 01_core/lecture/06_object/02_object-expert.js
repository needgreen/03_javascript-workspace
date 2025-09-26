/*
  * Object 생성자 함수 
  1) new 연산자와 함께 Object 생성자 함수를 호출하면 빈 객체를 생성하여 반환 
  2) 빈 객체 생성 이후 프로퍼티 또는 메소드를 추가하여 객체를 완성할 수 있음 
*/


const student = new Object(); 
console.log(student);

student.name = '김ㅋㅋ';
student.age = 24;
console.log(student);


/*
 * 📌 생성자 함수 
 * 1. new 키워드를 통해서 객체 생성을 진행시킬 수 있는 함수
 * 2. 함수명의 첫글자는 대문자로 작성
 * 3. 화살표함수로 작성 불가
 * 4. 프로퍼티를 함수내에 this.프로퍼티 로 정의
 * 5. 예시
 *    function 생성자함수(param1, param2, param3, ..) {
 *      this.prop1 = param1;
 *      this.prop2 = param2;
 *      this.prop3 = param3;
 *      ..
 *      this.methodProp = function() {
 *          메소드내용
 *      }
 *    }
 *    new 생성자함수(1, 2, 3);
 */


// 객체 리터럴 예시
/* 
const student1 = {
   name : '박좋아',
   age : 22,
   getInfo: function() {
     return `${this.name}은(는) ${this.age}세 입니다.`;
   }
 }
*/

// 객체를 리터럴로 많이 생성할 때 (반복 객체 생성 때)
function Student(name, age) {
  this.name = name;
  this.age = age;
  this.getInfo = function() {
    return `${this.name}은(는) ${this.age}세 입니다.`;
  };
}

const student1 = new Student('김ㅋㅋ', 17);
const student2 = new Student('박좋아', 19);
console.log(student1);
console.log(student2);



// 연습 코드 

function Car(brand, color) {
  // this = 새로 만들어질 객체
  this.brand = brand;  // 새 객체에 brand 속성 추가
  this.color = color;  // 새 객체에 color 속성 추가
  this.getInfo = function() {
	  return `브랜드는 ${this.brand}이고 컬러는 ${this.color}입니다.`;
  }; 
}

const myCar = new Car('Tesla', 'red');
console.log(myCar);
// 출력 Car { brand: 'Tesla', color: 'red', getInfo: [Function (anonymous)] }
console.log(myCar.getInfo());
// 출력 브랜드는 Tesla이고 컬러는 red입니다.
