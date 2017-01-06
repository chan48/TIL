## 재귀 문제
- 주어진 문제가 재귀 문제인지 파악하는 가장 좋은 방법은 해당 문제의 부분 문제로 문제 해결이 가능한가를 파악하는 것
- 재귀 문제일 수 있는 문제 지시문들
  - "n번째를 계산하는 알고리즘을 짜라.."
  - "첫번째 n을 리스트업 하는.."
  - "다음 모든 조건을 계산하는 메서드를 구현하시오.."

## 재귀 문제를 접근하는 방법
- 더하거나 제거하여 f(n) 을 계산한다.
- 주어진 데이터 집합의 앞 절반을 계산하여 해결하고 난 후, 뒷 절반을 해결하고 나서. 두 집합을 병합한다.
- 재귀 문제를 접근하는 가장 흔한 방법은 다음 3가지다. Bottom-Up, Top-Down, Half-and-Half

#### Bottom-Up
- 가장 쉽고 단순한 부분부터 문제를 접근해나간다.
- 예를 들어 1개의 리스트와 1개의 요소, 그리고 2개의 요소 이런식으로 점진적으로 접근
- 이 접근법의 핵심은 이전 케이스로부터 또 다른 한 개의 케이스를 풀어나가는 관점이다.

#### Top-Down
- 케이스 N 에 대한 문제를 부분 문제들로 나눠서 해결한다.

#### Half-and-Half
- 데이터 집합을 절반으로 나눠 문제를 해결한다.
- 예) 이진 탐색 : 정렬된 트리에서 값을 찾을 때, 값이 어느 절반에 속해있는지를 알아내야 한다. 첫 절반을 찾으면, 다음에도 똑같이 또 다른 절반을 찾아야 한다. 이런식으로 계속 재귀.
- 예) 병합 정렬 : 배열의 절반을 정렬하고, 정렬된 다른 절반과 병합한다.

## 다이나믹 프로그래밍
- 동적 프로그래밍이란 재귀 알고리즘에서 반복적으로 겹치는 부분을 파악하여 다음 재귀 반복을 위해 캐쉬하는 것이다.
- 동적 프로그래밍의 가장 간단한 예는 피보나치 수열 계산이며, Memoization 을 이용하여 앞 Fib(0), Fib(1) 의 값을 저장한 후 재귀가 아닌 대입 연산 반복으로 실행속도를 빠르게 할 수 있다.

## 재귀 문제 런타임 계산 방법
- 재귀 반복 호출을 트리 형태로 나타내면 연산 숫자를 파악하기 편하다.

## 메모아이제이션 (Memoization)
- 동일한 연산을 반복수행 할 때, 이전에 계산한 값을 메모리에 넣어 (캐쉬) 프로그램 실행 속도를 빠르게 한다.