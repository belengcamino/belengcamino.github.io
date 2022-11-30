function truncateString(str, num) {
    let sol="";
    if (num>=str.length) {
      return str
    }
    for (let i = 0; i<num; i++) {
      sol=sol+str[i]
    }
    return sol+"...";
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);
  console.log("abc"[3])