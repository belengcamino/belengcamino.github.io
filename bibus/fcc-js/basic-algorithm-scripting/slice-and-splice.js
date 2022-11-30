function frankenSplice(arr1, arr2, n) {
  let sol = [];
  for (let i = 0; i < n; i++) {
    sol = sol.concat([arr2[i]]);
  }
  sol = sol.concat(arr1);
  for (let i = n; i < arr2.length; i++) {
    sol = sol.concat([arr2[i]]);
  }
  return sol;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
