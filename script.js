// JS pour page d'accueil

if(window.location.pathname === "/index.html"){
    fetch("mcdo.json")
    .then(function(response) {
        if(!response.ok){
            throw new Error ("Le fichier Json n'a pas pu être charger.");
        }
        return response.json();
    })
    
    .then(function(data) {
        console.log(data);
    })
   


}