# Google Mobile Website Design 25 Principles


## What makes a good mobile site?
- 구글에서 119시간 동안 진행한 연구결과에서 다음과 같은 결론이 도출되었다.
- **"Mobile users are very goal-oriented. They expect to be able to get what they need, immediately, and on their own terms."** (모바일 사용자들은 목적 지향적이고, 웹 사이트 이용시에 자신들이 필요로 하는 것들이 즉시 얻어질 수 있기를 기대한다)
- 연구결과를 토대로 아래의 25가지의 원칙을 도출하였다.

## Home page and Site navigation
1. Keep calls to action front and center (주요 기능은 가급적 메인 페이지와 중간에 배치)
  - 사용자가 가장 빈번하게 사용하는 기능을 접근하기 쉽게 배치
  - learn more 같은 사용성이 떨어지는 화면으로 화면을 차지하는 것을 기피하라

2. Keep menus short and sweet (메뉴는 간단하고 심플하게)
  - 사용자들은 메뉴를 사용하기 위해 스크롤링 하는 것을 좋아하지 않는다.
  - 가급적 메뉴는 적고 심플하게

3. Make it easy to get back to the home page (메인 홈으로 가기 쉬워야 한다)
  - 사용자들은 보통 앱의 상단에 있는 로고를 클릭했을 때, 메인 홈으로 가기 원한다

4. Don’t let promotions steal the show (광고나 프로모션이 사용성을 낮추지 않게 한다)
  - 광고나 프로모션이 팝업창 형태로 화면을 가리거나 하는 일은 없어야 한다. 최대한 없어지기 쉽게 한다

## Site Search
5. Make site search visible (사이트 검색은 쉽게)
  - 정보 검색시에 필요한 것을 빨리 찾을 수 있도록 검색창을 눈에 잘 보이는 곳(가급적 첫 번째 페이지)에 비치한다

6. Ensure site search results are relevant (사이트 검색 결과는 연관성이 높아야 한다)
  - kid 라는 단어를 검색했을 때, kid를 포함한 아무 단어보다는 해당 사이트의 목적에 맞는 단어조합을 제시할 수 있어야 한다.
  - 자동완성 이나 자동수정 기능등을 이용하여 사용자가 검색하기 더 수월하도록 돕는다

7. Implement filters to narrow results (더 구체적인 결과를 얻기위한 필터는 필수)
  - 필터링을 하기 쉽도록 눈에 띄기 쉬운 곳에 배치한다 (필터를 숨기지 않을 것)

8. Guide users to better site search results
  - 사용자가 원하는 결과를 정확히 얻도록, 검색 하기 전 몇가지 질문들을 던지거나 placeholder 등을 이용하여 필터 값을 유도한다

## Commerce and conversion
9. Let users explore before they commit (가입하기 전 사이트 둘러볼 수 있도록 허용)
  - 사용자가 사이트를 둘러보기도 전에 가입을 요구한다면, 비주류 브랜드인 경우에 사용자 유치에 실패할 수 있다.
  - 가입 없이도 사이트를 충분히 둘러볼 수 있도록 설계

10. Let users purchase as a guest (게스트 계정으로도 구매 가능하게)
  - 불필요한 사이트 가입 보다는 게스트 계정으로도 간단한 구매가 가능해야한다

11. Use existing information to maximize convenience (기존 정보로 편리함 극대)
  - 기존의 데이터로 자동완성 기능을 활용하여 편리함을 극대화 하자

12. Use click-to-call buttons for complex tasks (click to call 기능으로 간단하게 전화를)
  - 대부분의 사용자들은 전화 번호를 클릭시에 바로 전화가 걸어지길 기대한다
  - 이외에도 전화 번호를 저장 및 발신에 관한 메뉴로 나타낼 수 있다

13. Make it easy to finish on another device (다른 장치에서 작업을 끝낼 수 있도록 한다)
  - 가끔 많은 사용자들이 구매나 다른 작업들을 진행하다가 기타 device에서 이어 마치기를 원한다.
  - 아이템 구매를 하다가도, 아이템을 확대해서 보고 싶은 경우 등이 이에 해당한다.
  - 따라서, 해당 아이템을 쉽게 SNS에 공유할 수 있게 하거나
  - 사용자들이 해당 링크를 바로 자신의 메일이나 기타 sns에 공유할 수 있게 한다

## Form Entry
14. Streamline information entry (정보 입력은 자연스러워야 한다)
  - 사용자들이 해당 데이터 필드의 입력을 마치고 Return을 눌렀을 시에는 다음 필드로 가게끔 한다
  - 결과적으로 사용자들이 더 적게 화면을 터치하도록 한다

15. Choose the simplest input (가장 간단한 입력 폼을 선택)
  - 해당 [링크](https://developers.google.com/web/fundamentals/design-and-ui/input/forms/choose-the-best-input-type)를 참고한다.

16. Provide visual calendar for date selection (날짜 선택시에는 달력이 보이게)
  - 사용자가 날짜 입력을 위해 달력을 따로 찾아보지 않게한다.

17. Minimize form errors with labeling and real-time validation (데이터 폼 입력 시 실시간 validation으로 오류 최소화)
  - 데이터 입력을 위한 레이블 표시 및 입력 폼의 유효성 체크는 항상 중요하다

18. Design efficient forms (효율적인 폼을 설계하라)
  - 자동완성 과 이전 작성데이터를 이용하여 사용자의 수고를 덜어준다
  - 특히 물건 배송을 위한 주소 작성시 [requestAutoComplete](https://developers.google.com/web/fundamentals/design-and-ui/input/forms/use-request-auto-complete)을 이용하자

## Usability and form factor
19. Optimize your entire site for mobile (웹 사이트는 모바일에 최적화 되도록)
  - 사용자 디바이스에 따라 유연하게 레이아웃이 바뀔 수 있는 [responseive-layout](https://developers.google.com/web/fundamentals/design-and-ui/responsive/) 을 활용

20. Don’t make users pinch-to-zoom (zoom in & out 이 필요한 화면은 불편하다)
  - 사용자들은 일반적으로 수직 스크롤을 선호하고 수평 스크롤에 불편함을 느낀다.
  - 특정 viewport width 에 국한되는 콘텐츠 설계는 지양

21. Make product images expandable (상품 이미지는 확대 가능하게)
  - 의류 소비자들은 상품을 면밀히 볼 수 있는 확대 기능을 선호한다
  - 구매를 할 떄 상품을 자세히 관찰할 수 없다면 소비량은 줄어든다

22. Tell users which orientation works best (사용자에게 어떤 오리엔테이션이 효과적인지 가이드)
  - 연구 결과에서 사용자는 한번 설정한 화면 orientation에 대해 특정한 상황이 아니면 그 task가 끝날 떄까지 바꾸지 않는 다는 것을 발견하였다.
  - Landscape & Portrait 둘다 지원하도록 설계하고, 그렇지 않을 경우에는 사용자가 최적의 orienation으로 설정하고 볼일을 볼 수 있도록 가이드
  - 화면 전환과 관계없이 중요한 동작들은 모두 실행되도록 설계하는 것이 가장 중요

23. Keep your user in a single browser window (사용자를 한개의 브라우저 안에 있도록)
  - 사용자가 특정 기능으로 사이트 밖으로 나가거나, 새로운 윈도우를 띄우게 하는 요소들을 제거
  - 예를 들어, 쿠폰을 홍보하는 경우, 사이트에서 직접 받을 수 있도록 설계

24. Avoid 'full site' labeling (Full Site 표시를 지양)
  - 사용자들이 full site(desktop site) 라는 표시를 보는 경우, 보통 mobile site에는 콘텐츠가 더 적게 들어가 있을 것이라고 추측한다

25. Be clear why you need a user’s location (사용자의 위치가 왜 필요한지 명확히 하라)
  - 사용자의 위치정보가 왜 필요한지 다시 한번 비즈니스 로직에 맞춰 생각하라
  - 호텔 예약 사이트를 예로 보면, 사용자가 다른 지역에 있는 호텔을 예약하려고 하는데 자기 현재 위치 기준으로 근처의 호텔을 추천 받았을 떄 얼마나 당황하겠는가.
  - 가능하면 위치 필드는 빈칸으로 놓고, 사용자들이 필요시에 이용할 수 있도록 한다
