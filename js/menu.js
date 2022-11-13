const pesa = document.querySelector('.pesa')
const menu = document.querySelector('.menu-navegacion')

pesa.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')
    && e.target != menu && e.target != pesa){
        menu.classList.toggle("spread")
    }
})