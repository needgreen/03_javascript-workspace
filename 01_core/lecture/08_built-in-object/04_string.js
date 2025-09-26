/**
 * 📌 String
 * 1. 문자열을 표현하고 다루는 내장 객체 (Primitive Wrapper Object)
 * 2. 문자열 타입의 데이터를 다루는 데 사용
 * 3. 주요 생성자
 *   1) String() 생성자
 *       → new String('abc') === 'abc'
 * 4. 주요 프로퍼티 및 메소드
 *   1) String.length
 *       → 문자열의 길이 반환
 *   2) String.prototype.at(index)
 *       → index 위치의 UTF-16 String 반환(마이너스 index 가능)
 *   3) String.prototype.charAt(index)
 *       → index 위치의 유니코드 단일 문자 반환
 *   4) String.prototype.concat(string2, string3[, ..., stringN])
 *       → 전달된 모든 문자열을 호출 문자열에 붙인 새로운 문자열 반환 (+ 또는 += 연산자의 성능이 concat() 보다 더 우수하다.)
 *   5) String.prototype.indexOf(searchValue[, fromIndex])
 *       → 전달된 searchValue(문자열)와 일치하는 첫 번째 index 반환, 없으면 -1 반환
 *       → 옵션 fromIndex : 문자열에서 찾기 시작하는 위치 index, 기본값은 0
 *   6) String.prototype.lastIndexOf(searchValue[, fromIndex])
 *       → 전달된 문자열과 일치하는 마지막 index 반환, 없으면 -1 반환
 *       → 옵션 fromIndex : 탐색의 시작점으로 사용할 index, 기본값은 +Infinity, fromIndex >= str.length 인 경우 모든 문자열을 탐색
 *   7) String.prototype.startsWith(searchString[, position])
 *       → 전달된 searchString으로 시작하면 true 아니면 false 반환
 *       → 옵션 position : searchString이 발견될 것으로 예상되는 시작 위치 index, 기본값은 0
 *   8) String.prototype.endsWith(searchString[, length])
 *       → 전달된 searchString으로 끝나면 true 아니면 false 반환
 *       → 옵션 length : 찾고자 하는 문자열의 길이, 기본값은 문자열의 전체 길이
 *   9) String.prototype.match(regexp)
 *       → 전달된 정규식과 일치하는 요소들을 Array로 반환, 일치하지 않으면 null 반환
 *  10) String.prototype.search(regexp)
 *       → 전달된 정규식과 일치하는 첫 번째 항목의 인덱스를 반환, 일치하지 않으면 -1 반환
 *  11) String.prototype.padStart|End(targetLength [, padString])
 *       → 현재 문자열의 시작|끝을 padString으로 채워 주어진 targetLength를 만족하는 새로운 문자열 반환
 *       → 옵션 padString : 현재 문자열에 채워넣을 다른 문자열, 기본값은 " "(유니코드 U+0020)
 *  12) String.prototype.replace(pattern, replacement)
 *       → 전달된 pattern(문자열 또는 정규식)과 일치하는 항목 일부 또는 전체가 replacement로 대치된 새로운 문자열 반환
 *       → pattern이 문자열이라면 첫 번째 일치 항목만 replacement로 대치
 *  13) String.prototype.replaceAll(pattern, replacement)
 *       → 전달된 pattern(문자열 또는 정규식)과 일치하는 항목 전체가 replacement로 대치된 새로운 문자열 반환
 *       → pattern이 정규식이라면 전역(g) 플래그가 설정되어 있어야 함
 *  14) String.prototype.slice(indexStart[, indexEnd])
 *       → indexStart를 포함해서 문자열 끝까지 반환
 *       → 옵션 indexEnd : 생략하면 문자열의 끝까지 반환
 *       설명)
 *       → indexStart < 0 인 경우 max(indexStart + str.length, 0)의 결과값이 사용됨
 *       → indexStart가 생략되거나, 정의되지 않거나, 숫자로 변환할 수 없는 경우 0으로 처리함
 *       → indexEnd < 0 인 경우 max(indexEnd + str.length, 0)의 결과값이 사용됨
 *       → indexEnd가 생략되거나, 정의되지 않거나, 숫자로 변환할 수 없는 경우 또는 indexEnd >= str.length 이면 끝까지 추출함
 *       → indexStart >= indexEnd 인 경우 빈 문자열을 반환
 *  15) String.prototype.substring(indexStart[, indexEnd])
 *       → indexStart를 포함하고 indexEnd를 제외한 문자열을 반환
 *       → 옵션 indexEnd : 생략하면 문자열의 끝까지 반환
 *       설명)
 *       → indexStart와 indexEnd는 0보다 작거나 NaN인 경우 0으로 처리
 *       → indexStart와 indexEnd는 str.length 보다 큰 경우 str.length 값으로 처리
 *       → indexStart >= indexEnd 인 경우 마치 두 개의 인자를 바꾼 듯 동작함
 *  16) String.prototype.split([separator[, limit]])
 *       → 전달된 구분자를 이용해 여러 개의 문자열로 나눈 값을 저장한 배열(Array)을 반환
 *       → 옵션 separator : 문자열 또는 정규식 가능, 빈 문자열("")을 지정하는 경우 각각의 문자가 배열의 요소 하나로 변환됨
 *       → 옵션 limit : 끊어진 문자열의 최대 개수, 배열의 요소가 limit개가 되면 split을 멈춤
 *  17) String.prototype.toLower|UpperCase()
 *       → 호출 문자열을 소문자|대문자로 변환한 새로운 문자열을 반환
 *  18) String.prototype.trim()
 *       → 호출 문자열의 시작과 끝에서 공백이 제거된 새로운 문자열을 반환
 *       → 한쪽 끝의 공백만 제거하려면 trimStart() 나 trimEnd() 를 사용
 */


const str = 'JavaScript';

console.log(`첫 글자: ${str.at(0)}`);
console.log(`첫 글자: ${str.charAt(0)}`);
console.log(`마지막 글자: ${str.at(-1)}`);
console.log(`마지막 글자: ${str.charAt(str.length - 1)}`);

console.log(`a의 위치: ${str.indexOf('a')}`);
console.log(`a의 위치: ${str.lastIndexOf('a')}`);

console.log(`Java로 시작하는지: ${str.startsWith('Java')}`);
console.log(`Script로 끝나는지: ${str.endsWith('Script')}`);

console.log(str.padStart(15, '*')); 
console.log(str.padEnd(15, '*'));

console.log(str.replace('a', 'A'));
console.log(str.replaceAll('a', 'A'));

console.log(str.slice(4));
console.log(str.slice(0, 4));

console.log(str.substring(4));
console.log(str.substring(0, 4));

const months = 'Jan,Feb,Mar,Apr,May';
const monthArr = months.split(',');
monthArr.forEach((el, idx) => console.log(`인덱스: ${idx}, 요소: ${el}`));

console.log(months.toLowerCase());
console.log(months.toUpperCase());

const str2 = '  Java Script  ';
console.log(str2.trim(), str2.trim().length);
console.log(str2.trimStart(), str2.trimStart().length);
console.log(str2.trimEnd(), str2.trimEnd().length);

/*
  실습. yesCheck() 함수 구현하기 
  1. 기능 
     인자가 'yes' | 'Yes' | 'y' | 'Y', '   yes', 'y es' 등 yes를 의미하는 값이면 true를 반환하는 함수
  2. 인자
     문자열 1개
  3. 반환
     true 또는 false
*/

// 문자열 확인
// 공백 제거
// 소문자 변환
// 변환 값 yes, y 이면 true

function yesCheck(str) {
  if (typeof str !== 'string') 
    return false;
  let clear = str.replace(/\s+/g, '');
  clear = clear.toLowerCase();
  return clear === 'yes' || clear === 'y';
}

console.log(yesCheck('y es'));
console.log(yesCheck('N'));




/*
  실습. addCarMaker() 함수 구현하기
  1. 기능
     인자로 전달된 배열의 각 요소 car 객체의 model 프로퍼티값이 
     K로 시작하면 maker: 'Kia', G로 시작하면 maker: 'Genesis' 를 
     배열의 각 요소 car 객체에 추가한 후 해당 객체 정보 출력
  2. 인자
     car 객체가 저장된 배열
  3. 반환
     없음

  ex) 
  // 여러 car객체{} 들이 담겨있는 배열 
  const cars = [    
    { model: 'K3',  },
    { model: 'K5',  },
    { model: 'K8',  },
    { model: 'K9',  },
    { model: 'GV70',  },
    { model: 'G80',  },
    { model: 'GV80',  },
  ];
  addCarMaker(cars);
*/

function addCarMaker(cars) {
  // 1. 객체 배열 확인
  // 2. 배열의 요소 순회
  // 3. 해당 객체의 model 프로퍼티 값 k , g 시작 비교
  // 4. k = maker: 'KIA'  g = maker: 'Genesis' 추가
  cars.map( (car) => {
    if(car.model.startsWith('K')) {
      car.maker = 'KIA';
    }else if(car.model.startsWith('G')) {
      car.maker = 'Genesis';
    }
    return car;
  }).forEach((car) => console.log(car));
}

const cars = [    
    { model: 'K3',  },
    { model: 'K5',  },
    { model: 'K8',  },
    { model: 'K9',  },
    { model: 'GV70',  },
    { model: 'G80',  },
    { model: 'GV80',  },
  ];
addCarMaker(cars);




