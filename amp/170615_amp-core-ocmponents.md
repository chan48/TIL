## AMP 컴포넌트
- `<amp-tabs>` 아직 없음 -> `<amp-selector>`.
  - 없는 경우 대체할 수 있는 기존 컴포넌트 활용 필요
- `<amp-img-lightbox>` : 사진 클릭하면 크게 확대됨


- 주의 : 컴포넌트가 다양하지 않으므로, 처음 설계 및 사용에 있어서 있는지 먼저 찾아봐야 함

## AMP 컴포넌트 만들기
[Google Codelab](https://codelabs.developers.google.com/codelabs/creating-your-first-amp-component/index.html?index=..%2F..%2Findex#0)

## 참고
- [ampstart](https://www.ampstart.com/)
- [ampslack](https://amphtml.slack.com)
- [ampgithub]()


---
# HTTP/2
## HTTP/2 란?
- AMP & PWA 모두 HTTP/2 기반
- 바이너리 기반. 텍스트 X (HTTP 헤더 형식의 내용이 바이너리로 전송되어서 용량의 절반 이상 감소. 바이너리 : 6 bytes . UTF-8 텍스트 : 18 bytes)
- 헤더 압축
- 멀티플렉스 스트림 : 1개의 요청에 1개의 자원이 아닌, 1개의 요청에 여러개의 요청을 가져옴

Q) TCP 스펙에 보면 한번에 보낼 수 있는 패킷양이 정해져 있는데, HTTP2 는 그럼 그 패킷양에 제한이 없어진건가? 어떻게 한 커넥션으로 가능한건지?
