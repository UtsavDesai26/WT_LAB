let val = parseInt(prompt("Enter the Number="));
let num = "";

for(var i=1;i<=val;i++){
    num += i+"<br>";
    console.log(i);
}

document.getElementById('Number').innerHTML = num;