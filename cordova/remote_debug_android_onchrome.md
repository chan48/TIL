# Chrome Device Debugging 옵션을 이용하여 Cordova Hybrid App 디버깅 하기

## 시작하기
Cordova Hybrid Android 앱의 레이아웃 또는 서버와의 통신을 디버깅 하고 싶을 때,
Google Chrome에서 제공하는 Device Debugging 옵션을 사용한다.
해당 링크는 아래를 참조한다. [Chrome Device Debugging](https://developer.chrome.com/devtools/docs/remote-debugging)

## WebView 디버깅 가능옵션 추가하기
아래 옵션을 추가한다.
```java
if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
    WebView.setWebContentsDebuggingEnabled(true);
}
```
