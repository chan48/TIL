# Objective-C에서 NavigationBarHidden

MainViewController에서 이전 화면을 다음 화면으로 넘길 때,
Navigation Controller를 사용하게 된다.

이 때, WebView를 사용하면 Navigation Controller의 NavigationBar가 default 값으로 true가 되어 있는데, 이걸 다음과 같은 메서드를 사용하여 숨길 수 있다.
`[self.navigationController setNavigationBarHidden:YES];`

