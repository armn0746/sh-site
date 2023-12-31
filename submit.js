document.getElementById('submit').addEventListener('click', function(){
  
    const fristname1 = document.getElementById('frist');
    console.log(fristname1.value);
    const first = document.createElement ("p");
    first.innerText = fristname1.value;
    const past = document.getElementById ('past');
    past.appendChild (first);
    fristname1.value = "";
   


})
