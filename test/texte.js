let divTexte = document.querySelector("div");
let paragraphe = document.querySelector("#textPrincipal");
let cursor = document.querySelector("#traitUnion");
let texte = paragraphe.textContent;

const hauteurTexte = divTexte.offsetHeight;

divTexte.style.height= `${hauteurTexte}px`;
/*for (let i = 0; i <= texte.length; i++) {
      setTimeout(function () {
        // Code de la tâche à effectuer à chaque itération
        if(i === texte.length){
            paragraphe.textContent = texte;
            cursor.style.animation = 'cursor .4s step-end infinite alternate';
        }else{
            paragraphe.textContent = texte.slice(0, -(texte.length-i));
        }
      }, i * 20); // Définissez le délai en fonction de l'index
    };*/

const observer = new IntersectionObserver((entries) => {
    for(const entry of entries){
        if(entry.isIntersecting){
            for (let i = 0; i <= texte.length; i++) {
                setTimeout(function () {
                    if(i === texte.length){
                        paragraphe.textContent = texte;
                        cursor.style.animation = 'cursor .4s step-end infinite alternate';
                    }else{
                        paragraphe.textContent = texte.slice(0, -(texte.length-i));
                    }
                }, i * 20); // Définissez le délai en fonction de l'index
            };
            observer.unobserve(entry.target)
        }
    }
})

observer.observe(divTexte)