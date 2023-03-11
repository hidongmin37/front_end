let score = function (name, korean, math, english, etc) {
  if ((korean + math + english + etc) / 4 >= 90) {
    console.log(name + '님의 이번학기 성적인 a학점 입니다.');
  } else if ((korean + math + english + etc) / 4 >= 80) {
    console.log(name + '님의 이번학기 성적인 b학점 입니다.');
  } else if ((korean + math + english + etc) / 4 >= 70) {
    console.log(name + '님의 이번학기 성적인 c학점 입니다.');
  } else {
    console.log(name + '님의 이번학기 성적인 F학점 입니다.');
  }
};
