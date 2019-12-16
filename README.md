# Fokin Weather
Learning React Native by Building a Foking Weather App



#### 개발 환경

```shell
node -v
# nodejs 12.x 이상 버전

npm -v
# npm 6.x 이상 버전

npm install -g expo-cli
```



## 0.2. Expo vs React Native CLI

Expo CLI Quickstart의 경우 이미 React native 의 기본 설정값들이 다 settings 이 되어 있는 경우이고, 만약 고급 settings 이 필요한경우 React Native CLI Quickstart를 따라서 다운로드 한다.



Expo 를 사용해서 개발 할 경우 앱 테스트가 무척 편리 하다 왜냐하면 native files 들을 크게 제어 할 필요가 없기 때문이다.

Expo API를 보면 payement, print, permissions, SQLite 와 같은 React Native 에서 지원하지 않는 것도 지원한다.



##0.3. Creating the Project

```shell
expo init [name of project]

# 이후 blank 를 선택한다. blank 의 경우 완전 비어있는 상태부터 시작하는 것이다.
```



이 파일은 expo가 읽는 파일이다.

```json
// app.json
{
  "expo": {
    "name": "Fokin Weather App",
    "slug": "fokin-weather",
    "privacy": "public",
    "sdkVersion": "36.0.0",
    "platforms": [
      "ios",
      "android",
      "web"
    ],
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    }
  }
}
```



#### Start!

```shell
npm start
```



#### Erreur ) Could not connect to development server 

```shell
# node 가 끊어졌을 때
# Stopping 을 Cnt + z 로 시킨후,
npm start
# 다시 실행시킨다.
```

