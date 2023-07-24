const hamburger = document.querySelector(".hamburger");
const navMenu  = document.querySelector(".logo-block");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active"); 
    navMenu.classList.toggle("active"); 
})
document.querySelectorAll("block-title").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

function show(state)
{
document.getElementById('window').style.display = state;	
        
}	

document.querySelectorAll('.clinic__img-block img').forEach(img=>{
    img.onclick = () => {
        document.querySelector('.pop-up').style.display = 'block';
        document.querySelector('.after-img').src = img.getAttribute('src')
    }
})

document.querySelector('.pop-up span').onclick = () => {
    document.querySelector('.pop-up').style.display = 'none';
} 

document.querySelectorAll('.grid-block img').forEach(img=>{
    img.onclick = () => {
        document.querySelector('.pop-up').style.display = 'block';
        document.querySelector('.after-img').src = img.getAttribute('src')
    }
})