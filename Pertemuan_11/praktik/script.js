let batu = document.getElementById("batu");
let kertas = document.getElementById("kertas");
let gunting = document.getElementById("gunting");
let computerchoice =  document.getElementById("computerchoice");
let option = ["batu" , "gunting" , "kertas"]

batu.addEventListener('click' , function(){
    let random = Math.floor(Math.random() * 3)
    let randomOption = option[random];
    computerchoice.innerHTML = randomOption;

    setTimeout(() => {
        switch (randomOption) {
            case "batu":
                alert("Seri");
                break;
    
            case "gunting":
                alert("Kamu Menang!");
                break;
            
            default:
                alert("Komputer Menang!");
                break;
        }
    }, 300);

    
})

kertas.addEventListener('click' , function(){
    let random = Math.floor(Math.random() * 3)
    let randomOption = option[random];
    computerchoice.innerHTML = randomOption;

    setTimeout(() => {
        switch (randomOption) {
            case "batu":
                alert("Kamu Menang!");
                break;
    
            case "gunting":
                alert("Komputer Menang!");
                break;
            
            default:
                alert("Seri");
                break;
        }
    }, 300);

    
})

gunting.addEventListener('click' , function(){
    let random = Math.floor(Math.random() * 3)
    let randomOption = option[random];
    computerchoice.innerHTML = randomOption;

    setTimeout(() => {
        switch (randomOption) {
            case "batu":
                alert("Komputer Menang!");
                break;
    
            case "gunting":
                alert("Seri");
                break;
            
            default:
                alert("Kamu Menang!");
                break;
        }
    }, 300);

    
})