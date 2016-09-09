# Chrome Extension Program 개발하는 법 II (Overview)

## 기본
- 확장프로그램은 HTML / CSS / Javascript / Images / etc 파일들을 압축해서 묶어놓은 프로그램이다.
- 브라우저가 웹 페이지에 제공하는 [모든 API](https://developer.chrome.com/extensions/api_other) 를 웹 페이지와 동일하게 사용할 수 있다.
- [Content Scripts](https://developer.chrome.com/extensions/content_scripts) 나 [cross-origin XMLHttpRequests](https://developer.chrome.com/extensions/xhr) 를 이용하여 웹 페이지나 서버와 인터랙션 할 수 있다.
- [tabs](https://developer.chrome.com/extensions/tabs) 나 [bookmarks](https://developer.chrome.com/extensions/bookmarks) 처럼 브라우저 기능을 사용할 수도 있다.

## Extension UI
- browser action 또는 page action 형태로 확장 프로그램을 사용할 수 있다.
- 확장 프로그램이 거의 모든 페이지에 연관이 있을 때는 `browser action` 을 사용
- 확장 프로그램이 페이지에 따라 활성화 / 비활성화 해야될 때는 `page action`을 사용

## Files
- 모든 확장프로그램은 다음과 같은 파일들이 있어야 한다.
  - **manifest file** 1개
  - **HTML files** 1개 이상
  - **Javascript** (옵션)
  - **기타 파일** (옵션)

- 확장 프로그램을 배포할 때는 *.crx* 라는 확장자 명의 zip 파일로 배포하기 때문에, 한개의 폴더에 잘 정리한다.
- *Chrome Developer Dashboard* 를 이용하여 확장 프로그램을 Chrome App Store에 배포하려면 초기 등록비 $5 가 필요하다.

## 파일 참조
- 일반 HTML 페이지와 같은 방식을 파일을 참조하면 된다. `<img src="images/myimage.png">`
- 디버깅 시에는 확장프로그램의 모든 파일은 다음과 같은 경로로 접근이 가능하다 `chrome-extension://<extensionID>/<pathToFile>`
- `chrome://extensions` 에서 *extensionID* 와 *pathToFile* 에 대한 정보를 확인할 수 있다.

## The Manifest File
- 확장 프로그램에 관한 전반적인 정보를 갖고 있다. 간단한 예시는 다음과 같다.

  ```javascript
  {
    "name": "My Extension",
    "version": "2.1",
    "description": "Gets information from Google.",
    "icons": { "128": "icon_128.png" },
    "background": {
      "persistent": false,
      "scripts": ["bg.js"]
    },
    "permissions": ["http://*.google.com/", "https://*.google.com/"],
    "browser_action": {
      "default_title": "",
      "default_icon": "icon_19.png",
      "default_popup": "popup.html"
    }
  }
  ```

## Architecture
- 대다수의 확장 프로그램은 주 로직을 포함하고 보이지 않는 *background page* 를 갖고 있다.
- 확장 프로그램의 UI 를 나타내는 다른 페이지도 포함하고 있다.
- 기존에 확장 프로그램에 포함된 페이지 이외에 사용자가 로딩하는 다른 페이지들을 조작하기 위해서는 *content script*가 있어야 한다.

### The background page
- 백그라운드 페이지에는 [persistent background](https://developer.chrome.com/extensions/background_pages)ㅡㅍㅗㅇ 와 [event](https://developer.chrome.com/extensions/event_pages) 두 종류의 페이지가 있다.
- `persistent background` 페이지 는 항상 열려 있다.
- `event` 페이지 는 필요에 따라 페이지가 열고 닫힌다.
- 항상 `background` 페이지를 사용해야 하는 상황이 아니면 가급적 `event` 페이지를 사용한다.

### UI 페이지
- 확장프로그램은 UI를 표시하는 일반 HTML 파일을 포함하고 있다.
- 표시하는 방식에는 *popup*, *options*, *override* 등이 있다.
- *window.open()* 와 *tabs.create* 등을 이용하여 확장프로그램 안에 있는 다른 HTML 파일들도 표시할 수 있다.
- **확장프로그램 안의 HTML 파일 간에는 서로의 DOM 접근이 가능하고, function 호출도 가능하다.**

### Content Scripts
- **content scripts** : 브라우저에 로딩된 페이지의 컨텍스트에서 실행되는 javascript
- **브라우저에 로딩되어 있는 웹 페이지에 접근하기 위한 javascript**
- 확장프로그램의 일부가 아니라 브라우저에 로딩된 페이지의 일부라고 생각하면 된다.
- 브라우저가 로딩하는 페이지의 정보들에 접근이 가능하고, 페이지를 변경할 수 있다.
- 로딩된 페이지의 DOM 조작은 가능하나, **확장프로그램의 `background` 페이지의 DOM 조작은 불가능**하다.
- 한가지 주의할 점은, `content script`와 `확장프로그램` 간의 소통이 아예 안되는 것은 아니다. 예를 들어, 브라우저 페이지에서 RSS feed를 찾을 떄 마다 `content script`에서 메시지를 보낸다고 하자. 그러면, `background` 페이지에서 `content script` 에 브라우저 페이지 모양을 바꿀지 묻는게 가능하다.

## Chrome.* API 사용하기
- 크롬 확장프로그램은 웹 페이지와 앱이 사용할 수 있는 모든 API 뿐만 아니라, `chrome.* APIs` 라고 불리는 크롬 전용 API에도 접근이 가능하다.
- 예를 들어, `window.open()` 등의 웹앱 API 사용시에, 어느 탭을 열지 구체적으로 정하고 싶다면 Chrome의 `tabs.create` API를 사용할 수 있다.
- 대부분의 `chrome.* API`는 **비동기** 방식이다. `string chrome.runtime.getURL()` 같은 일부 API는 **동기** 방식이다.

## 페이지 간의 통신
- 페이지 간의 통신이 필요한 경우, 확장프로그램 안의 모든 페이지는 같은 쓰레드의 같은 프로세스에서 실행되기 때문에 상호 페이지 간에 직접 함수 호출이 가능하다.
- `getViews()` 나 `getBackgroundPage()` 같은 크롬 API로 해당 페이지를 참조하고 나면, 자유롭게 호출이 가능하다.

## 데이터 저장과 익명(incognito) 모드
- 확장프로그램은 *storage API*, *HTML5 web storage API* 등을 이용하여 데이터 저장이 가능하다.
- 데이터 저장시에 확장프로그램은 디폴트 값으로 익명 윈도우를 사용하지 않는다는 것을 고려해야 한다.
- 익명 모드를 확인하는 샘플코드는 다음과 같다.

  ```javascript
  function saveTabData(tab, data) {
    if (tab.incognito) {
      chrome.runtime.getBackgroundPage(function(bgPage) {
        bgPage[tab.url] = data;      // Persist data ONLY in memory
      });
    } else {
      localStorage[tab.url] = data;  // OK to store data
    }
  }
  ```
