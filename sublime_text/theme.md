# Sublime Text 3
Front-End 개발자라면 누구나 한번쯤 들어봤을 법한, 만인의 Editor **서브라임 텍스트3**
남들처럼 그냥 다운받아 사용하지 말고 남들과는 구분이 되는 서브라임 유저가 되보자.

## Famous Theme - Seti UI
Google 엔지니어 Addy의 말이다. "It's got really nice vibrant colors for pretty much all different types of syntax."
https://developers.google.com/web/shows/ttt/series-1/mt-addys-theme?hl=en

그렇다. 말 그대로 이건 죽여주는 Theme 이다. <br>
다운로드는 이 [링크](https://packagecontrol.io/packages/Seti_UI)를 이용하거나
Install Package를 이용하여 Seti_UI 를 찾아 설치한다.

## 코딩이 쉬워집니다. Key Bindings Customization
- 인터넷에서 퍼온 소스를 포맷에 맡게 복사 붙여넣는 방법
**Preferences → Key Bindings - User** 로 가서 다음 내용을 추가한다.
```javascript
{ "keys": ["super+v"], "command": "paste_and_indent" },
{ "keys": ["super+shift+v"], "command": "paste" }
```
위를 추가하게 되면, 기존 우리가 이용하던 `command + v` 습관에서 자동 들여쓰기가 되는 엄청난 혜택을 볼 수 있다.

- 정리 안된 코드들을 눈에 보기 좋게 정렬하기
**Preferences → Key Bindings - User** 로 가서 다음 내용을 추가한다.
``` javascript
{ "keys": ["super+shift+r"],  "command": "reindent" }
```

## 코딩을 도와줍니다. User Setting Customization
- **Preferences → Settings - User** 로 가서 다음 내용을 추가한다.

- 커서가 위치한 줄을 눈에 띄기!
` "highlight_line": true ` 를 추가

- 맥 에어를 이용하는 유저들에게 강추하는 라인 간격 넓히기
``` javascript
"line_padding_bottom": 1,
 "line_padding_top": 1
```

- 왼쪽 파일 탐색기 창에서 파일과 폴더가 구분이 안갈 때!
``` javascript
"bold_folder_labels": true
```
