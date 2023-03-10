# For Front end Project

#### 참고사이트

https://developer.mozilla.org/ko/docs/Web/HTML/Element/a

## 2023.01~2023.06)

## 웹부터 dbms까지

#### 일정

- 1월 HTML+ CSS
- 2월 CSS + JS
- 3월 JS
- 4월 REACT
- 5월 REACT + NODE(DBMS,LOGIN,게시물)
- 6월 REACT + TYPESCRIPT + TESTCODE(TDD)

#### 전반적인 수업 내용

- UI,UX
  →UI(USER INTERFACE) - 사용자가 보는 화면
  ex) 입력창, 이미지, 폰트, 색상,글, 그림, 버튼…
  →UX(USER EXPERIENCE) - 사용자 경험, 사용자가 어플리케이션을 이용함으로서 느낄 수 있는 만족감
  ex) 회원가입을 하는 동안 사용자가 그 과정에서 느끼는 불편함이 없는가
  즉, UI,UX를 고려한다는 것은 사용자가 보고 있는 화면이 어플리케이션을 이용하였을 때 불편함이나 제약 사항이 없는지 고려하여 만든다는 것

---

브라우저(URL입력)→ DNS → 프론트엔드 서버에 요청(보여주기 위한 리소스들을 보여주는 것들을 브라우저에 전달) →값들을 입력 후에 전달/프론트엔드(백엔드에게 전달) →백엔드에서 db로 넘어감(db를 관리하는 시스템을 dbms라함)→ 프론트엔드의 주역할은 백엔드에게 데이터 CRUD하게끔 함.→ DB에서 가져와서 다시 프론트엔드로 보여주게끔 함

1.프론트 엔드

사용자가 보는 화면 및 행위에 관한 코드를 작성하고, 사용자의 행위에 따라 백엔드에게 CRUD에 관한 request

1. 백엔드

   사용자가 요청한 데이터를 가지고 DB(데이터저장소 )에서 사용자가 요청한 값에 맞게 데이터를 처리하고 결과값 전송

2. 프론트엔드

   전달받은 결과(데이터)를 사용자가 볼 수 있도록 가공

3. 백엔드

   서비스를 운영하고 트래픽을 관리-병목현상처리, 회선중계(devops) + (Finops)

\*\* 구글 검색창을 열고 검색하면 일어나는 일

---

- 프론트 엔드 개발자
  데이터를 통신하여 사용자의 행위에 따라 데이터를 처리 , 프론트엔드 서버 관리(렌더링 최적화- 화면 그려주는 속도 최적화)
- 퍼블리셔
  html,css 및 js DOM api를 활용하여 사용자가 보는 UI,UX를 고려하여 레이아웃을 개발
- 생산성
  모든 항목을 입력해야 통과할 수 있는 코드는
  재사용이 가능하도록 모듈화, 확장성, SOLID 원칙
  리눅스 마스터 2급 , 정처기, sql

---

- request,response
  웹페이지 —- > 프론트 서버
  ***
  요청, request
  ←———————————————————————————————————리소스
  \*HTTP( Hyper Text Ransfer Protocol)
  ex) https:/ www.naver.com
  인터넷 상에서 서버끼리 데이터를 주고 받을 수 있도록 사용하는 규칙의 일종으로 앞에 s(sequerity)의 여부 보안적 요소가 추가되었는가의 차이
  url 주소에 http를 붙이면 나는 이 규약을 사용하여 request와 response를 주고 받겠다.
  따라서 http를 활용한 req,res를 http request message,http response message라고 한다.
