const logo = document.querySelector("svg").children;

for(let i in logo){
    const numero = parseInt(i)+1;
   console.log(`${logo[i].tagName} ${numero} ${logo[i].getTotalLength()}`)
}