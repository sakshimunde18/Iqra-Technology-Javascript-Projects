var arr = ["./img/apple.png","./img/grapes.png","./img/pineapple.png","./img/watermelon.png"];
var arr1 = ["./img/strawberry.png","./img/mango.png","./img/pineapple.png","./img/watermelon.png","./img/apple.png","./img/grapes.png"];
var count = 0;
function first(){
for(var i=0;i<arr.length;i++){
    document.getElementById("display").innerHTML += `<img src="${arr[i]}">`; 
}
}
   

function push1(){
    document.getElementById("display").innerHTML = ""; 
    arr.push(arr1[count]);
    first();
    count++;
}

function unshift1(){
    document.getElementById("display").innerHTML = ""; 
    arr.unshift(arr1[count]);
    first();
    count++;
}
function insert(){
    var val = document.getElementById("s1");
    var val2 = val.options[val.selectedIndex].innerHTML;
    document.getElementById("display").innerHTML = ""; 
    arr.splice(val2,0,arr1[count]);
    first();
    count++;
}

function pop1(){
    document.getElementById("display").innerHTML = ""; 
    arr.pop();
    first();
    count++;
}

function shift1(){
    document.getElementById("display").innerHTML = ""; 
    arr.shift();
    first();
    count++; 
}

function remove(){
    var x = document.getElementById("s2");
    var x2 = x.options[x.selectedIndex].innerHTML;
    document.getElementById("display").innerHTML = ""; 
    arr.splice(x2,1);
    first();
    count++;
}
