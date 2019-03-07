#SUALAB 개발 가이드

프로젝트는 서버와 클라이언트 하나의 Repository에서 개발되었습니다.

- Front-end(클라이언트): ReactJS
- Back-end(서버): node.js, Express
- Node.js > 8.0



##기본 개발환경 셋팅

개발환경에 기본적으로 `node.js` 와 `create-react-app` 이 설치되어 있어야 합니다.

### node.js 설치

- 다운로드 링크: [nodejs](https://nodejs.org/ko/) (LTS 버전 다운로드)



### React 설치 

사전에 `node.js` 가 설치되어 있어야 `npm` 명령어를 사용할 수 있습니다.

````
npm i -g create-react-app
````



##Project Setup

####git 에서 프로젝트 다운로드

```
git clone https://github.com/sualab01/sualab-renew.git
```

####Dependency 설치

```
npm install
```

####프로젝트 최상위 폴더에 .env 파일 생성

아래 내용 입력 후 저장

```
PORT=3000
GET_INQUIRY_EMAIL=sales@sualab.com

DB_LIVE_HOST=13.125.83.115
DB_LIVE_USER=sualab
DB_LIVE_PASSWORD=sualab!@34
DB_LIVE_DATABASE=sualab
DB_LIVE_PORT=3306

DB_DEV_HOST=13.125.83.115
DB_DEV_USER=sualab
DB_DEV_PASSWORD=sualab!@34
DB_DEV_DATABASE=sualab_dev
DB_DEV_PORT=3306
```

####custom.json 파일 생성

- /config 폴더 안에 `custom.json` 파일을 생성합니다.
- `custom.json` 파일은 `express admin` 의 custom action에 대해 정의해놓은 파일의 경로를 설정하는 파일입니다.
- 아래와 같이 입력 후 저장합니다.

```
{
    "events": {
        "events": "<PROJECT_PATH>/admin/events.js"
    }
}
```

> PROJECT_PATH: 프로젝트 최상위 폴더의 경로 입니다.



#### 프로젝트 실행

맨 처음 실행시

`/build` 폴더가 생성되어 있지 않으면 실행시 에러가 발생하기 때문에 처음 프로젝트를 설정한 후 `build`를 해줘야 합니다.

```
npm run build
```

프로젝트 실행(DEV)

> 파일을 수정하고 저장시 자동으로 수정된 내용으로 서버를 재시작하지만  브라우저에 바로 반영이 되지않습니다. (css 는 바로 반영됨)
>
> 파일을 수정하고 페이지에서는 reload를 해줘야 합니다.

```
npm run dev:server
```

서버를 실행한 뒤에는 `localhost:8080`으로 접속하시면 됩니다.

> Admin 접속: `localhost:8080/admin` 
>
> ID/PASS: root/AAaa11



서버를 수정했을 경우에는 서버를 `build` 해준후 프로젝트를 다시 실행해야 합니다.

```
npm run build:server
```



##프로젝트 폴더 설명

```
/admin
/cf-key
/config
/public
/server
/src
```

### /admin

- `express admin` 에서 custom action 을 정의합니다.

- 주로 `admin` 에서 파일을 upload action 에 대해 정의합니다

### /cf-key

- AWS 인증서를 저장

- Suakit Download 시 S3 에 private 로 되어 있는 파일을 임시로 접속할 수 있게 있는 url 발급을 위해 사용합니다.

### /config

- [express admin](http://simov.github.io/express-admin/) 에 대한 설정을 정의합니다. 

- config.json: `express admin` 의 기본 셋팅

- settings.json: `express admin` 에 화면 구성 및 동작에 관한 셋팅

  - admin 을 수정할때 주로 해당 파일을 수정하는 파일입니다. 

- custom.json: `express admin` 의 동작중 [custome action](http://simov.github.io/express-admin/#custom-views-apps) 이 명시된 파일의 경로를 셋팅


### /public

- 실제 서비스 되는 파일 폴더

- react로 개발된 내용은 모두 `bundle.js` 로 `build`되어 `index.html` 을 통해 서비스됩니다.

### /server

- api server에 대한 내용이 저장되어 있습니다.
- server 는 [express](https://expressjs.com/ko/) 로 구현되어 있습니다.

- suakit download를 제외한 모든 api 의 명세는 routes 폴더 안에 각 파일로 구분되어 있습니다.

- routes 폴더 안 각 파일은 `index.js` 을 통해 서비스됩니다.


### /src

실제 클라이언트를 이루고 있는 내용들이 저장되어 있습니다.

components 폴더 안에 commons 와 popup 폴더를 제외하고 각각 하나의 페이지를 나타냅니다.

대부분의 `component`는 페이지의 route 주소와 비슷하게 되어 있기 때문에 페이지 수정시 주소와 비슷한 `component`를 수정하시면 됩니다.

> Sualab 홈페이지 News 안에 내용 수정시 - /newsPage 폴더 확인

```
/careerPage
/commons
/companyPage
/contactPage
/mainPage
/newsPage
/popup
/productPage
```

#### /commons

기본으로 사용되는 `component`들을 모아둡니다.

`header`, `footer`,` 다국어설정` 등 페이지에서 공통적으로 사용하는 `component`들이 있습니다.

>현재 페이지는 다국어 처리되어 제공되고 있습니다 텍스트를 변경하실땐  `src/commons/intl/ko.js, en.js` 파일을 참고하여 수정하셔야 합니다.

#### /popup

`popup component` 입니다.

서버에 팝업이 설정되면 지정한 위치에 노출됩니다. ( 현재는 `mainPage` 에 노출되도록 되어 있습니다. )



##프로젝트 배포

#### 프로젝트 빌드

```
npm run build
```

`build`된 내용을 모두 `github`에 배포 합니다.



## 배포된 내용 라이브에 반영 

> 현재 라이브되고 있는 서버에 대한 설명 및 접속 방법은 `인스턴스 가이드` 를 참고하시길 바랍니다.

배포된 내용을 다운로드 받습니다.

```
cd /home/ubuntu/sualab-renew && git pull
```

서버가 변경된 경우에는 server 파일을 build 해줘야 합니다.

```
npm run build:server
```

클라이언트는 현재 [pm2](http://pm2.keymetrics.io/) 라는 node 프로세스 관리툴을 통해 동작시키고 있습니다.

pm2 restart 명령어를 통해 재시작 해줍니다.

> pm2 에 프로세스가 없는 경우, pm2 start 명령어를 통해 클라이언트 실행을 먼저 해줘야 합니다.
>
> `pm2 start --name "sualab-live" ./build/main.js`

```
pm2 restart sualab-live
```
