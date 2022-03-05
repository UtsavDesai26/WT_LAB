function Calculate(){
    x = parseInt(prompt("Enter the value of Principal"));
    y = parseInt(prompt("Enter the Rate"));
    z = parseInt(prompt("Enter the Time"));
    Interest = (x*y*z)/100;
    document.getElementById("p").innerHTML = x;
    document.getElementById("r").innerHTML = y;
    document.getElementById("t").innerHTML = z;
    document.getElementById("s").innerHTML = Interest;
}