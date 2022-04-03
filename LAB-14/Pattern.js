function WithPattern() {
    let pattern = /M.d[a-z]+y/;
    alert(
      "Pattern is First char is M and third char is d and last char is y."
    );
    let word = prompt("Enter any word");
    if (pattern.test(word)) 
      alert("Valid Pattern");
    else 
      alert("Invalid Pattern");
  }
  