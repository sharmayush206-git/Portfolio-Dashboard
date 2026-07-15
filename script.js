function editProfile(){

let n=prompt("Enter Name");

if(n)
document.getElementById("name").innerHTML=n;

let a=prompt("Enter About");

if(a)
document.getElementById("about").innerHTML=a;

}

function send(){

alert("Message Sent Successfully!");

}

const ctx=document.getElementById('chart').getContext('2d');

new Chart(ctx,{

type:'bar',

data:{

labels:['JavaScript','Python','Cyber','Linux'],

datasets:[{

label:'Skill %',

data:[90,85,95,80]

}]

}

});