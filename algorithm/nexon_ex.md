## list & tuple 이해
- 데이터를 순차적으로 저장하는 저장소 (또는, 배열 & 자료구조)

## input()
- 파이썬 콘솔에 입력되는 값들을 인식하여 저장할 수 있다.
- 사용법

  ``` python
  textinput = input() # 코딩하면, 아래에 입력 값을 받을 수 있게끔 줄 바뀜이 일어난다.
  'hello' # 원하는 문자열 값을 넣는다 (주의 : 따옴표 꼭 입력)
  print (textinput) # hello
  ```

## split()
- 해당 변수를 split() 의 괄호 안에 지정되는 값으로 쪼개어 list로 저장한다.
- 사용법

  ``` python
  re = "dizni kephi"
  re.split()
  print (re) # ['dizni', 'kephi']
  ```

## for in
- 자주 쓰이는 반복문의 한 종류로 직관적인 것이 특징
- 기본 구조

  ```
  for 변수 in 리스트(또는, 튜플 문자열 가능):
    수행할 문장1
    수행할 문장2
  ```

## list 와 for
- list 안에 for 문을 포함하면 편리하고 직관적이다.

  ``` python
  relations = [input().split() for y in range(10)] # range(10) 은 0부터 10 미만의 숫자인 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] 를 포함하는 list 를 반환한다.

  # 문자열 입력값이 아래와 같을 때,
  # kephi dizni
  # bazzi gabriel
  # evan gabriel
  # marid evan
  # pungjin dizni
  # evan bazzi
  # marid fiona
  # fiona gabriel
  # pungjin kephi

  # 아래와 같은 형태로 relations에 저장된다.
  # [['kephi', 'dizni'], ['bazzi', 'gabriel'], ['evan', 'gabriel'], ['marid', 'evan'], ['pungjin', 'dizni'], ['evan', 'bazzi'], ['marid', 'fiona'], ['fiona', 'gabriel'], ['pungjin', 'kephi']]
  ```

## string 값 비교
- `is` :
- `==` :
