const container = document.querySelector('.container')
const question = document.querySelector('.question')
const yesbtn = document.querySelector('.yes-btn')
const nobtn = document.querySelector('.no-btn')

const containerwidth = container.getBoundingClientRect();
const nobtnwidth = nobtn.getBoundingClientRect();

nobtn.addEventListener('mouseover',()=>{
    // question.innerHTML = 'say it again';
    const i = Math.floor(Math.random() * (containerwidth.width - nobtnwidth.width)) +1;
    const j = Math.floor(Math.random() * (containerwidth.height - nobtnwidth.height)) +1; 

    
    nobtn.style.left = i + 'px';
    nobtn.style.top = j +'px';
    
    
})
yesbtn.addEventListener('click',()=>{
    question.innerHTML = 'Love you too :)';
    // alert('yes button clicked')
})