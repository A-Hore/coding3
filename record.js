// fill in javascript code here
document.querySelector("form").addEventListener("submit",myfun)

function myfun(){
    event.preventDefault()
   var name =document.querySelector("#name").value
   var empid=document.querySelector("#employeeID").value
   var dep=document.querySelector("#department").value
   var experi=document.querySelector("#exp").value
   var emailid =document.querySelector("#email").value
   var mobile= document.querySelector("#mbl").value

// console.log( name,empid,dep,experi,emailid,mobile);
 

 var td1=document.createElement("td")
 td1.innerText=name
 var td2=document.createElement("td")
 td2.innerText=empid
 var td3=document.createElement("td")
 td3.innerText=dep
 var td4=document.createElement("td")
 td4.innerText=experi
 var td5=document.createElement("td")
 td5.innerText=emailid
 var td6=document.createElement("td")
 td6.innerText=mobile
 var td7=document.createElement("td")
 
 if(Number (experi)>5){
 td7.innerText="Senior"
 }
 else if(Number(experi>2)  &&  Number(experi<=5)){

    td7.innerText="Junior"
 }
 else{
    td7.innerText="Fresher"
 }
 var td8=document.createElement("td")
 td8.innerText="Delete"
 td8.style.background="red"
 td8.setAttribute("id","delbtn")
 td8.addEventListener("click",delfun)
 function delfun(){
     event.target.parentNode.remove()
 }

 var trow=document.createElement("tr")
 trow.append(td1,td2,td3,td4,td5,td6,td7,td8)
 document.querySelector("tbody").append(trow)

}