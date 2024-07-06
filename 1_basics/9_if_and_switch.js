/**If and Swich */

let number = 5;

if (number % 2 === 0) {
  console.log(`${number}는 짝수입니다`);
} else {
  console.log(`${number}는 홀수입니다`);
}

if (number % 2 === 0) {
  console.log('2의 배수입니다');
} else if (number % 3 === 0) {
  console.log('3의 배수입니다');
} else if (number % 4 === 0) {
  console.log('4의 배수입니다');
} else if (number % 5 === 0) {
  console.log('5의 배수입니다');
} else {
  console.log('2,3,4,5의 배수가 아닙니다');
}

const englishDay = 'monday';

let koreanDay;

switch (englishDay) {
  case 'monday':
    koreanDay = '월요일';
    break;
  case 'tuesday':
    koreanDay = '화요일';
    break;
  case 'wednesday':
    koreanDay = '수요일';
    break;
  case 'thursday':
    koreanDay = '목요일';
    break;
  case 'friday':
    koreanDay = '금요일';
    break;
  default:
    koreanDay = '주말';
    break;
}
console.log(koreanDay);

console.log('---------추가 공부----------');

let number1 = 0;

while (number1 < 5) {
  console.log(number1);
  number1++;
}

console.log('----------');
let count = 0;

do {
  console.log(count);
  count++;
} while (count < 5);

/** 
비동기 작업 완료 확인에 while문 쓸수있을듯
function waitForCompletion(task) {
  while (!task.isCompleted()) {
    //작업완료까지 대기
  }
  console.log('작업이 완료되었습니다.');
}

사용자에게 유효한 입력을 받을때가지 반복적으로 요청하는데에 do...while 쓸수있을듯
let userInput;
do {
  userInput = prompt('유효한 숫자를 입력하세요');
} while (isNaN(userInput));

console.log('입력한 숫자:', userInput);
*/

console.log('------------------');

for (let i = 0; i < 10; i = i + 1) {
  console.log(`메롱 ${i} 출력할게`);
}

const fruits = ['apple', 'banana', 'cherry'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

const arr = ['apple', 'banana', 'cherry'];

for (let a of arr) {
  console.log(a);
}

const u = { name: 'jung', age: 28, city: 'Seoul' };
for (let prop in u) {
  console.log(prop);
}

for (let prop1 of Object.values(u)) {
  console.log(prop1);
}

const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log('합계:', sum);

function getLen(s) {
  return (s ?? '').toString().length;
}

function addPoints(a, b) {
  const len = Math.max(getLen(a), getLen(b));
  const ret = (a + b).toFixed(len - 2);
  console.log('🚀 ~ addPoints ~ ret:', ret);

  return +ret;
}
console.log(addPoints(0.21354, 0.1) === 0.31354);
console.log(addPoints(0.14, 0.28) === 0.42);
console.log(addPoints(0.34, 0.226) === 0.566);
