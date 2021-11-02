# jest 오류 확인  
    
# 리엑트 네이티브 폴더 트리 참고자료
    https://samanw.medium.com/reactnative-best-practices-with-best-folder-structure-6d2716d3d9cb

# react native yarn 패키지 설치 파일 목록 리스트

# react native command
리엑트 네이티브 버전체크
    react-native -v


2021/10/21 TDD 테스트 자동화 테스트
    * __tests__ 사용할 수 있도록
    * jest 사용명령어
    * 참조 사이트
    * https://jestjs.io/
    * https://samslow.github.io/development/2020/09/02/reactnativeTesting/
        yarn test --coverage
과제
    네비게이션 작성

# react native navigation
    https://reactnavigation.org/
# react native structure
    https://medium.com/habilelabs/best-folder-structure-for-react-native-project-a46405bdba7
    https://medium.com/@ifubabz/react-native-02-project-%EA%B5%AC%EC%A1%B0-%EC%84%A4%EA%B3%84-dae5196ba3f4

npm과 npx 의 차이
    npm을 통해 모듈을 설치
    옵션에 따라 프로젝트 별 모듈을 설치 할 필요가 없고 글로벌하게 설치가능

    글로벌 설치 단점
        1. 업데이트 진행시 다른 프로젝트에 영향
        1. create-react-app 보일러 플레이트에 치명적
           1. 최신버전을 유지해야하는 경우에 영향
    npx의 필요성
        1. create-react-app 과 같은 보일러 플레이트 모듈에 효과적

redux  
    1. 리덕스는 리액트와 리액트 네이티브 앱 개발에 사용하는 앱 상태관리 라이브러리  
    2. 리덕스는 플럭스 규격에서 출발 했다  
    3. 리덕스 필수 라이브러리는  
       1. redux  
       2. react-redux  
    4. 추가 라이브러리  
       1. redux-thunk  
       2. redux-logger  
       3. redux-saga  
       4. redux-observable  

어플리케이션 상태  
    페이지가 가지고 있는 상태값을 나타낸다  

리덕스 생에주기  
    1. https://blog.daum.net/followyourdream/10086852  

폰기종  
    갤럭시 s21  
    갤럭시 s1  
    아이폰 xs  
    아이폰 13  

고민  
    1. 네비게이터 관리를 어떻게 해야하나?  

# 같이 처리해야할 앱 과제
    1. 테스트 프레임 워크 설정하기  
    2. 리덕스 설정하기  
    3. 리덕스 청크 설정하기  
    4. 리덕스 사가 설정하기  

# safe area 개념  
    https://blog.edit.kr/entry/Notch-%EB%85%B8%EC%B9%98-%EB%94%94%EC%9E%90%EC%9D%B8-React-Native%EC%97%90%EC%84%9C-SafeAreaView%EB%A1%9C-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0  

리덕스 미들웨어 디버그  
    https://react.vlpt.us/redux-middleware/03-logger-and-devtools.html  

FBRectNativeSpec 에러

nvm Node Version Manager
    NVM을 사용하지 않고 설치한 Node는 /usr/local/bin/ 경로
    NVM을 사용하여 설치했을 경우에는 /User/kimjongmin/.nvm/versions/node/ 경로

ll /usr/local/bin/ | grep node
    lrwxr-xr-x  1 [username]   admin    30B Jul 24 00:32 node -> ../Cellar/node/16.5.0/bin/node
    lrwxr-xr-x  1 [username]   admin    46B Jul 24 00:32 npm -> /usr/local/lib/node_modules/npm/bin/npm-cli.js
    lrwxr-xr-x  1 [username]   admin    46B Jul 24 00:32 npx -> /usr/local/lib/node_modules/npm/bin/npx-cli.js
    lrwxr-xr-x  1 [username]   admin    45B Jun 23 21:47 react-native -> ../lib/node_modules/react-native-cli/index.js

NVM을 사용했을 경우 사용자의 종속되어 설치되기 때문에 npm을 통하여 모듈을 설치할 때도 기존과는 달리 -g 옵션을 주지 않아도 설치 가능합니다. (npm또한 Node와 같이 설치되기 때문에 Node 버전마다 다르게 설치됩니다.
NVM 설치
    NVM 설치전 기존에 설치되어 있던 Node를 제거하는것을 권장하지만 NVM 설치 후 제거하여도 괜찮습니다.