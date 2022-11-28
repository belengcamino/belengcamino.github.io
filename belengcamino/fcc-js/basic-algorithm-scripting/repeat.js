function repeatStringNumTimes(str, num) {
    if (num<=0) {
      return ""
    }
    else {
      let solve = "";
      for (let i = num; i>0; i--) {
        solve = solve + str
      }
      return solve
    };
  }
  
  repeatStringNumTimes("abc", 3);