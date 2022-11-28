function chunkArrayInGroups(arr, size) {
  let sol = [];
  for (let i = 0; i < arr.length; i = i + size) {
    sol.push(arr.slice(i,i+size))
  }
  return sol;
}

