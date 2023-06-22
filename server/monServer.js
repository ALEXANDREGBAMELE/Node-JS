const http = require('http')

const server = http.createServer((requete,reponse) =>{
    // console.log("le serveur a ete creer");
    // console.log(requete.url);
    // console.log(requete.headers);
    if(requete.url === "/accueil"){
        reponse.write("<p>Bienvenue sur notre serveur</p>")
    }
    else if(requete.url === "/profil"){
        reponse.write("<p>Vous etes dev backend</p>")
    }
    else{
        reponse.write("<p>l'url est incorrecte</p>")
    }
});

server.listen(3001,"localhost", ()=>{
    console.log("pret a effectuer les requete au port 3001");
})