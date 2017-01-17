
var list = [
  {a: 1, b: 3},
  {a: 3, b: 2},
  {a: 2, b: 40},
  {a: 4, b: 12}
];

function sortList (sortBy, list) {
  return list.sort(function (a, b) {
    return b[sortBy] - a[sortBy];
  });
}
sortList("a", list)

// Made a test case, but it didn't work out
Test.assertEquals(sortList("a",[
  {a: 1, b: 3},
  {a: 3, b: 2},
  {a: 2, b: 40},
  {a: 4, b: 12}
]),[
  {a: 4, b: 12},
  {a: 3, b: 2},
  {a: 2, b: 40},
  {a: 1, b: 3}
]);

// Best Solution
function sortList (sortBy, list) {
  return list.sort(function(a, b){
    return a[sortBy] < b[sortBy];
  })
}
