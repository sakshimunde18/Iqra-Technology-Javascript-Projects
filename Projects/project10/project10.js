// let BaseAmt=document.getElementById("inp1").value;
// let Interest=document.getElementById("inp2").value;

 let a=Number(prompt("enter a baseAmount"))
 let b=Number(prompt("enter a interest"))

const arr =["january","february","march","april","may","june","july","jully","august","september","october","november","december"];
for(let i=0;i<arr.length;i++){
	let InterestRate=(a*b)/100;
		a+=InterestRate;
		// console.log(`${arr[i]}--${InterestRate}--${a}`);
		document.getElementById("tbody").innerHTML+=`
		<tr>
		<td>${arr[i]}</td>
		<td>${InterestRate}</td>
		<td>${a}</td>
		</tr>
		`
	}

