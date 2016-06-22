# Detecting the device through javascript

## navigator.userAgent.match()
웹 자원을 모바일 기기에서 로딩할 때, 기기별로 라이브러리를 선택적용 해야하는 경우가 발생한다.
이를 javascript에서는 navigator.userAgent.match() API를 이용해 분별할 수 있다.

```javascript
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    }
};

var script = document.createElement('script');
script.type = 'text/javascript';
if( isMobile.Android() ) {
	script.src = "js/libs/cordova_android/cordova.js";
	console.log("cordova android version is loaded");
} else if( isMobile.iOS() ) {
	script.src = "js/libs/cordova_ios/cordova.js";
	console.log("cordova ios version is loaded");
} else {
	console.log("cordova.js is not loaded");
}
document.getElementsByTagName('head')[0].appendChild(script);
```

위의 코드를 통해, 모바일 플랫폼 별로 라이브러리를 선택 로딩할 수 있다.
