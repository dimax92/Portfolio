const logo = document.querySelector("svg").children;
let nombreSecondes = 0;
for(let i in logo){
    const numero = parseInt(i)+1;
    if(i > 0){
        nombreSecondes+=parseInt(logo[parseInt(i)-1].getTotalLength());
    }
   console.log(`${logo[i].tagName} ${numero} longueur: ${logo[i].getTotalLength()} nombre de secondes: ${nombreSecondes}`)
}