function getIndexToIns(arr, num) {
  arr.sort((a, b) => {
  if(a == b) {
    return 0; 
  }
  if(a < b) {
    return -1;
  }
  return 1;
  });

  for (let i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      return i;
    }
    
  }
  return arr.length;
}
let one = [5, 3, 20, 3];
console.log(one.sort((a, b) => {
  if(a == b) {
    return 0; 
  }
  if(a < b) {
    return -1;
  }
  return 1;
}));

getIndexToIns([40, 60], 50);
