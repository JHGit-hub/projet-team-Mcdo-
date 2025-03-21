////////////// Déclaration des variables
    
let modalProduct = document.getElementById("modalProduct");
let divImageProduct = document.getElementById("imageProduct");
let backBtn = document.getElementById("backBtn");
let divNameProduct = document.getElementById("nameProduct");
let divDescriptionProduct = document.getElementById("descriptionProduct");
let divCalorieProduct = document.getElementById("calorieProduct");
let menusListe = document.getElementById("menusListe");  
let menus = [];
let sides = ["Frites Moyennes", "Deluxe Potatoes™", "P'tite Salade"];
let drinks = ["Coca-Cola®", "Eau By McDo™", "Minute Maid® Orange"];


    
fetch("../mcdo.json")
    .then(function(response) {
        if(!response.ok){
            throw new Error ("Le fichier Json n'a pas pu être charger.");
        }
        return response.json();
    })

    .then(function(data) {
        menus = data.menus;

    // card menus

        for(let i = 0; i<menus.length; i++ ){

        // creation des elements
            let cardMenus = document.createElement("div");
            let divImage = document.createElement("div");
            let divName = document.createElement("div");
            let divCart = document.createElement("div");
            let divBtnMore = document.createElement("div");
            let divOptions = document.createElement("div");
            let name = document.createElement("h2");
            let price = document.createElement("h3");
            let formSideOptions = document.createElement("form");
            let formDrinksOptions = document.createElement("form");

        // creation des choix (radio)

            // sides
            for( let k=0; k<sides.length; k++){
                let inputSideOptions = document.createElement("input");
                let labelSideOptions = document.createElement("label");

                inputSideOptions.type = "radio";
                inputSideOptions.name = "side";
                inputSideOptions.value = sides[k];
                labelSideOptions.textContent = sides[k] + " ";
                labelSideOptions.appendChild(inputSideOptions);
                formSideOptions.appendChild(labelSideOptions);
            };

        // drinks
            for( let k=0; k<drinks.length; k++){
                let inputDrinksOpions = document.createElement("input");
                let labelDrinksOptions = document.createElement("label");

                inputDrinksOpions.type = "radio";
                inputDrinksOpions.name = "drinks";
                inputDrinksOpions.value = drinks[k];
                labelDrinksOptions.textContent = drinks[k] + " ";
                labelDrinksOptions.appendChild(inputDrinksOpions);
                formDrinksOptions.appendChild(labelDrinksOptions);
            };

        // liens avec le Json
            divImage.innerHTML = `<img src="../assets/${menus[i].image}">`;
            name.textContent = menus[i].name;
            price.innerHTML = `<span>Ajouter au panier </span> ${menus[i].price}€`;
            divBtnMore.innerHTML = `<button onclick="viewDetails('${menus[i].name}')" title="voir plus"><img src='../assets/icon/eye.png'></button>`;

        // integration des elements
            divCart.appendChild(price);
            divCart.id = "divCart";

            divName.appendChild(name);
            divName.id = 'divName';

            divOptions.appendChild(formSideOptions);
            divOptions.appendChild(formDrinksOptions);

            cardMenus.appendChild(divImage);
            cardMenus.id = "card";

            cardMenus.appendChild(divName);
            cardMenus.appendChild(divOptions);

            cardMenus.appendChild(divCart);
            cardMenus.appendChild(divBtnMore);

        // integration dans le HTML
            menusListe.appendChild(cardMenus);
        }
    });
    

/////////////////// modal view
     
    
    // function remove() modal
    
function remove(){
    divCalorieProduct.innerHTML = "";
    divDescriptionProduct.innerHTML = "";
    divNameProduct.innerHTML = "";
    divImageProduct.innerHTML = "";
};
        
    // function viewDetails()
    
function viewDetails(menusView){
    if(modalProduct.classList.contains("hidden")){
        modalProduct.classList.remove("hidden");
        remove();

        let selectedMenus = menus.find( b=> b.name === menusView);

        if (!selectedMenus) {
            console.error("Menus non trouvé avec l'ID :", menusView);
            return;
        }

        // image
        let imageProduct = document.createElement("div");
        imageProduct.innerHTML = `<img src="../assets/${selectedMenus.image}">`;
        divImageProduct.appendChild(imageProduct);

        // name
        let nameProduct = document.createElement("h2");
        nameProduct.textContent = selectedMenus.name;
        divNameProduct.appendChild(nameProduct);

        // description
        let descriptionProduct = document.createElement("h3");
        descriptionProduct.textContent = selectedMenus.description;
        divDescriptionProduct.appendChild(descriptionProduct);

        // calorie
        let calorieProduct = document.createElement("p");
        calorieProduct.textContent = selectedMenus.calories + " calories";
        divCalorieProduct.appendChild(calorieProduct);
        

        backBtn.addEventListener('click', function(){
            if(!modalProduct.classList.contains("hidden")){
                modalProduct.classList.add("hidden");
                remove();
            };
        });
    };
};

    