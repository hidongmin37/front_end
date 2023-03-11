console.log(a); //undefined

var a = 5;

console.log(a); //5

let b = 5;
console.log(b);
b = 6;
console.log(b);

const c = 7;
c = 8; // 상수에 변수 할당되어있으니까 바꾸지마

/*
문자열 내에서 변수를 사용하는 방법
*/

console.log('a의 값은' + a + '입니다');
console.log('a의 값은', a, '입니다');
console.log(`a의 값은 ${a}입니다`);
