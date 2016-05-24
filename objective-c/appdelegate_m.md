# AppDelegate.m 의 역할은?

Meaning : The heart of your appliction.
What it is : AppDelegate에 연관된 객체들이 특정 상태에 도달하거나, 이벤트를 발생하는 경우 AppDelegate로 들어선다. 예를 들면, UIApplication 객체가 특정 상태로 전환하면, AppDelegate로 제어가 넘어온다.
다음을 살펴보자,
- applicationDidFinishLaunching : 앱 시작시의 구성과 생성에 관한 로직을 처리할 수 있다.
- applicationWillTerminate : 어플리케이션 종료시에 처리할 로직을 넣을 수 있다.

하지만 다음과 같은 경우는 AppDelegate.m 파일에 넣는 것을 피해야 한다.
- Document data : Document에 관한 싱글톤 객체를 구성하여 따로 관리하는 것이 바람직하다.
- Button/table/view controllers & view delegate methods & view handling : 이 기능들은 모두 각각의 View Controller 클래스에 있어야 한다.
