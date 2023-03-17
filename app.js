document.getElementById('lines').addEventListener('click', ()=>{
    document.getElementById('nav-container').style.display ='block'
    document.getElementById('lines').style.display='none'
    document.getElementById('cross').style.display='block'
})

document.getElementById('cross').addEventListener('click', ()=>{
    document.getElementById('nav-container').style.display ='none'
    document.getElementById('lines').style.display='block'
    document.getElementById('cross').style.display='none'
})