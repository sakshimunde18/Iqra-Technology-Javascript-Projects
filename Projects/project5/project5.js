function change1() {
    var m = document.getElementById("a1").value
    if (m == "Fruits") {
    var a = document.getElementById("f1").innerText = "Strawberry";
    var b= document.getElementById("f2").innerHTML = "Blueberry"
    var c=document.getElementById("f3").innerHTML = "Apple"
    var d= document.getElementById("f4").innerHTML = "Orange"
    }
    else {
    var a = document.getElementById("f1").innerText="Tomato";
    var b= document.getElementById("f2").innerHTML = "Potato" 
    var c= document.getElementById("f3").innerHTML = "Peas"
    var d= document.getElementById("f4").innerHTML = "Onion"
    }
    }
    function show(){ 
        var m=document.getElementById("a1").value
    if (m =="Fruits") { 
        var d= document.getElementById("fc").value
        var a =document.getElementById("sp1").innerText = "You Selected Food Type is : Fruits";
        var b = document.getElementById("sp2").innerText = "You Selected Item is : "+d;
    } 
    else {
    var d= document.getElementById("fc").value
    var a= document.getElementById("sp1").innerText = "You Selected Food Type is : Vegetable"; 
    var b= document.getElementById("sp2").innerText = "You Selected Item is: "+d;
    }
}