arr=['ECE','CSE','IT','EEE','MECH','CIVIL']
arr.forEach(val=>{
    const opt=document.createElement('option')
    opt.textContent=val
    opt.value=val
    document.getElementById('branch').appendChild(opt)
})
arr.forEach(val=>{
    const opt=document.createElement('li')
    opt.textContent=val
    document.getElementById('branchlist').appendChild(opt)
})