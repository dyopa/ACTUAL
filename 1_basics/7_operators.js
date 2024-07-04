/**
 * Operator
 */

/**
 * 산술 연산자
 *
 * 1)덧셈
 * 2)뺄셈
 * 3)곱셈
 * 4)나눗셈
 * 5)나머지
 */

console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log(10 % 3);

console.log('-------------');

console.log(10 * (10 + 10));

/**
 * 증가와 감소
 */

let number = 1;

number++;
console.log(number);

number--;
console.log(number);

/**
 * 연산자의 위치
 */

let result = 1;
console.log('🚀 ~ result:', result);

result = number++;
console.log(result, number);

result = number--;
console.log(result, number);

// 이렇게 ++,-- 앞에 쓰면 선임님께 혼나...뒤에써라..
result = ++number;
console.log(result, number);

result = --number;
console.log(result, number);

/**
 * 숫자 타입이 아닌 타입에 +,- 사용하면 어떻게 돼?
 */

let sample = '99';
console.log('🚀 ~ sample:', +sample);
console.log('🚀 ~ sample:', typeof +sample);
console.log('🚀 ~ sample:', typeof sample);

semple = true;
console.log('🚀 ~ semple:', +semple);
console.log('🚀 ~ semple:', typeof +semple);

sample = false;
console.log('🚀 ~ sample:', +sample);
console.log('🚀 ~ sample:', typeof +sample);

sample = '안유진';
console.log('🚀 ~ sample:', +sample);

sample = '99';
console.log('🚀 ~ sample:', -sample);
console.log('🚀 ~ sample:', typeof -sample);

/**할당 연산자(assignment operator)
 *
 */

number = 100;
console.log('🚀 ~ number:', number);

number += 10;
console.log('🚀 ~ numbeer:', number);

number -= 10;
console.log('🚀 ~ numbeer:', number);

number *= 10;
console.log('🚀 ~ numbeer:', number);

number /= 10;
console.log('🚀 ~ numbeer:', number);

number %= 10;
console.log('🚀 ~ numbeer:', number);

/**
 * 비교연산자 (개발의 꽃)
 *
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */

console.log(5 == 5);
console.log(5 == '5');
console.log(0 == '');
console.log(true == 1);
console.log(false == 0);
console.log(true == '1');

console.log('-------------');
console.log(5 === 5);
console.log(5 === '5');
console.log(0 === '');
console.log(true === 1);
console.log(false === 0);
console.log(true === '1');

console.log('-------------');

console.log(5 != 5);
console.log(5 != '5');
console.log(0 != '');
console.log(true != 1);
console.log(false != 0);
console.log(true != '1');

console.log('-------------');

console.log(5 !== 5);
console.log(5 !== '5');
console.log(0 !== '');
console.log(true !== 1);
console.log(false !== 0);
console.log(true !== '1');

//즉 === 와 !== 를 많이 활용함
console.log('-------------');

/**
 * 대소 관계 비교 연산자
 */

console.log(100 > 1);
console.log(100 < 1);
console.log(100 <= 1);
console.log(100 >= 1);

/**
 * 삼항 조건 연산자(ternary operator)
 */

console.log(10 > 0 ? '야호' : '떙');

console.log('-------------');

/**
 * 논리연산자
 *
 * 1) &&
 * 2) ||
 */

//&& 조건은 모두 true 여야 true를 반환한다
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log('-------------');

//||하나만 true 여도 true 반환
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log('-------------');

console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);
console.log(10 < 1 && 20 < 2);

console.log('-------------');

console.log(10 > 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);
console.log(10 < 1 || 20 < 2);

/**
 * 단축평가 (short circuit evaluation)
 *
 * &&를 사용했을때 좌측이 true면 우측값 반환
 * &&를 사용했을때 좌측이 false면 좌측값 반환
 * ||를 사용했을때 좌측이 true면 좌측값 반환
 * ||를 사용했을때 좌측이 false면 우측값 반환
 */
console.log('-------------');

console.log(true || '아이브');
console.log(false || '아이브');
console.log(false && '아이브');
console.log(true && '아이브');

console.log(true && true && '아이브');
console.log(true && false && '아이브');
console.log('-------------');

/**
 * 지수 연산자
 */

console.log(2 ** 2);
console.log(10 ** 3);
console.log('-------------');

/**
 * null 연산자
 */

//??는 좌측값이 null이거나 undefiend일때 우측값을 반환함
// 즉 name 이 undefiend니까 요파를 반환한거야

let name;
console.log(name);

name = name ?? '됴파';
console.log(name);

name = name ?? '아이브';
console.log(name);

let name2;
name2 ??= '됴파';
console.log(name2);
