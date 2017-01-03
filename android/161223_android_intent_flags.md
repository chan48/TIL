## Android Activity 이해를 위한 3가지 용어
- **Android Activity** : 액티비티는 한 화면의 단위를 의미
- **Android Acitivty Stack** : 스택 형태로 구성된 액티비티의 집합. 호출되거나 생성된 액티비티들이 순서를 이루어 스택형태로 저장된다.
- **Android Activity Life Cycle** :
  - 액티비티의 생성주기
  - 효율적인 메모리 관리를 위한 액티비티 생성 및 소멸 주기
  - 생성 -> 시작 -> 정지 -> 파괴 순서의 싸이클을 가진다.
  - onCreate(), onStart(), onResume(), onPause(), onStop(), onDestroy() 등의 상태가 있음

## Android Intent Flags
- 일반적으로 안드로이드 액티비티를 띄울 때 인텐트를 포함하여 생성한다.
- 이 때, 인텐트의 flag 값을 이용하면 액티비티 시작 방식을 제어할 수 있다.

#### FLAG_ACTIVITY_NEW_TASK
- 새로운 태스크 (액티비티 스택) 을 생성하고, 그 곳에 액티비티를 추가한다.

#### FLAG_ACTIVITY_SINGLE_TOP
- 실행할 액티비티가 이미 가장 최상단에 존재하는 액티비티인 경우, 새 인스턴스를 생성하지 않고 기존의 인스턴스가 onNewIntent() 호출을 받는다.

#### FLAG_ACTIVITY_CLEAR_TOP
- 실행할 액티비티가 이미 액티비티 스택 안에 존재할 경우, 그 액티비티를 가장 최상단으로 가져와 onNewIntent() 호출을 받는다.
- 기존 액티비티 스택의 최상단 부터 실행된 액티비티 사이의 모든 액티비티는 소멸된다.

## Pending Intent Flag
- FLAG_ONE_SHOT : 일회용 PendingIntent
- FLAG_CANCEL_CURRENT : 이전에 생성된 intent 를 취소하고, 새로 생성
- FLAG_NO_CREATE : 생성되어 있는 Pending Intent 를 반환한다. 재사용 가능
- FLAG_UPDATE_CURRENT : 이미 생성된 PendingIntent 가 존재하면 해당 Intent 의 내용을 변경한다.
