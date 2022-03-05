function sum(){
    x = parseInt(prompt("Enter the frist value = "));
    y = parseInt(prompt("Enter the Second value = "));
    sum = x+y;
    alert(sum);
    document.getElementById("u1").innerHTML = x;
    document.getElementById("u2").innerHTML = y;
    document.getElementById("u3").innerHTML = sum;    
}