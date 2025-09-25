/** ⭐⭐⭐
 * 📌 프로토타입(Prototype) 
 * 1. 자바스크립트는 Prototype 기반의 객체지향 언어로 
 *    Prototype을 활용해서 객체지향프로그래밍에서의 상속을 구현할 수 있음 
 * 2. 자바스크립트 객체에는 [[Prototype]] 이라는 숨김 프로퍼티가 존재함.
 *     → 자신의 부모 역할을 하는 객체와 연결되어있음 
 *     → 프로토타입 객체의 속성과 메소드를 상속받아 사용할 수 있음 
 * 3. __proto__ 포인터를 통해 [[Prototype]]을 가져오거나 설정할 수 있음 (getter/setter) 
 */


const user = {
  activate: true, 
  login: function(userId) {
    console.log(`${userId}님 환영합니다.`);
  }
};

// 새로운 객체 생성 - user 객체를 상속받는 새로운 객체 만들기
const student = {
  passion: true,
  __proto__: user  // 부모 객체 직접 지정해서 연결
};

console.log(student);
//console.log(student.__proto__);



// __proto__ : setter, getter (권장하지 않음)
// const student2 = {
//   passion: true,
// };

// console.log(student2);
// student2.__proto__ = user;       // setter
// console.log(student2.__proto__); // getter


// Object.setPrototypeOf(), Object.getPrototypeOf() (최근 권장함) 
Object.setPrototypeOf(student, user);
console.log(Object.getPrototypeOf(student));

console.log(student.passion);
console.log(student.activate);
student.login('user01');

console.log('-----------------------');

// for in 문 상속 프로퍼티도 순회 대상에 포함됨
for(let prop in student) {
  console.log(prop, student.hasOwnProperty(prop));  
  // 이 객체에서 직접 구현된 프로퍼티인지 확인할 때 메소드 hasOwnProperty 사용
};

// * 생성자 함수 프로토타입 
//   생성자 함수를 통해서 생성된 객체 내에는 prototype 속성이 자동 부여되어 있음.
const car = {
  brand: 'KIA',
};

// 나만의 생성자 객체 (생성자 함수는 대문자로 시작)

function EV(model) {
  this.model = model;
}

/*
new EV('EV6');
new EV('EV9');
*/
// EV 생성자 함수로 생성되는 객체들마다 공통적으로 car 객체의 프로퍼티를 가지도록 설정
EV.prototype = car;

const ev9 = new EV('EV9');
console.log(ev9.model);
console.log(ev9.brand);




// 생성자 함수의 prototype 활용하여 메소드 설정
function Animal(name) {
  this.name = name;

  // 1. 생성자 함수 내에 직접 메소드 정의하는 방법
  // this.speak = function() {
  //   console.log(`${name}가 다가옵니다.`);
  // }
}

// const cat = new Animal('냐옹이');
// const dog = new Animal('멍멍이');
// cat.speak();
// dog.speak();



// 2. 생성자 함수의 prototype 활용하여 메소드 정의하는 방법
Animal,prototype.speak = function() {
  console.log(`${this.name}가 다가옵니다.`);
}
const cat = new Animal('냐옹이');
const dog = new Animal('멍멍이');
cat.speak();
dog.speak();


/*
 1. 메모리 효율성
    생성자 함수 내의 정의 : 인스턴스 마다 독립적인 메소드 복사본이 생성됨
                          => 인스턴스가 많아 질수록 메모리 사용량이 증가됨
    prototype에 정의 : 모든 인스턴스가 동일한 메소드를 공유함(싱글톤)

  2. 동적 업데이트 가능성
    생성자 함수 내의 정의 : 각 인스천스마다 메소드를 일일히 수정해야 됨.
    prototype에 정의 : prototye의 메소드만 수정하면 인스턴스에 즉각 반영됨.

*/



