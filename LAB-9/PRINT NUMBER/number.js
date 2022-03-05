function Print(){
    x = parseInt(prompt("Enter the Number ="));
    let n = "";
    for(i=1;i<=x;i++){
        n = n+i+"<br>"
    }
    document.getElementById("number").innerHTML = n;
}