// JS pour page burgers
if(window.location.pathname === "/pages/burgers.html"){
    fetch("mcdo.json")
    .then(function(response) {
        if(!response.ok){
            throw new Error ("Le fichier Json n'a pas pu être charger.");
        }
        return response.json();
    })

    .then(function(data) {
        let burgersListe = document.getElementById('burgersListe');

    // card burgers

        for(let i = 0; i<data.burgers.length; i++ ){
            let burgers = data.burgers[i];

        // creation des elements
            let cardBurgers = document.createElement("div");
            let divImage = document.createElement("div");
            let divName = document.createElement("div");
            let divCart = document.createElement("div");
            let divBtnMore = document.createElement("div");
            let name = document.createElement("h2");
            let price = document.createElement("h3");

        // liens avec le Json
            divImage.innerHTML = `<img src='${burgers.image}'>`;
            name.textContent = burgers.name;
            price.textContent = burgers.price;
            divName.innerHTML = name;
            divCart.innerHTML = `<span>Ajouter au panier </span> '${price}'€`;
            divBtnMore.innerHTML = `<button onclick="viewDetails('${burgers[i].id}')"><img src='assets/icons/eye.png'></button>`;

        // integration des elements
            cardBurgers.appendChild(divImage);
            cardBurgers.appendChild(divName);
            cardBurgers.appendChild(divCart);
            cardBurgers.appendChild(divBtnMore);

        // integration dans le HTML
            burgersListe.appendChild(carBurgers);
        }
    })
}