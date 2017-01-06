// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});

function cakes(recipe, available) {
  // TODO: insert code
  var temp = {},
      tempArr = [],
      recipeIngredientNumber = 0,
      availableIngredientNumber = 0;

  for (var key in recipe) {
    if (available.hasOwnProperty(key) && available[key] >= recipe[key]) {
      temp[key] = 0;
      while (available[key] >= recipe[key]) {
        available[key] -= recipe[key];
        temp[key] += 1;
      }
      tempArr.push(temp[key]);
    } else {
      return 0;
    }
    recipeIngredientNumber += 1;
  }

  for (var key in available) {
    availableIngredientNumber += 1;
  }

  // if (recipeIngredientNumber < availableIngredientNumber) return 0;
  // console.log(temp);

  tempArr.sort();
  return tempArr[0];
}
