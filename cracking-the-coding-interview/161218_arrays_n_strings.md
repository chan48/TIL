## Hash Table
- Key 와 Value 의 쌍을 효율적으로 찾기 위해 만들어진 자료구조.
- 해쉬 테이블 구현방법 (연결 리스트와 해쉬코드 함수를 사용)

  1. Key 값의 해쉬코드(int 또는 long)를 계산한다. 자료가 방대하면 두 개의 다른 Key 값이 같은 해쉬코드 값을 가질 수 있다.
  2. 해쉬코드 값으로 배열의 인덱스를 찾는다.
  3. 각 인덱스에는 연결 리스트로 Value 가 관리된다. 같은 인덱스에 서로 다른 Value 가 있을 수 있기 때문에 연결리스트로 구현한다.

- Key / Value 탐색 값은 최악의 경우에 O(N) 이 되고, 일반적으로는 O(1) 이다.
- 연결리스트가 아닌 Balanced Binary Search Tree 로 구현이 가능하다. 이 경우에는 탐색이 O(Log N) 의 시간이 걸린다. 더 적은 공간을 사용한다는 이점과 탐색시에 Key 값이 정렬되어 있기 떄문에 빠르다.

## ArrayList
- Java 에서 배열은 초기 선언할 때 길이가 고정되어 있지만, 몇가지 언어에서는 유연하게 길이를 늘리거나 줄일 수 있다.
- ArrayList 는 배열 형식의 자료구조 이면서도 동적으로 길이를 변경할 수 있다.
- ArrayList 에서 데이터 삽입 시간은 O(1) 이다.

## StringBuilder
- 문자열 병합에 있어서 아래와 같은 구현은 O(n2) 의 시간이 걸린다.

``` java
String joinWords(String[] words) {
  String sentence = "";
  for ( String w : words ) {
    sentence = sentence + w;
  }
  return sentence;
}
```

- 단어를 입력받을 때 마다, 새로운 단어를 복제하여 대입하고. 대입한 후 에는 두 문자열을 더한 값이 복제가 된다.
- 따라서 첫 반복에는 x 개의 문자열을, 2번 쨰에는 2x 개의 문자열을, 3번 째는 3x 문자열을 복사한다.
- 결론적으로 전체 시간은 O(xn2) 이 된다.
- 이러한 문제를 String Builder 는 크기 조절이 가능한 문자열 배열로 해결한다.

``` java
String joinWords(String[] words) {
  StringBuilder sentence = new StringBuilder();
  for ( String w : words ) {
    sentence.append(w); // 위 예제와는 다르게 문자열을 append 만 하면 되므로, 복제가 불필요하게 각 연산마다 한번씩 더 일어나지 않는다.
  }
  return sentence.toString();
}
```
