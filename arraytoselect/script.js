const select=document.getElementById("input")
const arr=['ECE','CSE','IT','EEE','MECH','CIVIL']
for(let branch of arr){
    const option=document.createElement("option")
    option.value=branch
    option.text=branch
    select.appendChild(option)
}