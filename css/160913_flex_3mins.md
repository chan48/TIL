# CSS flex box 3분만에 배우기
> 이 글을 통해 CSS 의 flexbox 레이아웃에서 가장 기본적이고 중요한 컨셉을 배웁니다.

## The container and the item
- flex box 레이아웃에서 가장 중요한 컴포넌트 두 개는 **container(파랑)** 와 **items(빨강)** 입니다.
- 이 컴포넌트들을 이용하여 예제를 설명하겠습니다.

### 수평 레이아웃
- **container** 에 아래와 같이 CSS 를 줍니다.

  ``` css
  .container {
    display: flex;
  }
  ```

- 위 결과는 아래와 같습니다.

  ![이미지 1]
  여기서 주의할 점은 **items** 는 전혀 손대지 않고도, 알아서 수평축을 따라 정렬됩니다.

### 수직 레이아웃
- 위 이미지를 보면, 중심축은 수평축이고 교차축은 수직축입니다.
- 아래처럼 `flex-direction: column` 을 추가하면 이 두 개의 축을 전환할 수 있습니다.

  ```css
  .container {
    display: flex;
    flex-direction: column;
  }
  ```

  ![이미지 2]
  이제 중심축은 수직축이고, 교차축이 수평입니다. 따라서 위처럼 items 이 수직으로 정렬되어 쌓입니다.

## Justify content and Align items
- 위 **items** 을 다시 수평으로 만들려면, `flex-direction` 을 *column* 에서 *row* 로 바꾸면 됩니다.
- 축을 이해해야하는 중요한 이유는 `justify-content` 나 `align-items` 와 같은 속성들은, 중심축과 교차축에 기준하여 **items** 을 정렬하기 때문입니다.
- `justify-content` 를 이용하여 **items** 들을 중심축의 중앙에 정렬해봅니다.

  ```css
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  ```

  ![이미지 3]

- 이제, `align-items` 를 이용하여 교차축의 중앙에 정렬해봅니다.

  ```css
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  ```

  ![이미지 4]

- `justify-content` 와 `align-items` 의 속성 값은 아래와 같습니다.

### justify-content:
- flex-start(default)
- flex-end
- center
- space-between
- space-around

### align-items:
- flex-start(default)
- flex-end
- center
- baseline
- stretch

## Items
- 축에 따른 전체적인 정렬 말고도, 각각의 아이템에 CSS 효과를 줄 수 있습니다.
- 아래는 `align-self` 속성을 이용하여 첫 번째 *item* 의 위치를 조정한 것입니다.

  ```css
  .item1 {
    align-self: flex-end;
  }
  /* align-self 는 align-item 속성과 같은 옵션 값들을 가진다. */
  ```

  ![이미지 5]

## Conclusion
- 위의 3가지 컨셉이 CSS flex-box 를 이해하는데 있어 가장 중요하고 응용하는데 사용된다.
- 이 글의 [원문](https://medium.com/learning-new-stuff/learn-css-flexbox-in-3-minutes-c616c7070672#.zfen6feaj)
