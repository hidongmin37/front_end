let num = 0;

let answer;

if (num > 0) {
  answer = '양수';
} else {
  answer = '음수';
}
console.log(answer);
if (num === 0) {
  answer = '0';
} else if (num > 0) {
  answer = '음수';
} else {
  answer = '양수';
}

console.log(answer);

// switch (num) {
//   case 0:
//     answer = '0';
//   case num > 0:
//     answer = '2';
// }
// switch 문안에서는 값을 비교만 하는 거지 조건을 걸 수가 없음.

let month = 9;
// 가독성을 위하여 해당 변수가 무엇을 의미하는지 명확하게 적어야하며
// 근래에는 독일어 표기법으로 변수명이 길어지더라도 그 의미를 명확하게 지어 주어야함

// 카멜 표기법
// ex) mathScore
// 파스칼 표기법
// MathScore
// 헝가리안 표기법
// intMathScore
// 스네이크 표기법
// math_score
// 케밥 표기법
// html class = {math-score}

switch (month) {
  case 1: {
    console.log('jan');
  }
  case 2: {
    console.log('feb');
    break;
  }
  case 3: {
    console.log('mar');
    break;
  }
  default: {
    console.log('no');
  }
}
