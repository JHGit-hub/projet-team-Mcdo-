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
                price.innerHTML = `<span>Ajouter au panier </span> ${burgers.price}€`;

 
                divBtnMore.innerHTML = `<button onclick="viewDetails('${burgers.id}')" title="voir plus"><img src='../assets/icon/eye.png'></button>`;


            // integration des elements
                divCart.appendChild(price);
                divCart.id = "divCart";

                divName.appendChild(name);
                divName.id = 'divName';

                cardBurgers.appendChild(divImage);
                cardBurgers.id = "card";

                cardBurgers.appendChild(divName);
                cardBurgers.appendChild(divCart);
                cardBurgers.appendChild(divBtnMore);

            // integration dans le HTML
                burgersListe.appendChild(cardBurgers);
            }
        });
}

// JS pour page sides
if(window.location.pathname === "/pages/sides.html"){
    fetch("../mcdo.json")
        .then(function(response) {
            if(!response.ok){
                throw new Error ("Le fichier Json n'a pas pu être charger.");
            }
            return response.json();
        })

        .then(function(data) {
            let sidesListe = document.getElementById("sidesListe");

        // card sides

            for(let i = 0; i<data.sides.length; i++ ){
                let sides = data.sides[i];

            // creation des elements
                let cardSides = document.createElement("div");
                let divImage = document.createElement("div");
                let divName = document.createElement("div");
                let divCart = document.createElement("div");
                let divBtnMore = document.createElement("div");
                let name = document.createElement("h2");
                let price = document.createElement("h3");

            // liens avec le Json
                divImage.innerHTML = `<img src="../assets/${sides.image}">`;
                name.textContent = sides.name;
                price.innerHTML = `<span>Ajouter au panier </span> ${sides.price}€`;

 
                divBtnMore.innerHTML = `<button onclick="viewDetails('${sides.id}')" title="voir plus"><img src='../assets/icon/eye.png'></button>`;


            // integration des elements
                divCart.appendChild(price);
                divCart.id = "divCart";

                divName.appendChild(name);
                divName.id = 'divName';

                cardSides.appendChild(divImage);
                cardSides.id = "card";

                cardSides.appendChild(divName);
                cardSides.appendChild(divCart);
                cardSides.appendChild(divBtnMore);

            // integration dans le HTML
                sidesListe.appendChild(cardSides);
            }
        });
}

// JS pour page drinks
if(window.location.pathname === "/pages/drinks.html"){
    fetch("../mcdo.json")
        .then(function(response) {
            if(!response.ok){
                throw new Error ("Le fichier Json n'a pas pu être charger.");
            }
            return response.json();
        })

        .then(function(data) {
            let drinksListe = document.getElementById("drinksListe");

        // card sides

            for(let i = 0; i<data.drinks.length; i++ ){
                let drinks = data.drinks[i];

            // creation des elements
                let cardDrinks = document.createElement("div");
                let divImage = document.createElement("div");
                let divName = document.createElement("div");
                let divCart = document.createElement("div");
                let divBtnMore = document.createElement("div");
                let name = document.createElement("h2");
                let price = document.createElement("h3");

            // liens avec le Json
                divImage.innerHTML = `<img src="../assets/${drinks.image}">`;
                name.textContent = drinks.name;
                price.innerHTML = `<span>Ajouter au panier </span> ${drinks.price}€`;

 
                divBtnMore.innerHTML = `<button onclick="viewDetails('${drinks.id}')" title="voir plus"><img src='../assets/icon/eye.png'></button>`;


            // integration des elements
                divCart.appendChild(price);
                divCart.id = "divCart";

                divName.appendChild(name);
                divName.id = 'divName';

                cardDrinks.appendChild(divImage);
                cardDrinks.id = "card";

                cardDrinks.appendChild(divName);
                cardDrinks.appendChild(divCart);
                cardDrinks.appendChild(divBtnMore);

            // integration dans le HTML
                drinksListe.appendChild(cardDrinks);
            }
        });
}

// JS pour page desserts
if(window.location.pathname === "/pages/desserts.html"){
    fetch("../mcdo.json")
        .then(function(response) {
            if(!response.ok){
                throw new Error ("Le fichier Json n'a pas pu être charger.");
            }
            return response.json();
        })

        .then(function(data) {
            let dessertsListe = document.getElementById("dessertsListe");

        // card sides

            for(let i = 0; i<data.desserts.length; i++ ){
                let desserts = data.desserts[i];

            // creation des elements
                let cardDesserts = document.createElement("div");
                let divImage = document.createElement("div");
                let divName = document.createElement("div");
                let divCart = document.createElement("div");
                let divBtnMore = document.createElement("div");
                let name = document.createElement("h2");
                let price = document.createElement("h3");

            // liens avec le Json
                divImage.innerHTML = `<img src="../assets/${desserts.image}">`;
                name.textContent = desserts.name;
                price.innerHTML = `<span>Ajouter au panier </span> ${desserts.price}€`;

 
                divBtnMore.innerHTML = `<button onclick="viewDetails('${desserts.id}')" title="voir plus"><img src='../assets/icon/eye.png'></button>`;


            // integration des elements
                divCart.appendChild(price);
                divCart.id = "divCart";

                divName.appendChild(name);
                divName.id = 'divName';

                cardDesserts.appendChild(divImage);
                cardDesserts.id = "card";

                cardDesserts.appendChild(divName);
                cardDesserts.appendChild(divCart);
                cardDesserts.appendChild(divBtnMore);

            // integration dans le HTML
                dessertsListe.appendChild(cardDesserts);
            }
        });
}

// JS pour page happyMeal
if(window.location.pathname === "/pages/happymeal.html"){
    fetch("../mcdo.json")
        .then(function(response) {
            if(!response.ok){
                throw new Error ("Le fichier Json n'a pas pu être charger.");
            }
            return response.json();
        })

        .then(function(data) {
            let happyMealListe = document.getElementById("happyMealListe");

        // card sides

            for(let i = 0; i<data.happyMeal.length; i++ ){
                let happyMeal = data.happyMeal[i];

            // creation des elements
                let cardHappyMeal = document.createElement("div");
                let divImage = document.createElement("div");
                let divName = document.createElement("div");
                let divCart = document.createElement("div");
                let divBtnMore = document.createElement("div");
                let name = document.createElement("h2");
                let price = document.createElement("h3");

            // liens avec le Json
                divImage.innerHTML = `<img src="../assets/${happyMeal.image}">`;
                name.textContent = happyMeal.name;
                price.innerHTML = `<span>Ajouter au panier </span> ${happyMeal.price}€`;

 
                divBtnMore.innerHTML = `<button onclick="viewDetails('${happyMeal.id}')" title="voir plus"><img src='../assets/icon/eye.png'></button>`;


            // integration des elements
                divCart.appendChild(price);
                divCart.id = "divCart";

                divName.appendChild(name);
                divName.id = 'divName';

                cardHappyMeal.appendChild(divImage);
                cardHappyMeal.id = "card";

                cardHappyMeal.appendChild(divName);
                cardHappyMeal.appendChild(divCart);
                cardHappyMeal.appendChild(divBtnMore);

            // integration dans le HTML
                happyMealListe.appendChild(cardHappyMeal);
            }
        });
}