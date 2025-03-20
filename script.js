//////////////////////// JS pour page burgers ////////////////////////////////
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

    // modal view

    let modalProduct = document.getElementById("modalProduct");
    let divImageProduct = document.getElementById("imageProduct");
    let backBtn = document.getElementById("backBtn");
    let divNameProduct = document.getElementById("nameProduct");
    let divDescriptionProduct = document.getElementById("descriptionProduct");
    let divCalorieProduct = document.getElementById("calorieProduct");

    function viewDetails(burgerView){
        if(modalProduct.classList.contains("hidden")){
            modalProduct.classList.remove("hidden");
            remove();

            for(let i=0; i<burgers.length; i++){
                if(burgers[i].id === burgerView){

                    // image
                    let imageProduct = document.createElement("div");
                    imageProduct.innerHTML = `<img src="../assets/${burgers.image}">`;
                    divImageProduct.appendChild(imageProduct);

                    // name
                    let nameProduct = document.createElement("h2");
                    nameProduct.textContent = burgers.name;
                    divNameProduct.appendChild(nameProduct);

                    // description
                    let descriptionProduct = document.createElement("h3");
                    descriptionProduct.textContent = burgers.description;
                    divDescriptionProduct.appendChild(descriptionProduct);

                    // calorie
                    let calorieProduct = document.createElement("p");
                    calorieProduct.textContent = burgers.calorie + " calories";
                    divCalorieProduct.appendChild(calorieProduct);
                }
            }

            backBtn.addEventListener('click', function(){
                if(!modalProduct.classList.contains("hidden")){
                    modalProduct.classList.add("hidden");
                    remove();
                };
            });
        }
    }



}


//////////////////////// function remove() modal ////////////////////////////////

function remove(){
    divCalorieProduct.innerHTML = "";
    divDescriptionProduct.innerHTML = "";
    divNameProduct.innerHTML = "";
    divImageProduct.innerHTML = "";
};

//////////////////////////////////////////////////////////////////////////////////



//////////////////////// JS pour page sides ////////////////////////////////

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

//////////////////////// JS pour page drinks ////////////////////////////////
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

        // card drinks

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

//////////////////////// JS pour page desserts ////////////////////////////////
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

        // card drinks

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

//////////////////////// JS pour page menu ////////////////////////////////
if(window.location.pathname === "/pages/menus.html"){
    fetch("../mcdo.json")
        .then(function(response) {
            if(!response.ok){
                throw new Error ("Le fichier Json n'a pas pu être charger.");
            }
            return response.json();
        })

        .then(function(data) {
            let menuListe = document.getElementById("menuListe");

        // card menu

            for(let i = 0; i<data.menus.length; i++ ){
                let menus = data.menus[i];

            // creation des elements
                let cardMenu = document.createElement("div");
                let divImage = document.createElement("div");
                let divName = document.createElement("div");
                let divCart = document.createElement("div");
                let divBtnMore = document.createElement("div");
                let name = document.createElement("h2");
                let price = document.createElement("h3");

            // liens avec le Json
                divImage.innerHTML = `<img src="../assets/${menus.image}">`;
                name.textContent = menus.name;
                price.innerHTML = `<span>Ajouter au panier </span> ${menus.price}€`;

 
                divBtnMore.innerHTML = `<button onclick="viewDetails('${menus.id}')" title="voir plus"><img src='../assets/icon/eye.png'></button>`;


            // integration des elements
                divCart.appendChild(price);
                divCart.id = "divCart";

                divName.appendChild(name);
                divName.id = 'divName';

                cardMenu.appendChild(divImage);
                cardMenu.id = "card";

                cardMenu.appendChild(divName);
                cardMenu.appendChild(divCart);
                cardMenu.appendChild(divBtnMore);

            // integration dans le HTML
                menuListe.appendChild(cardMenu);
            }
        });
}

//////////////////////// JS pour page happyMeal ////////////////////////////////
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

        // card happyMeal

            for(let i = 0; i<data.happyMeal.length; i++ ){
                let happyMeal = data.happyMeal[i];

            // creation des elements
                let cardhappyMeal = document.createElement("div");
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

                cardhappyMeal.appendChild(divImage);
                cardhappyMeal.id = "card";

                cardhappyMeal.appendChild(divName);
                cardhappyMeal.appendChild(divCart);
                cardhappyMeal.appendChild(divBtnMore);

            // integration dans le HTML
                happyMealListe.appendChild(cardhappyMeal);
            }
        });
}