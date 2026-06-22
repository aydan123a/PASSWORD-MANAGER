let passwords=JSON.parse(localStorage.getItem("passwords"))||[];

function savePassword(){
let site=document.getElementById("site").value;
let password=document.getElementById("password").value;

if(site==""||password=="")return;

passwords.push({
site:site,
password:password
});

localStorage.setItem("passwords",JSON.stringify(passwords));

document.getElementById("site").value="";
document.getElementById("password").value="";

render();
}

function render(){
let list=document.getElementById("list");
list.innerHTML="";

passwords.forEach(item=>{
list.innerHTML+=`
<div class="item">
<h3>${item.site}</h3>
<p>${item.password}</p>
</div>`;
});
}

function searchPassword(){
let value=document.getElementById("search").value.toLowerCase();
let list=document.getElementById("list");

list.innerHTML="";

passwords.forEach(item=>{
if(item.site.toLowerCase().includes(value)){
list.innerHTML+=`
<div class="item">
<h3>${item.site}</h3>
<p>${item.password}</p>
</div>`;
}
});
}

render();
