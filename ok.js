document.getElementById('ok').addEventListener('click',function(){
    


    

    const sim = document.getElementById("network")
    const sim2 = sim.value;
    console.log(sim2);
    const ammount1 = document.getElementById("ammount")
    const ammount2 = ammount1.value;
    console.log(ammount2);


    if( sim2 === "robi" && ammount2 === "300"){
        alert(" saucces your pyment")
        location.href = "btn.html"
    }else(
        alert(" acount not font")
    )
})
