////////////// Déclaration des variables
    
let modalProduct = document.getElementById("modalProduct");
let divImageProduct = document.getElementById("imageProduct");
let backBtn = document.getElementById("backBtn");
let divNameProduct = document.getElementById("nameProduct");
let divDescriptionProduct = document.getElementById("descriptionProduct");
let divCalorieProduct = document.getElementById("calorieProduct");
let sidesListe = document.getElementById("sidesListe");  
let sides = [];
    
fetch("../mcdo.json")
    .then(function(response) {
        if(!response.ok){
            throw new Error ("Le fichier Json n'a pas pu être charger.");
        }
        return response.json();
    })

    .then(function(data) {
        sides = data.sides;

    // card sides

        for(let i = 0; i<sides.length; i++ ){

        // creation des elements
            let cardSides = document.createElement("div");
            let divImage = document.createElement("div");
            let divName = document.createElement("div");
            let divCart = document.createElement("div");
            let divBtnMore = document.createElement("div");
            let name = document.createElement("h2");
            let price = document.createElement("h3");

        // liens avec le Json
            divImage.innerHTML = `<img src="../assets/${sides[i].image}">`;
            name.textContent = sides[i].name;
            price.innerHTML = `<span>Ajouter au panier </span> ${sides[i].price}€`;
            divBtnMore.innerHTML = `<button onclick="viewDetails('${sides[i].name}')" title="voir plus"><img src='../assets/icon/eye.png'></button>`;

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
    

/////////////////// modal view
     
    
    // function remove() modal
    
function remove(){
    divCalorieProduct.innerHTML = "";
    divDescriptionProduct.innerHTML = "";
    divNameProduct.innerHTML = "";
    divImageProduct.innerHTML = "";
};
        
    // function viewDetails()
    
function viewDetails(sidesView){
    if(modalProduct.classList.contains("hidden")){
        modalProduct.classList.remove("hidden");
        remove();

        let selectedSides = sides.find( b=> b.name === sidesView);

        if (!selectedSides) {
            console.error("Sides non trouvé avec l'ID :", sidesView);
            return;
        }

        // image
        let imageProduct = document.createElement("div");
        imageProduct.innerHTML = `<img src="../assets/${selectedSides.image}">`;
        divImageProduct.appendChild(imageProduct);

        // name
        let nameProduct = document.createElement("h2");
        nameProduct.textContent = selectedSides.name;
        divNameProduct.appendChild(nameProduct);

        // description
        let descriptionProduct = document.createElement("h3");
        descriptionProduct.textContent = selectedSides.description;
        divDescriptionProduct.appendChild(descriptionProduct);

        // calorie
        let calorieProduct = document.createElement("p");
        calorieProduct.textContent = selectedSides.calories + " calories";
        divCalorieProduct.appendChild(calorieProduct);

        backBtn.addEventListener('click', function(){
            if(!modalProduct.classList.contains("hidden")){
                modalProduct.classList.add("hidden");
                remove();
            };
        });
    };
};
