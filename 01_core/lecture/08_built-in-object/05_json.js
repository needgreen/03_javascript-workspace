/**
 * 📌 JSON
 * 1. JavaScript Object Notation (자바스크립트 객체 표기법)
 * 2. JavaScript 객체 문법으로 구조화된 데이터를 표현하기 위한 문자 기반의 표준 포맷
 * 3. 사람과 시스템이 모두 쉽게 읽고 분석할 수 있는 형태를 가지고 있음
 *     → 웹 환경에서 서버와 클라이언트 간 데이터를 전송할 때 교환 형식으로 주로 사용
 * 4. JavaScript 객체와 일부 차이점을 가짐
 *     1) JSON은 반드시 속성을 큰 따옴표("")로 묶은 문자열로 표시
 *     2) JSON은 숫자가 0으로 시작하는 것을 허용하지 않음
 *     3) JSON은 반드시 소숫점 뒤에 적어도 한 자릿수가 뒤따라야 함
 *     4) JSON은 NaN과 Infinity를 지원하지 않음
 *     5) JSON은 trailing comma(후행 쉼표)를 허용하지 않음
 * 5. 예시 형식
 *    {
 *      "squadName": "Super hero squad",
 *      "homeTown": "Metro City",
 *      "formed": 2016,
 *      "secretBase": "Super tower",
 *      "active": true,
 *      "members": [
 *        {
 *          "name": "Molecule Man",
 *          "age": 29,
 *          "secretIdentity": "Dan Jukes",
 *          "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
 *        },
 *        {
 *          "name": "Madame Uppercut",
 *          "age": 39,
 *          "secretIdentity": "Jane Wilson",
 *          "powers": [
 *            "Million tonne punch",
 *            "Damage resistance",
 *            "Superhuman reflexes"
 *          ]
 *        },
 *        {
 *          "name": "Eternal Flame",
 *          "age": 1000000,
 *          "secretIdentity": "Unknown",
 *          "powers": [
 *            "Immortality",
 *            "Heat Immunity",
 *            "Inferno",
 *            "Teleportation",
 *            "Interdimensional travel"
 *          ]
 *        }
 *      ]
 *    }
 * 6. JSON 내장 객체 메소드
 *   1) JSON.stringify(value)
 *       → JavaScript 값이나 객체를 JSON 문자열로 변환
 *       → JavaScript 데이터를 서버로 데이터를 보낼 때 주로 활용
 *   2) JSON.parse(text)
 *       → JSON 문자열의 구문을 분석하고 그 결과에서 JavaScript 값이나 객체를 생성
 *       → 서버로부터 받은 JSON 문자열 데이터를 JavaScript 데이터로 바꿀 때 주로 활용
 */
 
const product = {
  name: 'mouse',
  brand: 'logitech',
  price: 89000,
  model: ['G301', 'MX Master'],
};

console.log(product);
console.log(JSON.stringify(product));  // JavaScript 객체 => JSON 문자열로 변환

const productStr = '{"name":"mouse","brand":"logitech","price":89000,"model":["G301","MX Master"]}'
console.log(JSON.parse(productStr));   // JSON 문자열 => JavaScript 객체로 변환




 /*
  실습. printObject() 함수 구현 
  1. 기능
     JSON 문자열을 전달 받아 JavaScript 객체로 변환 뒤 각 속성 정보를 출력해주는 함수 
  2. 인자
     JSON 문자열
  3. 반환
     없음
*/





