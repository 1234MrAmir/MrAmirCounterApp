// set intial count 
let count = 0;

// select value and button
let value = document.querySelector('#value');
let btns = document.querySelectorAll('.btn');
console.log(btns);

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
   const styles =e.currentTarget.classList;
//    console.log(styles);
   if(styles.contains('decrease-btn')){
    count--;

   }
   else if(styles.contains('increase-btn')){
    count++;
   }
   else{
    count=0;
   }
   if(count > 0){
    value.style.color ='green';
   }
   if(count < 0){
    value.style.color ='red';
   }
   if (count === 0){
    value.style.color ='black';
   }
   value.textContent = count;
    });
})
// code has been completed
