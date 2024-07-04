/**
 * Date Types
 *
 * 여섯개의 Primitive Type과
 * 한개의 오브젝트 타입이 있다.
 *
 * * Primitive Type
 *   Number (숫자)
 *   String (문자열)
 *   Boolean (불리언)
 *   undefined(언디파인드)
 *   null (널)
 *   Symbol (심볼)
 *
 * * Object (객체)
 *   Function
 *   Array
 *   Object
 */

const age = 28;
const tempature = -10;
const pi = 3.14;

console.log('🚀 ~ age:', typeof age);
console.log('🚀 ~ tempature:', typeof tempature);
console.log('🚀 ~ pi:', typeof pi);

console.log('----------------------------------');
const infinity = Infinity;
const nInfinity = -Infinity;

console.log('🚀 ~ infinity:', typeof infinity);
console.log('🚀 ~ nInfinity:', typeof nInfinity);

console.log('----------------------------------');

//String 타입

const codeDyopa = '됴파';
console.log('🚀 ~ codeDyopa:', typeof codeDyopa);

const ive = "'장원영' 안유진";
console.log('🚀 ~ ive:', ive);

/**Template Literal
 *
 * Escaping Character
 * !)newline -> \n
 * 2)tap -> \t
 * 3)백슬래시를 스트링으로 표현하고 싶으면 두번 입력해!
 *
 */

const iveYuJin = '아이브\n안유진';
console.log('🚀 ~ iveYuJin:', iveYuJin);
const iveWonYoung = '아이브\t장원영';
console.log('🚀 ~ iveWonYoung:', iveWonYoung);
const backSlash = '아이브\\됴파';
console.log('🚀 ~ backSlash:', backSlash);
const smallQutoation = "아이브'됴파";
console.log('🚀 ~ smallQutoation:', smallQutoation);

const iveWonYoung2 = `아이브
장원영`;
console.log('🚀 ~ iveWonYoung2:', iveWonYoung2);

console.log('🚀 ~ iveWonYoung2:', typeof iveWonYoung2);

const groupName = '아이브';
console.log(`${groupName} : 안유진`);
// console.log(groupName + '안유진') 이랑 같은거야 근데 Template Literal 쓰면 조아

/**
 * Boolean 타입
 */

const isTrue = true;
const isFalse = false;
console.log('🚀 ~ isTrue:', typeof isTrue);
console.log('🚀 ~ isFalse:', typeof isFalse);

/**
 * undefined
 * 사용자가 직접 값을 초기화하지 않았을때 지정되는 값
 *
 * 직접 undefined로 값을 초기화 하는건 지양해야해
 */

let noInit;
console.log('🚀 ~ noInit:', typeof noInit);

/**
 * null
 *
 * undefined와 마찬가지로 값이 없다는 뜻이지만
 * JS 에서는 개발자가 명시적으로 없는 값으로 초기화할때 사용함
 */

let init = null;
console.log('🚀 ~ init:', typeof init);

/**
 * Symbol
 *
 * 유일무이한 값을 생성할때 사용함
 * 다른 프리미티브 값들과 다르게 Symbol 함수를 호출해서 사용한다
 */

const test1 = '1';
const test2 = '1';

console.log(test1 == test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 == symbol2);
console.log(symbol1 === symbol2);

/**
 * Object
 *
 * Map
 * 키:벨류의 쌍으로 이루어져있다.
 * key : value
 */

const dictionary = {
  red: '빨간색',
  orange: '주황색',
  yellow: '노란색',
};
console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(dictionary['yellow']);

console.log(typeof dictionary);

/**
 * Array
 *
 * 값을 리스트로 나열할수있는 타입
 */

const iveMembersArray = ['안유진', '가을', '레이', '이서', '장원영', '리즈'];
console.log('🚀 ~ iveMembersArray:', typeof iveMembersArray);

/**index
 *
 * 0부터 시작한다
 * 1씩 올라간다
 */

console.log(iveMembersArray[0]);
console.log(iveMembersArray[5]);

iveMembersArray[0] = '됴파';
console.log('🚀 ~ iveMembersArray:', iveMembersArray);
console.log(typeof iveMembersArray);

/**
 * static typing -> 변수를 선언할때 어떤 타입의 변수를 선언할지 명시한다 (ex : C언어)
 *
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 '추론'한다
 * (ex : JS -> dynamic typing )
 */
