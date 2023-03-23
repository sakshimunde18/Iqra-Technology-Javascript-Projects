var cvvnum = 0;
        var cardn;
        var cardno;
        var cardtypee;
        var exp;
        var pt;
        function section() {
            var b = document.getElementById("section").style.display = "block";
        }
        function cradit(){
            const date = new Date();
                let day = date.getDate();
                let month = date.getMonth() + 1;
                let year = date.getFullYear();
                let currentDate = `${day}-${month}-${year}`;
            var f = document.getElementById("warning1").style.color = "red";    
            var a = document.getElementById("date").innerHTML = currentDate;
            var b = document.getElementById("aff").style.display = "block";
            var c = document.getElementById("aee").style.display = "none";
            var e = document.getElementById("agg").style.display = "block";
            var h = document.getElementById("ahh").style.display = "none";
        }
        function upi(){
            var f = document.getElementById("warning2").style.color = "red";  
            var a = document.getElementById("ahh").style.display = "block";
            var b = document.getElementById("aff").style.display = "block";
            var c = document.getElementById("aee").style.display = "none";
            var e = document.getElementById("agg").style.display = "none";
        }
        function account(){
            var a = document.getElementById("ahh").style.display = "none";
            var b = document.getElementById("aff").style.display = "block";
            var c = document.getElementById("aee").style.display = "block";
            var d = document.getElementById("warning").style.color = "red"
        }
        function cvv1(){
            var a = Math.floor(Math.random()*1000);
            cvvnum = a;
            var b = document.getElementById("warning").innerHTML = "successfully validate your cvv is :"+a;
            var d = document.getElementById("warning").style.color = "green"
        }
        function cvv2(){
            var a = Math.floor(Math.random()*1000);
            cvvnum = a;
            var b = document.getElementById("warning1").innerHTML = "successfully validate your cvv is :"+a;
            var d = document.getElementById("warning1").style.color = "green"
        }

        function cvv3(){
            var a = Math.floor(Math.random()*1000);
            cvvnum = a;
            var b = document.getElementById("warning2").innerHTML = "successfully validate your cvv is :"+a;
            var d = document.getElementById("warning2").style.color = "green"
        }

        function validation1(){
            var rge = /[0-9]/;
            var Accountnumber = document.getElementById("accno");
            var Accountname = document.getElementById("accname");
            var Accountnumber2 = document.getElementById("accno2");
            var AccountIFSC = document.getElementById("accifsc");
            var Accbranch = document.getElementById("accbranch");

            var num = rge.test(Accountnumber.value);
            var num2 = rge.test(Accountnumber2.value);
            var num3 = rge.test(AccountIFSC.value);

            if(num > 0 && num <= 16 ){ 
                var Accountnumberb = document.getElementById("accno").style.border = "2px solid green"
                if(Accountnumber.value == Accountnumber2.value){
                    if(num3 > 0 && num3 <= 10){
                        cvv1();
                    }
                    else{
                        var b = document.getElementById("warning").innerHTML = "Please enter proper IFSC code";
                    }
                    
                }
                else{
                    var b = document.getElementById("warning").innerHTML = "Account numbers are not matching";
                }
            }
            else{
                var b = document.getElementById("warning").innerHTML = "Please enter proper account number";
                }

        }
        function validation2(){
            var rge = /[0-9]/;
            var cardnumber = document.getElementById("cardNumber2")
            var cardname = document.getElementById("cardName2")

            var num = rge.test(cardnumber.value);
            if(num > 0 && num <= 16 ){ 
                var cardnumber = document.getElementById("cardNumber2").style.border = "2px solid green"
                cvv2();
            }
            else{
                var b = document.getElementById("warning1").innerHTML = "Please enter proper card number";
                var cardnumber = document.getElementById("cardNumber2").style.border = "2px solid red"
            }
        }
        function validation3(){
            var rge = /[0-9]/;
            var upinumber = document.getElementById("upino").value
            var upiname = document.getElementById("upiname").value

            var num = rge.test(upinumber);
            if(num > 0 && num <= 16 ){ 
                var upinumber = document.getElementById("upino").style.border = "2px solid green"
                cvv3();
            }
            else{
                var b = document.getElementById("warning2").innerHTML = "Please enter proper upi number";
                var cardnumber = document.getElementById("upino").style.border = "2px solid red"
            }
        }
        function submit1(){
            cardn = document.getElementById("accname").value;
            cardno = document.getElementById("accno").value;
            var acccvv = document.getElementById("acccvv").value;
            var acname = document.getElementById("accname")
            var acno = document.getElementById("accno")
            if(acccvv == cvvnum){
                var tb = document.getElementById("tbody").innerHTML += ` <tr>
                            <td>${acname.value}</td>
                            <td>Account Payment</td>
                            <td><button onclick="showdetails1()" class="action">Full Details</button><button onclick="removee()" class="action">Remove</button></td>
                        </tr>`
                
                       var a = document.getElementById("accname").value = "";
                       var b = document.getElementById("accno").value = "";
                       var e = document.getElementById("accno2").value = "";
                       var f = document.getElementById("accifsc").value = "";
                       var g = document.getElementById("accbranch").value = "";
                       var c = document.getElementById("acccvv").value = "";
                       var d = document.getElementById("warning").innerHTML = "Your Details are saved";
            }
            else{
                var b = document.getElementById("warning").innerHTML = "Transaction Failed";
                var c = document.getElementById("warning").style.color = "red";
            }    
            
        }

        function submit2() {
            cardn = document.getElementById("cardName2").value;
            cardno = document.getElementById("cardNumber2").value;
            cardtype = document.getElementById("valuess")
            var i = cardtype.options[cardtype.selectedIndex].innerHTML
            cardtypee = i
            exp = document.getElementById("date").innerText;
        // var pt;
            var cardnumber = document.getElementById("cvv2").value
            var cardname = document.getElementById("cardName2")
            if(cardnumber == cvvnum){
                var tb = document.getElementById("tbody").innerHTML += ` <tr>
                            <td>${cardname.value}</td>
                            <td>Debit/Credit Card</td>
                            <td><button onclick="showdetails2()" class="action">Full Details</button><button onclick="removee()" class="action">Remove</button></td>
                        </tr>`
                
                       var a = document.getElementById("cardName2").value = "";
                       var b = document.getElementById("cardNumber2").value = "";
                       var c = document.getElementById("cvv2").value = "";
                       var d = document.getElementById("warning1").innerHTML = "Your Card is saved";
            }
            else{
                var b = document.getElementById("warning1").innerHTML = "Transaction Failed";
                var c = document.getElementById("warning1").style.color = "red";
            }
            
        }

        function submit3(){
            cardn = document.getElementById("upiname").value;
            cardno = document.getElementById("upino").value;
            var upicvv = document.getElementById("upicvv").value;
            if(upicvv == cvvnum){
                var tb = document.getElementById("tbody").innerHTML += ` <tr>
                            <td>${upiname.value}</td>
                            <td>UPI Payment</td>
                            <td><button onclick="showdetailss3()" class="action">Full Details</button><button onclick="removee()" class="action">Remove</button></td>
                        </tr>`
                    var a = document.getElementById("upiname").value = "";
                    var b = document.getElementById("upino").value = "";
                    var c = document.getElementById("upicvv").value = "";
                    var d = document.getElementById("warning2").innerHTML = "Your UPI details are saved";       
            }
            else{
                var b = document.getElementById("warning2").innerHTML = "Transaction Failed";
                var c = document.getElementById("warning2").style.color = "red";
            }
        }
        document.getElementById("btnn2").addEventListener("click", (evt) =>{
            evt.preventDefault();       
        })

        document.getElementById("bt1").addEventListener("click", (evt) =>{
            evt.preventDefault();        
        })
        document.getElementById("bt2").addEventListener("click", (evt) =>{
            evt.preventDefault();        
        })
        
        document.getElementById("btnn3").addEventListener("click", (evt) =>{
            evt.preventDefault();        
        })
        document.getElementById("bt3").addEventListener("click", (evt) =>{
            evt.preventDefault();        
        })
        document.getElementById("btnn1").addEventListener("click", (evt) =>{
            evt.preventDefault();        
        })
       function showdetails1(){
        var td = document.getElementById("details").innerHTML += ` <p>Card number is : ${cardno}</p>
            <p>Name is : ${cardn}</p>
            <p>Account Number : ${cardno}</p>
            <p>PType : Account Payment</p>
            <hr></hr>`
        }
       

        function showdetails2(){
            var td = document.getElementById("details").innerHTML += ` <p>Card number is : ${cardno}</p>
            <p>Name is : ${cardn}</p>
            <p>Selected CardType : ${cardtypee}</p>
            <p>CardExpiry :${exp}</p>
            <p>PType : Credit/Debit Card</p>
            <hr></hr>`
        }
        function showdetailss3(){
            var td = document.getElementById("details").innerHTML += ` <p>UPI number is : ${cardno}</p>
            <p>Name is : ${cardn}</p>
            <p>PType : UIP Payment </p>
            <hr></hr>`
        }
        function removee(){
            var tb = document.getElementById("tbody").innerHTML = ` <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>`
             var d = document.getElementById("warning1").innerHTML = "";            
        }