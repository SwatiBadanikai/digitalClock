document.addEventListener('DOMContentLoaded', ()=>{
   const time = document.querySelector('.time')
  
   setInterval(()=>{
    let Localtime= new Date().toLocaleTimeString()
   time.innerHTML=Localtime
   console.log(Localtime);
   },1000)
   
})