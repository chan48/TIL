# Chrome Extension Program 개발하는 법

## 개요
- [browser action](https://developer.chrome.com/extensions/browserAction) 을 이용해서 URL 주소창 옆의 확장 프로그램 아이콘을 생성할 수 있다.
- 확장 프로그램을 만들기 위해서는 `manifest.json` 파일이 필요한데, 이 [매니페스트 파일](https://developer.chrome.com/extensions/manifest) 안에 확장 프로그램의 *이름, 설명, 버전 정보* 등을 설정할 수 있다.

## Browser Action
- Google Chrome Toolbar 에 아이콘을 등록하고 아이콘에 `tooltip`, `badge`, `popup` 같은 동작을 추가할 수 있다.
- `"browser_action": {...}`
- `manifest.json` 파일을 다음과 같이 등록할 수 있다.

  ```javascript
  {
     "name": "My extension",
     ...
     "browser_action": {
       "default_icon": {                    // optional
         "19": "images/icon19.png",           // optional
         "38": "images/icon38.png"            // optional
       },
       "default_title": "Google Mail",      // optional; shown in tooltip
       "default_popup": "popup.html"        // optional
     },
     ...
   }
  ```

## Page Action
- Browser Action 과 마찬가지로 주소창 옆에 아이콘을 추가할 수 있다.
- 현재 페이지에서만 작동할 수 있는 동작들을 정의한다. (모든 페이지에 적용되지 않음)

## Manifest File Format
- 매니페스트 파일은 아래와 같은 JSON 형태로 구현한다.

  ```javascript
  {
    // Required
    "manifest_version": 2,
    "name": "My Extension",
    "version": "versionString",

    // Recommended
    "default_locale": "en",
    "description": "A plain text description",
    "icons": {...},

    // Pick one (or none)
    "browser_action": {...},
    "page_action": {...},

    // Optional
    "author": ...,
    "automation": ...,
    "background": {
      // Recommended
      "persistent": false
    },
    "background_page": ...,
    "chrome_settings_overrides": {...},
    "chrome_ui_overrides": {
      "bookmarks_ui": {
        "remove_bookmark_shortcut": true,
        "remove_button": true
      }
    },
    "chrome_url_overrides": {...},
    "commands": {...},
    "content_capabilities": ...,
    "content_scripts": [{...}],
    "content_security_policy": "policyString",
    "converted_from_user_script": ...,
    "copresence": ...,
    "current_locale": ...,
    "devtools_page": "devtools.html",
    "event_rules": [{...}],
    "externally_connectable": {
      "matches": ["*://*.example.com/*"]
    },
    "file_browser_handlers": [...],
    "file_system_provider_capabilities": {
      "configurable": true,
      "multiple_mounts": true,
      "source": "network"
    },
    "homepage_url": "http://path/to/homepage",
    "import": [{"id": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}],
    "incognito": "spanning or split",
    "input_components": ...,
    "key": "publicKey",
    "minimum_chrome_version": "versionString",
    "nacl_modules": [...],
    "oauth2": ...,
    "offline_enabled": true,
    "omnibox": {
      "keyword": "aString"
    },
    "optional_permissions": ["tabs"],
    "options_page": "options.html",
    "options_ui": {
      "chrome_style": true,
      "page": "options.html"
    },
    "permissions": ["tabs"],
    "platforms": ...,
    "plugins": [...],
    "requirements": {...},
    "sandbox": [...],
    "short_name": "Short Name",
    "signature": ...,
    "spellcheck": ...,
    "storage": {
      "managed_schema": "schema.json"
    },
    "system_indicator": ...,
    "tts_engine": {...},
    "update_url": "http://path/to/updateInfo.xml",
    "version_name": "aString",
    "web_accessible_resources": [...]
  }
  ```
  [참고](https://developer.chrome.com/extensions/manifest)
