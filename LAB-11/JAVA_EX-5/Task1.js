var val = parseInt(prompt("Enter Number: "));
let element = document.getElementById('js_val');

if(val%2 == 0){
    element.innerHTML = val+" is Even";
    element.style.color = 'green';
}
else{
    element.innerHTML = val+" is Odd";
    element.style.color = 'red';
}