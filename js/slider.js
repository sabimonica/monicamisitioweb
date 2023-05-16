let lefArrow = document.getElementById("leftAroow");
let imgToyotaCamry = document.getElementById("imgToyotaCamry");
let imgToyotaTundra = document.getElementById("imgToyotaTundra");
let imgToyotaRav4 = document.getElementById('imgToyotaRav4');
let imgToyotaFlower = document.getElementById("imgToyotaFlower");



lefArrow.addEventListener("click", function () {
    if (imgToyotaCamry.classList.contains("img-toyota-camry")) {
        imgToyotaCamry.classList.remove("img-toyota-camry");
        imgToyotaCamry.classList.add("img-toyota-camry-hidden");
        imgToyotaTundra.classList.remove("img-toyota-tundra");
        imgToyotaTundra.classList.remove("img-toyota-tundra-hidden-right");
        imgToyotaRav4.classList.add("img-toyota-rav4");
        imgToyotaRav4.classList.remove("img-toyota-rav4-hidden-right");

        


    }
    else if (imgToyotaRav4.classList.contains("img-toyota-rav4")) {
        imgToyotaRav4.classList.remove("img-toyota-rav4");
        imgToyotaRav4.classList.add("img-toyota-rav4-hidden-right");
        imgToyotaFlower.classList.add("img-toyota-flower");
        imgToyotaFlower.classList.remove("img-toyota-flower-hidden-right");
        
       
    }

});