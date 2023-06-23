const { error } = require('console');
const fs = require('fs');

// //suppression de dossier------------------------

// if(fs.existsSync('./mesFichers/')){
//     fs.rmdir('./mesFichers/',(error)=>{
//         if(error){
//             console.log(error);
//         }
//         else{
//             console.log('le fichier a ete suprimer avec succes');
//         };
//     });
// }



// // creation de dossier---------------

// if(fs.existsSync('./mesFichers')){
//     console.log('le fichier existe deja');
// }
// else{
//     fs.mkdir('./mesFichers',(error)=>{
//         if(error){
//             console.log(error);
//         }
//         else{
//             console.log('Dossier creer avec success');
//         }
//     })
// }

//creation de fichier---------------

// fs.writeFile('./mesFichers/fichier.txt', 'Bonjour les amis, Je suis developpeur nodejs', ()=>{
//     console.log('Creation du fichier avec du success')
// })

// lecture d'un fichier
// fs.readFile('./mesFichers/fichier.txt',(error,donnee)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log(donnee.toString());
//     }
// })

// supression d'un fichier
if(fs.existsSync('./mesFichers/fichier.txt'))
fs.unlink('./mesFichers/fichier.txt',(error)=>{
    if(error){
        console.log(error)
    }
        console.log('suppression evec succes')
})
else{
    console.log('le fichier n\'existe pas')
}
