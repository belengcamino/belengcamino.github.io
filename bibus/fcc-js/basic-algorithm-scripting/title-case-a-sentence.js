function titleCase(str) {
  let arr = ""
  for (let i = 1; i < str.length; i++) {
    if (str[i-1] == " ") {
      arr = arr + str[i].toUpperCase()
    }
    else {
      arr = arr + str[i].toLowerCase()
    }
  }
  return str[0].toUpperCase()+arr;
}

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
