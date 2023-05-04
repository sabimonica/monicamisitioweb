let leftArrow = document.getElementById("leftArrow");
let imgToyota = document.getElementById("imgToyota")

leftArrow.addEventListener("click", function(){
    leftArrow.classList.remove("img-toyota-camry");
    imgToyota.classList.add("img-toyota-camry-hidden");
});