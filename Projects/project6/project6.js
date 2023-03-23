const name1 = document.querySelector("#sname");
const po = document.querySelector("#val");
const po1 = document.querySelector("#val1");
const amt1 = document.querySelector("#amount");
const status1 = document.querySelector("#status");
const e = document.querySelector(".error");
const sub = document.querySelector("#btn2");


function getValidation(){
    var Regex = /[0-9]/;
    var valid = Regex.test(po.value);
    var amt = Regex.test(amt1.value);

    if(name1.value.length <= 5 || name1.value.length >= 15){
         e.innerHTML = "Name should be 5-15 characters!";
         e.style.color = "red";
         name1.style.border = "2px solid red";
   }
   else if(!valid){
    name1.style.border = "2px solid green";
    po.style.border = "2px solid red";
    e.innerHTML = "Please enter numbers only!";

   }
   else if(po.value != po1.value){
    po.style.border = "2px solid green";
    e.innerHTML = "Please re-enter same PO value";
    po1.style.border = "2px solid red";
   }
   else if(!amt){
    po1.style.border = "2px solid green";
    e.innerHTML = "Please enter numbers only";
    amt1.style.border = "2px solid red";
   }
   
   else{
    e.innerHTML = "";
    name1.style.border = "2px solid green";
    po.style.border = "2px solid green";
    po1.style.border = "2px solid green";
    amt1.style.border = "2px solid green";
    status1.placeholder = "Success";
    status1.style.border = "2px solid green";
    sub.style.display = "Block";
   }
   
}

sub.addEventListener('click', () =>{
   if(status1.placeholder == "Success"){
    document.querySelector(".tbody").innerHTML += `
    <tr>
    <td>${name1.value}</td>
    <td>${po.value}</td>
    <td>${amt1.value}</td>
    <td>Success</td>
    </tr>
    `
    name1.style.border = "";
    po.style.border = "";
    po1.style.border = "";
    amt1.style.border = "";
    status1.placeholder = "Fail";
    status1.style.border = "";
   

    name1.value = "";
    po.value = "";
    po1.value = "";
    amt1.value= "";
   

   }
})
