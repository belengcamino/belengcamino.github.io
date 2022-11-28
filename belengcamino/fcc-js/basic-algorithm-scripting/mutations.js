function mutation(arr) {
  let str1 = arr[0].toLowerCase()
  let str2 = arr[1].toLowerCase()
  for (let i = 0; i < str2.length; i++) {
    if (!str1.includes(str2[i])) {
      return false
    }
  }
  return true
}

mutation(["hello", "hey"]);