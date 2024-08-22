let timerPosted = document.querySelector('.timer-posted');
let timerPostedTimer = 0;
console.log(timerPosted)

function timerPostedUptaded(){
   timerPostedTimer++;

   if(timerPostedTimer > 60){
      timerPosted.innerHTML = `${timerPostedTimer + String('s')}`;
   }

} setInterval(timerPostedUptaded, 1000);