let leftAdelante = document.getElementById("leftAdelante");
let leftAroow = document.getElementById("leftAroow");
let imgToyotaCamry = document.getElementById("imgToyotaCamry");
let imgToyotaTundra = document.getElementById("imgToyotaTundra");
let imgToyotaRav4 = document.getElementById('imgToyotaRav4');
// let imgToyotaFlower = document.getElementById("imgToyotaFlower");



leftAdelante.addEventListener("click", function () {
    if (imgToyotaCamry.classList.contains("img-toyota-camry")) {
        imgToyotaCamry.classList.remove("img-toyota-camry");
        imgToyotaCamry.classList.add("img-toyota-camry-hidden");
        imgToyotaTundra.classList.add("img-toyota-tundra");
        imgToyotaTundra.classList.remove("img-toyota-tundra-hidden-right");
        // imgToyotaRav4.classList.add("img-toyota-rav4");
        // imgToyotaRav4.classList.remove("img-toyota-rav4-hidden-right");
        console.log("UNO")
    }
    else if (imgToyotaRav4.classList.contains("img-toyota-rav4-hidden-right")) {
        imgToyotaTundra.classList.remove("img-toyota-tundra");
        imgToyotaTundra.classList.add("img-toyota-tundra-hidden-left");
        imgToyotaRav4.classList.remove("img-toyota-rav4-hidden-right")
        imgToyotaRav4.classList.add("img-toyota-rav4")
        console.log("DOS")
    }

});
leftAroow.addEventListener("click", function () {
    if (imgToyotaRav4.classList.contains("img-toyota-rav4")) {
        imgToyotaTundra.classList.add("img-toyota-tundra");
        imgToyotaTundra.classList.remove("img-toyota-tundra-hidden-left");
        imgToyotaRav4.classList.add("img-toyota-rav4-hidden-right")
        imgToyotaRav4.classList.remove("img-toyota-rav4")
        console.log("UNO T")
    }
    else if (imgToyotaRav4.classList.contains("img-toyota-rav4-hidden-right")) {
        imgToyotaCamry.classList.add("img-toyota-camry");
        imgToyotaCamry.classList.remove("img-toyota-camry-hidden");
        imgToyotaTundra.classList.remove("img-toyota-tundra");
        imgToyotaTundra.classList.add("img-toyota-tundra-hidden-right");
        console.log("DOS T")
    }

});