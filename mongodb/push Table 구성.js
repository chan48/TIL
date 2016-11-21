[Android]
- Reg ID : 단말기 식별 ID
- emp id : User 식별 ID
- distinguish id : Device 구분 ID

[iOS]
- Device Token ID : 단말기 식별 ID
- emp id : User 식별 ID
- distinguish id : Device 구분 ID



[Check List]
0) device 구분하는 Client API 가이드 준비하기
0-1) !! push 몇개 받았는지 / 읽었는지의 여부 를 확인!! 하는 방법 조사
1) tag 값으로 줄 바꿈을 할 수 있는지 확인

3) Push 텍스트 값에 따라 Client 화면 분기가 가능한지 확인
	- "신청" ---> Client Routing || url : #application
	- "현황" ---> Client Routing || url : #status
	- Push 메시지를 읽었을 때 -> Push 메시지 값을 받아서 -> client App 에 던져주고 -> Routing으로 연기해서 화면이 전환되는지 확인
4) Push On / Off 기능 앱 자체에서 제공하는지 확인 (iOS / Android both)
5) (Extra) GCM이 Apple Push도 지원하는지 확인 (업그레이드 차원)
7) WIFI 모델에서 Device ID 가져오는지 여부 확인 (안드로이드 태블릿 확인)

[일정]
- 5/11 (통합테스트 진행)
- Working days : 약 2 주

[오늘 할일]
1) GCM / APNS 푸쉬메시지 텍스트 규격 확인 후 인창원쪽에 전달
2) GCM / APNS Device ID 규격 확인 후 전달 (문자열 길이 확인)