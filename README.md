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
        2. create-react-app 보일러 플레이트에 치명적
           1. 최신버전을 유지해야하는 경우에 영향
    npx의 필요성
        1. create-react-app 과 같은 보일러 플레이트 모듈에 효과적
