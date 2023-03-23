var no = document.getElementById("delegate");

const arr1 = [];
const arr2 = [];
const arr3 = [];
const arr4 = [];
const priceArr = [];
const nameArr=[];

document.getElementById("delegate").addEventListener("change", function () {
  for (let i = 1; i <=no.value; i++) {
    document.getElementById("r1").innerHTML += ` <form>
        <div id="Repeat">
            <h2>DELEGATE - REGISTRATION DETAILS - ${i}</h2>
            <h3 style="font-size: 20px;">Please enter the details of the delegate that you wish to register</h3>
                <div class="fields">

                    <div class="input-field">
                        <label class="DSalutation" for="Salutations">Salutation</label>
                        <select name="salute" id="salute" value="">
                        <option value="select">Please Select...</option>
                            <option value="Mr">Mr</option>
                            <option value="Dr">Dr</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Er">Er</option>
                        </select>
                    </div>

                <div class="input-field">
                        <label for="dfname">Delegate First name:</label>
                        <input type="text" id="dfname" name="dfname" placeholder="Delegate First Name" required>
                </div>

                <div class="input-field">
                    <label for="dlname">Delegate Last name:</label>
                    <input type="text" id="dlname" name="dlname" placeholder="Delegate Last Name" required>
                </div>

                <div class="input-field">
                    <label for="demail">Delegate Email:</label>
                    <input type="email" id="demail" name="demail" placeholder="Enter Email" required>
                </div>

                <div class="input-field">
                    <label for="dtelephone">Delegate Telephone:</label>
                    <input type="Number" id="dtelephone" name="dtelephone" placeholder="Enter Telephone number" required>
                </div>

                <div class="input-field">
                    <label for="djob">Delegate Job Title:</label>
                    <input type="text" id="djob" name="djob" placeholder="Enter Job Title" required>
                </div>

                <div class="input-field">
                    <label for="dpass">Delegate Passport Number :</label>
                    <input type="text" id="dpass" name="dpass" placeholder="Enter your Passport Number" required>
                </div>
                </div>
            <div class="product">
                <h2>PRODUCT AND FEES</h2>
                <table style="width:100%">
        <tr>
            <td>
                <input name="All Access (Delegate)" class="check" type="checkbox" onchange="setPrice${i}(event)" value="5900" id="myCheck1">
                <label for="All Access (Delegate)">All Access (Delegate)</label>
            </td>
            <td>
                USD 5900
            </td>
        </tr>
        <tr>
            <td>
                <input name="Strategic Conference (Delegate)" class="check" type="checkbox" onchange="setPrice${i}(event)" value="5100" id="myCheck2">
                <label for="Strategic Conference (Delegate)">Strategic Conference (Delegate)</label>
            </td>
            <td>
                USD 5100
            </td>
        </tr>
        <tr>
            <td>
                <input name="Technical Conference Pass - 4 days (Delegate)" type="checkbox" onchange="setPrice${i}(event)" value="1858" id="myCheck3">
                <label for="Technical Conference Pass - 4 days (Delegate)">Technical Conference Pass - 4 days (Delegate)</label>
            </td>
            <td>
                USD 1858
            </td>
        </tr>
        <tr>
            <td>
                <input name="Technical Conference Pass - 2 days (Delegate)" type="checkbox" onchange="setPrice${i}(event)" value="1485" id="myCheck4" placeholder="">
                <label for="Technical Conference Pass - 2 days (Delegate)">Technical Conference Pass - 2 days (Delegate)</label>
            </td>
            <td>
                USD 1485
            </td>
        </tr>
        <tr>
            <td>
                <input name="Downstream Technical Conference Pass (Delegate)" type="checkbox" onchange="setPrice${i}(event)" value="1100" id="myCheck5">
                <label for="Downstream Technical Conference Pass (Delegate)">Downstream Technical Conference Pass (Delegate)</label>
            </td>
            <td>
                USD 1100
            </td>
        </tr>
    </table>
        </div>
        <div id="Container">
            <h2>PURCHASE SUMMARY</h2>
            <table>
                <tr>
                    <td id="tot">
                    </td>
                    <td>
                        (USD)
                    </td>
                    <td id="total">
                    </td>
                </tr>
            </table>
        </div>
        <button class="btn" onclick="total();" id="btn25">Grand Total</button>
        <input class="btn" id="btn1" type="button" onclick="second();" value="Next">
    </form>`;
  }
});

function second(){
    document.getElementById("r2").innerHTML = `<form>
    <div id="Container1">
        <div class="maindiv">
            <h1>
                Company Information :
            </h1>
            <div class="fields">

                <div class="input-field">
                    <label> Company Name :</label>

                    <input class="textinput" type="text" id="company" name="fname" value="">
                </div>
                <div class="input-field">
                    <label> Street :</label>

                    <input type="text" id="comstr" name="fstreet" value="">
                </div>
                <div class="input-field">
                    <label> Town/City :</label>

                    <input type="text" id="town" name="town" value="">
                </div>
                <div class="input-field">
                    <label> Country :</label>

                    <input type="text" id="country" name="country" value="">
                </div>
                <div class="input-field">
                    <label> Zipcode :</label>

                    <input id="zip" name="zip" type="text" inputmode="numeric" value="">
                </div>
                <div class="input-field">
                    <label> State :</label>

                    <input type="text" id="state" name="state" value="">
                </div>
            </div>
        </div>
        <h1>
            Billing Contact Info :
        </h1>

        <div class="fields">

            <div class="input-field">
                <label class="DSalutation" for="Salutations">Salutation</label>
                <select name="salute" id="salute" value="">
                    <option value="">Please Select...</option>
                    <option value="Mr">Mr</option>
                    <option value="Dr">Dr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Er">Er</option>
                </select>
            </div>

            <div class="input-field">
                <label for="Cfname">First name:</label>
                <input type="text" id="Cfname" name="Cfname" placeholder="First Name" value="" required>
            </div>

            <div class="input-field">
                <label for="clname">Last name:</label>
                <input type="text" id="clname" name="clname" placeholder="Last Name" value="" required>
            </div>

            <div class="input-field">
                <label for="cemail">Email:</label>
                <input type="email" id="cemail" name="cemail" placeholder="Enter Email" value="" required>
            </div>

            <div class="input-field">
                <label for="ctelephone">Telephone:</label>
                <input type="phone" id="ctelephone" name="ctelephone" placeholder="Enter Telephone number"
                    value="" required>
            </div>
            <div class="input-field"></div>
        </div>
        <div>
            <label for="vat">VAT Registered</label><br>
            <input type="radio" id="vatyes" name="vat" value="Yes">
            <label for="vatyes">Yes</label>
            <input type="radio" id="vatno" name="vat" value="No">
            <label for="vatyes">No</label>

            <div id="Container3">
                <div class="input-field">
                    <input type="text" id="vatnum" name="vatnum" value="" placeholder="Vat Number">
                </div>
            </div>

        </div>
    </div>
    <input class="btn" onclick="third();" type="button" id="submit" value="Submit">
</form>`;
}

function third(){

    document.getElementById("r3").innerHTML = `<table id="myTable">
    <tr>
        <th id="a1" colspan="3">No of Delegate : 1</th>

    </tr>
    <tr>
        <th class="b1">Salutation: </th>
        <th class="b1">Delegate First Name: </th>
        <th class="b1">Delegate Last name: </th>
    </tr>
    <tr>
        <td id="t1"></td>
        <td id="t2"></td>
        <td id="t3"></td>
    </tr>
    <tr>
        <th>Delegate Email: </th>
        <th>Delegate Telephone: </th>
        <th>Delegate Job title: </th>
    </tr>
    <tr>
        <td id="t4"></td>
        <td id="t5"></td>
        <td id="t6"></td>
    </tr>
    <tr>
        <th>Delegate Passport No: </th>
        <th id="a2" colspan="2">Product and Fees</th>
    </tr>
    <tr>
        <td id="t7"></td>
        <td colspan="2" id="t8"></td>
    </tr>
</table>`;

var x1 = document.getElementById("salute").value;
    document.getElementById("t1").innerText = x1;

var x2 = document.getElementById("dfname").value;
    document.getElementById("t2").innerText = x2;

 var x3 = document.getElementById("dlname").value;
    document.getElementById("t3").innerText = x3;

    var x4= document.getElementById("demail").value;
    document.getElementById("t4").innerText = x4;

    var x5 = document.getElementById("dtelephone").value;
    document.getElementById("t5").innerText = x5;

    var x6 = document.getElementById("djob").value;
    document.getElementById("t6").innerText = x6;

    var x7 = document.getElementById("dpass").value;
    document.getElementById("t7").innerText = x7;

    document.getElementById("t8").innerText = nameArr;    
}

function setPrice1(event){
    if(event.target.checked == true){
        arr1.push(event.target.value);
        nameArr.push(event.target.name);
    }
}
function setPrice2(event){
    if(event.target.checked == true){
        arr2.push(event.target.value);
        nameArr.push(event.target.name);
    }  
}
function setPrice3(event){
    if(event.target.checked == true){
        arr3.push(event.target.value);
        nameArr.push(event.target.name);
    }
}
function setPrice4(event){
    if(event.target.checked == true){
        arr4.push(event.target.value);
        nameArr.push(event.target.name);
    }
}

document.getElementById("btn25").addEventListener("click", (evt) =>{
    evt.preventDefault();       
});

function total(){
    console.log(arr1);

    let sum1 =0;
    for(let i=0;i<arr1.length;i++){
        sum1 = sum1+Number(arr1[i]);
    }
    let p1=sum1;
    priceArr.push(p1);

    let sum2 =0;
    for(let i=0;i<arr2.length;i++){
        sum2 = sum2+Number(arr2[i]);
    }
    let p2=sum2;
    priceArr.push(p2);

    let sum3 =0;
    for(let i=0;i<arr3.length;i++){
        sum3 = sum3+Number(arr3[i]);
    }
    let p3=sum3;
    priceArr.push(p3);

    let sum4 =0;
    for(let i=0;i<arr4.length;i++){
        sum4 = sum4+Number(arr4[i]);
    }
    let p4=sum4;
    priceArr.push(p4);

    var total1 = 0;
    for(let i=0;i<priceArr.length;i++){
        total1 += priceArr[i];
    }
    console.log(total1);

    document.getElementById("total").innerHTML = `Grand Total :${total1}`; 
    document.getElementById("tot").innerHTML = ` Total :${sum1}`; 
}