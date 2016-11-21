# 단순선형회귀법과 다중선형회귀법

## Linear Regression (선형회귀법)
- 스칼라로 표현되는 종속변수 y 와 벡터 형식으로 표현되는 독립변수 X 간의 관계를 표현하기 위한 알고리즘
- 단순회귀분석 : 독립변수 X가 스칼라 값인 경우 (1차원 벡터)
- 회귀분석 : 관찰된 변수들에 대해 독립변수와 종속변수 사이의 관계를 나타내는 선형 관계식을 구하는 알고리즘. (독립변수가 바뀜에 따라 종속변수가 어떻게 변하는지를 분석) - *시간과 관계된 데이터, 예측, 인과관계 분석시에 자주 사용*

### statsmodels.api.OLS
- Python 라이브러리 statsmodels 의 알고리즘으로 summary 를 제공하며 분석하기 쉽도록 정보를 표시

  ``` python
  import statsmodels.api
  import numpy
  X = [1, 2, 3, 4, 5] # 1
  Y = [2, 3.7, 3.9, 5, 7]
  X = numpy.array(X).T # 2
  X = statsmodels.api.add_constant(X) # 3
  results = statsmodels.api.OLS(Y, X).fit()
  ```

- **결과 해석하기** : 회귀분석을 수행하고 나면, 각 독립변수에 대한 *계수 (coefficient)* 및 *P-value* 값을 확인할 수 있다.
- **계수 (coefficient, coef)** : 계수가 양이면 해당 변수가 종속변수에 양으로 연관되어 있고, 음이면 음으로 연관되어 있다. 계수 확인은 `results.params` 를 활용한다.
- **P-value** : 각 독립변수가 얼마나 종속변수에 영향을 미치는지 나타낸다. *정확히 말하면, 회귀분석에서 수행하는 테스트에서 P값은 독립변수의 계수가 0일 확률을 나타냅니다. 즉, P값이 작을수록 해당 독립변수가 모델에서 의미를 가지며, P값이 높을수록 해당 독립변수는 종속 변수에 영향을 끼치지 못하게 됩니다. 일반적으로, P값이 0.05 미만일 때 통계적으로 유의하다고 합니다.* 확인하는 방법은 `results.pvalues`

## 다중선형회귀법
- 단일선형회귀법은 독립변수 X가 스칼라인 값인 반면, 다중선형회귀법은 여러 차원을 가진 벡터값을 가지는 차이점이 있다.

### enumerate
- 순서가 있는 자료형 (list, tuple, string) 을 입력 받아 인덱스 값을 포함하는 enumerate 객체를 리턴한다.

  ``` python
  for i, name in enumerate(['1','2','3']):
    print (i,name)

  # 0 body
  # 1 foo
  # 2 bar
  ```
