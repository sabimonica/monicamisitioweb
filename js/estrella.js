let star1 = document.getElementById("star1");
let star2 = document.getElementById("star2");
let star3 = document.getElementById("star3");
let star4 = document.getElementById("star4");
let star5 = document.getElementById("star5");
let btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", () =>{
    let valor = document.getElementById("valor").value;
    if(valor >= 0 && valor <=0.2){
        star1.setAttribute("class", "fa-regular fa-star");
        star2.setAttribute("class", "fa-regular fa-star");
        star3.setAttribute("class", "fa-regular fa-star");
        star4.setAttribute("class", "fa-regular fa-star");
        star5.setAttribute("class", "fa-regular fa-star");
    }
    else if(valor >= 0.3 && valor <=0.7){
        star1.setAttribute("class", "fa-solid fa-star-half-stroke");
        star2.setAttribute("class", "fa-regular fa-star");
        star3.setAttribute("class", "fa-regular fa-star");
        star4.setAttribute("class", "fa-regular fa-star");
        star5.setAttribute("class", "fa-regular fa-star");
    }
    else if(valor >= 0.8 && valor <=1.2){
        star1.setAttribute("class", "fa-solid fa-star");
        star2.setAttribute("class", "fa-regular fa-star");
        star3.setAttribute("class", "fa-regular fa-star");
        star4.setAttribute("class", "fa-regular fa-star");
        star5.setAttribute("class", "fa-regular fa-star");
    }
    else if(valor >= 1.3 && valor <=1.7){
        star1.setAttribute("class", "fa-solid fa-star");
        star2.setAttribute("class", "fa-solid fa-star-half-stroke");
        star3.setAttribute("class", "fa-regular fa-star");
        star4.setAttribute("class", "fa-regular fa-star");
        star5.setAttribute("class", "fa-regular fa-star");
    }
    else if(valor >= 1.8 && valor <=2.2){
        star1.setAttribute("class", "fa-solid fa-star");
        star2.setAttribute("class", "fa-solid fa-star");
        star3.setAttribute("class", "fa-regular fa-star");
        star4.setAttribute("class", "fa-regular fa-star");
        star5.setAttribute("class", "fa-regular fa-star");
    }
    else if(valor >= 2.3 && valor <=2.7){
        star1.setAttribute("class", "fa-solid fa-star");
        star2.setAttribute("class", "fa-solid fa-star");
        star3.setAttribute("class", "fa-solid fa-star-half-stroke");
        star4.setAttribute("class", "fa-regular fa-star");
        star5.setAttribute("class", "fa-regular fa-star");
    }
    else if(valor >= 2.8 && valor <=3.2){
        star1.setAttribute("class", "fa-solid fa-star");
        star2.setAttribute("class", "fa-solid fa-star");
        star3.setAttribute("class", "fa-solid fa-star");
        star4.setAttribute("class", "fa-regular fa-star");
        star5.setAttribute("class", "fa-regular fa-star");
    }
    else if(valor >= 3.3 && valor <=3.7){
        star1.setAttribute("class", "fa-solid fa-star");
        star2.setAttribute("class", "fa-solid fa-star");
        star3.setAttribute("class", "fa-solid fa-star");
        star4.setAttribute("class", "fa-solid fa-star-half-stroke");
        star5.setAttribute("class", "fa-regular fa-star");
    }
    else if(valor >= 3.8 && valor <=4.2){
        star1.setAttribute("class", "fa-solid fa-star");
        star2.setAttribute("class", "fa-solid fa-star");
        star3.setAttribute("class", "fa-solid fa-star");
        star4.setAttribute("class", "fa-solid fa-star");
        star5.setAttribute("class", "fa-regular fa-star");
    }
    else if(valor >= 4.3 && valor <=4.7){
        star1.setAttribute("class", "fa-solid fa-star");
        star2.setAttribute("class", "fa-solid fa-star");
        star3.setAttribute("class", "fa-solid fa-star");
        star4.setAttribute("class", "fa-solid fa-star");
        star5.setAttribute("class", "fa-solid fa-star-half-stroke");
    }
    else if(valor >= 4.8 && valor <=5){
        star1.setAttribute("class", "fa-solid fa-star");
        star2.setAttribute("class", "fa-solid fa-star");
        star3.setAttribute("class", "fa-solid fa-star");
        star4.setAttribute("class", "fa-solid fa-star");
        star5.setAttribute("class", "fa-solid fa-star");
    }
    else{
        alert("por favor, ingrese un valor dentro del rango 1 a 5");
    }
})
