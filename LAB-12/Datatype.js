function number(){
    let a=parseInt(prompt("Enter the frist Number="));
    let b=parseInt(prompt("Enter the second Number="));
    alert("avg of number");
    alert((a+b)/2);
}

function string(){
    var a = prompt("Enter Valid frist String");
    var b = prompt("Enter Vaild second String");
    var c = a+b;
    alert("concate two string");
    alert(c);
}

function date(){
    var date = new Date();
    console.log(date);
    alert("Print actual date");
    alert(date.toDateString());
    alert("Print actual Time");
    alert(date.toTimeString());
}

function math(){
    alert("min opertion = min(10,20,30)");
    alert(+Math.min(10,20,30));
    alert("max opertion = max(10,20,30)");
    alert(Math.max(10,20,30));
    alert("floor opertion = floor(10.5)");
    alert(Math.floor(10.5));
    alert("ceil operetion = ceil(10.5)");
    alert(Math.ceil(10.5));
    alert("round opertion = round(10.5)");
    alert(Math.round(10.5));
    alert("abs opertion = abs(-5)");
    alert(Math.abs(-5));
    alert("random opertion = random()");
    alert(Math.random());
    alert("sqrt opertion = sqrt(25)");
    alert(Math.sqrt(25));
    alert("cbrt opertion = cbrt(125)");
    alert(Math.cbrt(125));
    alert("poe opertion = pow(2,4)");
    alert(Math.pow(2,4));
}

function array(){
    var arr = ['Utsav','Bhavy','Jeet','jimmy'];

    alert(arr);
    alert("Push Opertion");
    arr.push('honey');
    alert(arr);
    alert("Pop opertion");
    arr.pop();
    alert(arr);

    alert("unshift opertion");
    arr.unshift('Happy');
    alert(arr);
    alert("shift opertion");
    arr.shift();
    alert(arr);

    alert("Array Length");
    alert(arr.length);


    var arr1 = [10,20,30,40];
    alert(arr1);
    alert("Find opertion");
    a = arr1.find(cont);
    alert(a);
    alert("Findindex opertion");
    b = arr1.findIndex(cont);
    alert(b);
    function cont(age){
        return age > 18;
    }

    alert("Concat two Array");
    var c = arr.concat(arr1);
    alert(c);

    alert("IndexOf Method");
    c = c.indexOf('Utsav');
    alert(c);

    alert("Includes Method");
    let result = arr.includes('Utsav',0);
    alert(result); 
    
    alert(arr);
    alert("slice method");
    var arr2 = arr.slice(1,3);
    alert(arr2);

    // splice(index,howmany delete, insert string);
    alert("splice method");
    alert(arr1);
    alert("using splice(1,0,50)");
    arr1.splice(1,0,50);
    alert(arr1);
    alert("using splice(1,2,50)");
    arr1.splice(1,2,50);
    alert(arr1);
}

function object(){
    //create object two ways

    //  frist one
    var person = new Object();
    person.fname = 'Utsav';
    person.lname = 'Desai';
    person.id = '20IT026';
    console.log(person);
        // two ways access data
        console.log(person['fname']);
        console.log(person.lname);

    //  second one
    var person1 = {
        fname : 'Utsav',
        lname : 'Desai',
        salary : function(){
            return 100000;
        },
        fullname : function(){
            return this.fname + " " + this.lname;
        },
        person2 : {
            id : '20IT26',
            email : '20it026@charusat.edu.in',
        }
    }

    alert(person1.fname);
    alert(person1.fullname());
    alert(person1.person2.email);
}