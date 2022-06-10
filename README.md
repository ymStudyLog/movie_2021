:eyes: _*Go back to github profile to check the other repositories*_ :eyes:
[![profile-badge](https://img.shields.io/badge/Github-Profile-blue?style=flat&logo=Git&logoColor=F05032)](https://github.com/ymStudyLog)

# 프로젝트 개요

### - 사용한 기술

> front : React.js, redux, react-router-dom <br />
> back : Node.js(Koa framework), mongoose, MongoDB <br />
> deploy : AWS EC2(ubuntu v18.04) <br />

### - 목차

- [프로젝트 제목](#프로젝트-제목)
- [프로젝트 목적](#프로젝트-목적)
- [프로젝트 목표](#프로젝트-목표)
- [프로젝트 실적](#프로젝트-실적)
- [프로젝트 평가](#프로젝트-평가)
- [향후 계획](#향후-계획)
- [특이 사항 및 참고 자료](#특이-사항-및-참고-자료)

## 프로젝트 제목

Node.js & MongoDB를 사용한 백엔드를 클론 코딩하여, 회원가입 및 로그인 기능을 도입한 실시간 평점순 영화 데이터 웹 서비스.

## 프로젝트 목적

기존에 연습용으로 만든 React 클론 코딩 프로젝트인 '영화 평점 웹서비스'에 역시 클론 코딩한 백엔드를 연결하여 풀스택 프로젝트를 제작해보고 스스로 만든 기능을 추가해보기.

## 프로젝트 목표

1. 기존에 아무 인증없이 보여주던 영화 정보를 :point_right: 로그인 성공시 볼 수 있도록 영화 데이터를 디스플레이하는 기능을 따로 빼서 MoviePage 컴포넌트로 만든다.
2. MoviePage에서 사용자 개인 페이지로 가는 링크를 만든다. :point_right: UserPage 컴포넌트를 만들어 라우트 연결한다.
3. 비밀번호 변경(modify)과 회원 탈퇴(withdrawal) 기능을 추가해본다. :point_right: 백엔드 프로젝트에 해당 기능에 대한 api를 추가, 각 api에 대한 미들웨어 함수도 auth.ctrl.js에 작성한다. :point_right: 해당 작업에 대한 요청을 처리하는 기능을 프론트의 모듈에 추가한다.
4. 다 만들어진 정상 작동하는 풀스택 프로젝트를 AWS EC2 서비스를 통해 배포한다.

## 프로젝트 실적

[목표 1.](#프로젝트-목표)

- MoviePage
  - useEffect hook을 사용하여 localStorage의 로그인 정보를 확인하고 없으면 LoginPage로 유도한다.
  - 로그인 정보가 확인되면 body 섹션에 MovieForm을 렌더링한다.
- MovieForm 
  - loading 상태는 만들어둔 loading 리덕스 모듈을 활용한다. 영화 데이터는 useState() hook을 사용하여 movies 상태에 저장한다. :point_right: 이 두 값은 Arrowswiper 컴포넌트에 props로 전달한다. 
  - movies 상태를 저장하는 getMovies()함수는 MovieForm 컴포넌트가 렌더링되면 실행하도록 useEffect() hook을 사용한다. 
  - getMovies()에서는 영화 데이터를 axios로 가져오고, 필요한 영화 데이터만(id, title, year, summary, medium_cover_image, genres) 갈무리한다. 날 것의 영화 데이터는 2차원 배열이기 때문에 for/of 문을 사용하여 각각의 배열 요소에 대해 새로운 Object 객체를 만들어 push()로 모은다.
 
 [목표 2.](#프로젝트-목표)
 
- MoviePage 
  - localStorage의 로그인 정보가 확인되면 유저의 아이디를 로그아웃 버튼 옆에 보여준다. 
  - react-router-dom의 withRouter를 사용하여 MoviePage 컴포넌트에서 history 값을 사용하게 한다. 유저 아이디를 클릭하면 UserPage로 이동한다.
  
 [목표 3.](#프로젝트-목표)
 
- UserPage
  - localStorage 로그인 정보가 없으면 LoginPage로 유도한다.
  - 로그인 정보가 있으면 UserForm 컴포넌트를 렌더링한다.
- UserForm
  - login/register 템플릿을 가져다 약간 변형해서 사용한다.
  - 비밀번호 변경 modify : 변경할 password를 payload에 담아 dispatch한다.
  - 회원 탈퇴 withdrawal : 탈퇴 버튼 클릭 이벤트시 유저에게 한번 더 탈퇴 확인을 받고(Window.confirm())true값이 반환 될 경우 dispatch한다.
- modules/auth
  - modify() 모듈을 작성한다. redux-saga로 서버에 /api/auth/modify를 요청하는 비동기 작업을 처리하고, 초기값으로 switchAuth와 switchError를 새로 추가한다. modify 성공과 실패시 각각 switchAuth와 switchError에 데이터를 저장하게 리듀서도 추가한다. _처음에는 modify 성공시 기존의 auth에 데이터를 저장하게 구현했으나 auth는 이미 로그인/회원가입 정보를 저장하고 있어서 구분이 되지 않아 switchAuth로 변경했다._
  - 폼 초기화 액션 dispatch시 switchAuth와 switchError값도 초기화하게 리듀서를 수정한다.
- modules/user
  - withdrawal() 모듈 작성. 마찬가지로 redux-saga로 /api/auth/withdrawal를 처리하고, logout() 액션과 마찬가지로 localStorage를 제거해준다. withdrawal 액션 dispatch시 user에 저장된 유저 정보를 제거하게 리듀서도 추가한다.
- backend
  - auth.ctrl.js : modify()와 withdrawal() 미들웨어를 만든다. modify()는 기존 미들웨어에서 사용한 메서드들로 구현하였고, withdrawal()는 mongoose의 Model.prototype.deleteOne()을 사용해서 구현했다.

[목표 4.](#프로젝트-목표)

- AWS EC2로 인스턴스를 생성하고, 인스턴스에서 프로젝트를 배포하는 모든 과정은 구글링으로 정보를 얻었다. 입문으로 ubuntu 서버가 좋을 것 같아서 ubuntu 18.04 버전으로 인스턴스를 생성했다.

## 프로젝트 평가

1. 기존에 아무 인증없이 보여주던 영화 정보를 :point_right: 로그인 성공시 볼 수 있도록 영화 데이터를 디스플레이하는 기능을 따로 빼서 MoviePage 컴포넌트로 만든다. **3점/5점 만점**
2. MoviePage에서 사용자 개인 페이지로 가는 링크를 만든다. :point_right: UserPage 컴포넌트를 만들어 라우트 연결한다. **4.5점/5점 만점**
3. 비밀번호 변경(modify)과 회원 탈퇴(withdrawal) 기능을 추가해본다. :point_right: 백엔드 프로젝트에 해당 기능에 대한 api를 추가, 각 api에 대한 미들웨어 함수도 auth.ctrl.js에 작성한다. :point_right: 해당 작업에 대한 요청을 처리하는 기능을 프론트의 모듈에 추가한다. **3점/5점 만점**
4. 다 만들어진 정상 작동하는 풀스택 프로젝트를 AWS EC2 서비스를 통해 배포한다. **2.5점/5점 만점**

- 목표 달성률 평균 : **3.25점/5점 만점**

## 향후 계획

- 영화 데이터를 다루는 MovieForm()과 getMovies()수정
  1.  axios를 사용한 영화 데이터 불러오기가 되지 않는 경우가 있는데 왜 그러는지 알아보기.(시드니에 사는 친구가 영화 데이터 로딩이 안된다고 피드백 줌)
  2.  영화 데이터를 가져오는 시간을 단축할 수 있는 방법이 있는지 연구하기. :point_right: 여러 방법을 시도하고 각 방법마다 정확히 몇 초가 걸렸는지 기록하기.
- 모바일 디바이스로 사이트 접속시 보여지는 UI 수정
  1.  모바일 기기를 위해 media query breakpoints 추가 : 460px 과 320px 두 포인트 추가하기.
  2.  모바일 viewport에 대해 공부하고 필요한 경우 프로젝트에 적용하기.
- AWS EC2 인스턴스 내부 MongoDB와 로컬 컴퓨터의 데이터 관리 프로그램 연결해서 DB 편하게 관리하기.(Robo3T와 MongoDB Compass로 시도해봤으나 실패, 다시 시도 하기)
- 프로젝트 최적화 하기

## 특이 사항 및 참고 자료

> 클론 코딩에 사용된 자료(두 책을 믹스해서 제작) <br />
> Do it 클론 코딩 영화 평점 웹서비스 - 노마드 코더 니꼴라스, 김형태 지음 <br />
> 리액트를 다루는 기술 - 김민준 지음
