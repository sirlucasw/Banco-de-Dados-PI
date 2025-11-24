// script básico para comportamentos visuais
document.addEventListener('DOMContentLoaded', ()=>{
// placeholder: ativar item do nav
document.querySelectorAll('.nav-item').forEach((n,i)=>{
n.addEventListener('click', ()=>{
document.querySelectorAll('.nav-item').forEach(x=>x.classList.remove('active'))
n.classList.add('active')
})
})


// add button - demo
document.querySelector('.add-btn').addEventListener('click', ()=>{
alert('Adicionar item (demo)')
})
})