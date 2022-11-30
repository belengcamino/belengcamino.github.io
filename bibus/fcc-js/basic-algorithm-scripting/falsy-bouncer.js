function bouncer(arr) {
  let sol = [];
  for (let i = 0; i < arr.length; i++) {
    if (Boolean(arr[i])) {
      sol = sol.concat([arr[i]]);
    }
    sol = sol;
  }
  return sol;
}

console.log(bouncer([7, "ate", "", false, 9]));
