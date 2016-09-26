# (번역) 알고리즘을 쉬운 영어로 : 시간 복잡도와 Big-O 표기
> 오늘 번역글은 medium 의 freecodecamp 글입니다.
> 알고리즘, 시간 복잡도, Big-O 를 사례를 들어가며 이해하기 쉽게 풀어서 설명된 글입니다.
> [원문](https://medium.freecodecamp.com/time-is-complex-but-priceless-f0abd015063c#.j7h5s1m2p) 의 모든 부분을 번역하지는 않습니다. 주요 부분만 발췌하여 번역합니다.

## 서론
- 모든 개발자는 자신만의 시간 관념이 있습니다. 개발자들은 대부분의 시간을 사용자들에게 쏟아붓기 때문에, 최대한 시간을 효율적으로 사용하고 싶어하죠. **시간복잡도** 를 최소화 함으로써 이게 실현가능해집니다.
- 프로그래밍에서 시간복잡도를 이해하기 전에, 먼저 이 시간복잡도가 알고리즘에서 흔하게 활용된다는 사실을 기억해야합니다.

## 그래서 알고리즘은 뭔가요?
> Algorithm is a series of contained steps which you follow in order to achieve some goal, or to produce some output

- 알고리즘은 **어떤 목적을 달성하거나 결과물을 만들어내기 위해 거쳐야 하는 일련의 과정들을 의미**합니다.
- 할머니가 케이크를 만드는 과정을 알고리즘으로 표현해보자면,

  ``` javascript
  function BakeCake(flavor, icing){
    /*
     1. Heat Oven to 350 F
     2. Mix flour, baking powder, salt
     3. Beat butter and sugar until fluffy
     4. Add eggs.
     5. Mix in flour, baking powder, salt
     6. Add milk and " + flavor + "
     7. Mix further
     8. Put in pan
     9. Bake for 30 minutes
    10." + if(icing === true) return 'add icing' + "
    10. Stuff your face
    */
  }
  BakeCake('vanilla', true) => deliciousness
  ```

- 알고리즘은 각기 다른 모양과 형태를 지니고 있기에, 타임 복잡도를 설명하는데 자주 사용됩니다.
- 애플파이 한 개를 100 가지 방법으로 자를 수 있는 것처럼, *한 문제를 여러가지의 알고리즘으로 풀 수 있습니다*.
- *시간복잡도를 분석* 하는 것은 **input n 에 대하여 알고리즘이 문제를 해결하는 데에 얼마나 오랜 시간이 걸리는 지를 분석하는 것** 과 같습니다. 그리고 이는 `Big-O 표기` 를 이용하여 정의할 수 있습니다.

## Big-O 표기란?
> Big-O notation is a way of converting the overall steps of an algorithm into algebraic terms, then excluding lower order constants and coefficients that don’t have that big an impact on the overall complexity of the problem.

- 개발자들에게는 위의 사전식 정의보다는 아래의 정의가 더 와닿을 겁니다.

  ``` text
  Regular       Big-O
  2             O(1)   --> It's just a constant number
  2n + 10       O(n)   --> n has the largest effect
  5n^2          O(n^2) --> n^2 has the largest effect
  ```

- 이 예제가 의미하는 것은 다음과 같습니다. **시간복잡도에서 중요한 것은 정해진 표현식에 가장 큰 영향을 미치는 n 의 단위이다**
- 대표적인 시간 복잡도들을 간단하게 정의해봅니다.
  1. **O(1) - 상수 시간** : 입력값 n 이 주어졌을 때, 알고리즘이 문제를 해결하는데 오직 한 단계만 거칩니다.
  2. **O(log n) - 로그 시간** : 입력값 n 이 주어졌을 때, 문제를 해결하는데 필요한 단계들이 연산마다 특정 요인에 의해 줄어듭니다.
  3. **O(n) - 직선적 시간** : 문제를 해결하기 위한 단계의 수와 입력값 n이 1:1 관계를 가집니다.
  4. **O(n^2) - 2차 시간** : 문제를 해결하기 위한 단계의 수는 입력값 n의 제곱입니다.
  5. **O(C^n) - 지수 시간** : 문제를 해결하기 위한 단계의 수는 주어진 상수값 C 의 n 제곱입니다.

- 위 정의를 가지고 아래 예제의 시간복잡도를 계산해보겠습니다.

  ``` text
  var n = 16; -- 입력값 n 이 16일 때
  O (1) = 1 step "(awesome!)" -- O(1)는 시간복잡도가 1입니다.
  O (log n) = 4 steps  "(awesome!)" -- O(log n)는 시간복잡도가 4입니다. (log 의 밑이 2라고 가정)
  O (n) = 16 steps "(pretty good!)" -- O(n)는 시간복잡도가 16
  O(n^2) = 256 steps "(uhh..we can work with this?)" -- O(n^2)는 시간복잡도가 256
  O(2^n) = 65,536 steps "(...)"
  ```

- 위와 같은 시간복잡도 계산을 코드에 적용해봅니다.

  ``` javascript
  // 아래와 같은 데이터 구조 기준으로 시간복잡도를 적용해봅니다.
  var friends = {
    'Mark' : true,
    'Amy' : true,
    'Carl' : false,
    'Ray' :  true,
    'Laura' : false,
  }
  var sortedAges = [22, 24, 27, 29, 31]
  ```

#### O(1) — Constant Time (상수 시간)
- 값을 검색할 때, 객체에서 키를 알거나 배열에서 인덱스를 알고 있으면 언제나 한 단계만 걸립니다.

  ``` javascript
  //If I know the persons name, I only have to take one step to check:
  function isFriend(name){ //similar to knowing the index in an Array
    return friends[name];
  };
  isFriend('Mark') // returns True and only took one step
  function add(num1,num2){ // I have two numbers, takes one step to return the value
   return num1 + num2
  }
  ```

#### O(log n) — Logarithmic Time (로그 시간)
- 배열에서 값을 찾을 때, 어느 쪽에서 시작할지를 알고 있으면 검색하는 시간이 두배로 줄어듭니다.

  ```javascript
    //You decrease the amount of work you have to do with each step
    function thisOld(num, array){
      var midPoint = Math.floor( array.length /2 );
      if( array[midPoint] === num) return true;
      if( array[midPoint] < num ) // only look at second half of the array
      if( array[midpoint] > num ) // only look at first half of the array
      //recursively repeat until you arrive at your solution

    }
    thisOld(29, sortedAges) // returns true
    //Notes
    //There are a bunch of other checks that should go into this example for it to be truly functional, but not necessary for this explanation.
    //This solution works because our Array is sorted
    //Recursive solutions are often logarithmic
    //We'll get into recursion in another post!
  ```

#### O(n) — Linear Time (직선적 시간)
- 배열에서 모든 값을 검색하는 것은 직선적 시간입니다. 이와 마찬가지로 **for loops** 또는 **indexOf** 는 항상 linear 한 시간복잡도를 갖습니다.

  ``` javascript
  //The number of steps you take is directly correlated to the your input size
  function addAges(arr){
    var sum = 0;
    for (var i=0 ; i < arr.length; i++){  //has to go through each value
      sum += arr[i]
    }
   return sum;
  }
  addAges(sortedAges) //133
  ```


#### O() — Quadratic Time (2차 시간)
- 중첩된 **for loops** 는 2차 시간을 갖습니다.

  ``` javascript
  // The number of steps you take is your input size squared
  function addedAges(arr){
    var addedAge = [];
      for (var i=0 ; i < arr.length ; i++) {
        for (var j=i+1 ; j < arr.length ; j++) {
          addedAge.push(arr[i] + arr[j]);
        }
      }
    return addedAge;
  }
  addedAges(sortedAges);
  ```

#### O(2^n) — Exponential Time (지수 시간)
- 지수 시간은 보통 문제를 풀기 위해 모든 조합과 방법을 시도할 때 사용됩니다.

  ``` text
  //The number of steps it takes to accomplish a task is a constant to the n power
  //Thought example
  //Trying to find every combination of varters for a password of length n
  ```

## 마무리
> it’s hard to say there is a single “right” or “best” answer to these problems. But it is possible to say there are “better” or “worse” answers to a given problem.

- 문제를 해결하려고 할 때마다 시간복잡도를 분석하는 습관을 들이면 좋은 개발자가 될 수 있습니다.
- 엔지니어에게 있어서, **문제라는 것은 정답이나 최선의 답의 관점에서 접근하는 것보다, 상황에 더 맞는 답인지 아닌지의 관점에서 접근해야 합니다.**
- 마지막으로 한번 더 요약합니다.
  1. **O(1) - 상수 시간** : 알고리즘이 문제를 해결하는데 오직 한 단계만 거칩니다.
  2. **O(log n) - 로그 시간** : 문제를 해결하는데 필요한 단계들이 연산마다 특정 요인에 의해 줄어듭니다.
  3. **O(n) - 직선적 시간** : 문제를 해결하기 위한 단계의 수와 입력값 n이 1:1 관계를 가집니다.
  4. **O(n^2) - 2차 시간** : 문제를 해결하기 위한 단계의 수는 입력값 n의 제곱입니다.
  5. **O(C^n) - 지수 시간** : 문제를 해결하기 위한 단계의 수는 주어진 상수값 C 의 n 제곱입니다. (상당히 큰수가 됩니다)
