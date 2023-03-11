let a = 5;
let b = 2;

console.log(a + b); //7

let c = a + b;

console.log(c); //7

console.log(a - b); //3
console.log(a * b); //10
console.log(a / b); //2.5
console.log(a % b); //1

let d = true;
// javascript(true=1,false=0)
console.log(a + d); //6
console.log(a + null); //5

console.log(a + undefined); // NaN(not a numbers)

let aw = '안녕';
let b2 = '하세요';

console.log(aw + b2);

console.log((aw += b2));
console.log(++a);
console.log(++a);
console.log(a++); //연산 후에 값을 더하기 때문에 기존 7을직어주고 연산다음부터는 8로 할당이 된다.
console.log(a);
console.log(aw++);

function a(number) {
  if (typeof number !== 'number') return;
}
