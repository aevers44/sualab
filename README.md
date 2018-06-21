# 현재 sualab 웹 배포 방법

- node.js 를 사용한 API 서버 및 React Client 모두 한 repository 에서 개발되었습니다.

## 디자인 수정

### CSS 수정법

SCSS 를 사용하여 스타일을 적용하고 있습니다.
각 section 마다 scss 파일을 하나씩 가지고 있어, 수정이 필요한 부분을 사이트에서
찾아 해당 scss 파일을 수정하여 스타일을 바꿀 수 있습니다.

e.g. 메인화면의 `Get a tour` 버튼 수정 시

```
1. Get a tour 버튼의 className 확인 => 'firstContainer__tourBtn__######'
2. mainPage/firstContainer/firstContainer.scss에서 tourBtn에 해당하는 css 수정
3. 수정 이후 npm run build를 실행하여 client 빌드
4. git 등을 통하여 배포
```

### 텍스트 수정법

`src/commons/intl/ko.js, en.js`에서 텍스트를 통합관리하므로 필요한 부분을 수정합니다.
수정 이후에는 `npm run build`를 통해 빌드를 하고 배포합니다.

## 배포

- css, 텍스트나 React DOM 구조 수정 등 client 수정을 할 때에는
  수정 이후에 `npm run build`를 통해 React client side code 들로 `bundle.js`를 생성합니다.
- 수정 사항과 함께 `bundle.js`까지 build 하고 master branch 에 push 합니다.

- `ssh -i "sualab.pem" ubuntu@sualab.com` (sualab.pem 파일은 별도로 전달하겠습니다.)
- AWS EC2 에 접속 후 `~/sualab-renew` 폴더에서 git pull 을 수행합니다.
- 로컬에서 `bundle.js`를 빌드하여 올렸다면 바로 라이브에 적용됩니다.

- \*) 서버를 재시작하려 할 때에는 `npm run deploy` 또는 `sudo forever stopall && sudo forver start build/main.js`를 서버에서 수행합니다.
