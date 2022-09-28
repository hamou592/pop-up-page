const openbtn = document.querySelector("button");
const closebtn = document.querySelector("#close")
const form=document.querySelector("form")
const modal = document.querySelector(".modal")

openbtn.addEventListener("click",openmodal);
function openmodal(){
    modal.style.display="grid"
}
closebtn.addEventListener("click",closemodal)
function closemodal(){
    
    modal.classList.add("close-modal-animation")
    setTimeout(() => {
        modal.style.display="none"
        window.location.reload()
    }, 500);
}
modal.addEventListener("click",function(e){
    //this is used for adding if we click outside the card we must hide the card and show the button of subscribe
    if(e.target.classList.contains("modal")){
        closemodal();
    }
})
//thank you message after subscribing
form.addEventListener("submit",submitform);
function submitform(){
    const card=document.querySelector(".card");
    card.innerHTML="<h2>Thanks for your subscription!</h2>"
    
    setTimeout(() => {
        closemodal();
    }, 3000);
}