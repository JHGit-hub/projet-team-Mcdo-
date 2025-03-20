// JS pour page burgers
if(window.location.pathname === "/pages/burgers.html"){
    fetch("../mcdo.json")
        .then(function(response) {
            if(!response.ok){
                throw new Error ("Le fichier Json n'a pas pu être charger.");
            }
            return response.json();
        })

        .then(function(data) {
            let burgersListe = document.getElementById("burgersListe");

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
                divImage.innerHTML = `<img src="../assets/${burgers.image}">`;
                name.textContent = burgers.name;
                price.textContent = `<span>Ajouter au panier </span> ${burgers.price}€`;

 
                divBtnMore.innerHTML = `<button onclick="viewDetails('${burgers.id}')" title="voir plus"><img src='../assets/icon/eye.png'></button>`;


            // integration des elements
                divCart.appendChild(price);
                divCart.id = "divCart";

                divName.appendChild(name);
                divName.id = 'divName';

                cardBurgers.appendChild(divImage);
                cardBurgers.id = "cardBurgers";

                cardBurgers.appendChild(divName);
                cardBurgers.appendChild(divCart);
                cardBurgers.appendChild(divBtnMore);

            // integration dans le HTML
                burgersListe.appendChild(cardBurgers);
            }
        });
}