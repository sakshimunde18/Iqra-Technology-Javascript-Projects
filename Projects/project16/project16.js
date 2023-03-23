async function loadUsers(){
let userList=document.getElementById("userList");
let response= await fetch("https://api.github.com/users");
let users=await response.json();
let ul=document.createElement("ul");
for(const user of users){
    // ul.style.listStyleType="none";
    let li=document.createElement("li");
    let div1=document.createElement("div");
    div1.style.float="left";
    div1.innerHTML =
    "<h2><button onclick=\"showUserDetail(`" +
    user.login + 
     "`)\">" +
     user.login +
    "</button></h2>";
    let div2=document.createElement("div");
    div2.style.float="right";
    //div2.style.paddingTop="20px";
    //div2.style.paddingRight="50px";
    div2.innerHTML=`<img 
                   height="50px"
                   src ="${user.avatar_url}"
                   alt="${user.login}"
                   />`;
    let hr = document.createElement("hr");
    li.appendChild(div1);
    li.appendChild(div2);
    li.appendChild(hr);
    ul.appendChild(li);
   //document.write(user.avatar_url);
}
userList.appendChild(ul);
}
async function showUserDetail(login){
    let userDetail = document.getElementById("userDetail");
    userDetail.innerHTML="";
    let url= "https://api.github.com/users/" + login;
    let userResponse= await fetch(url);
    let userData= await userResponse.json();
    let content=`<div>
                <h2>${userData.name}</h2>
                <p>${userData.id}</p>
                <img 
                src="${userData.avatar_url}"
                alt="${userData.id}"
                  />
                </div>`;
    userDetail.innerHTML = content;
//     userDetail.innerHTML= `<div>
//     <h2>${userData.name}</h2>
//     <p>${userData.id}</p>
//     <img
//     src="${userData.avatar_url}"
//     alt="${userData.id}"
//     />
//     </div>`;
//    userDetail.innerHTML=content;
}
loadUsers();
