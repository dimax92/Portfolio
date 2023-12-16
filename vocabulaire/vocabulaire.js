const flashCard = document.querySelector("#textFlashCard");
const buttonReponse = document.querySelector("#reponse");
const buttonConnais = document.querySelector("#connais");
const buttonConnaisPas = document.querySelector("#connaisPas");
const buttonApprentissage = document.querySelector("#commencerApprentissage");
const buttonRevision = document.querySelector("#commencerRevision");
const buttonMotsOublies = document.querySelector("#commencerApprentissageMotsOublies");

function exerciceApprentissage(){
  fetch("http://localhost:4000/deuxieme")
  .then(response => response.json())
  .then(data => {
    let motsArray = [...data[5]];
    console.log(motsArray);
    let indexDebut = localStorage.getItem("indexDebut");
    let indexFin = localStorage.getItem('indexFin');
    let motsArrayExtract = motsArray.slice(indexDebut, indexFin);
      
    
    function comparaisonAleatoire() {
        return Math.random() - 0.5; // Génère un nombre aléatoire entre -0.5 et 0.5
    }
    
    //motsArray.sort(comparaisonAleatoire).map(toto => console.log(toto));
    let motsArraySort = motsArrayExtract.sort(comparaisonAleatoire);
    
    let reponse = false;
    let indexArray = 0;
    flashCard.textContent = motsArraySort[indexArray].francais;
    
    buttonReponse.addEventListener("click", (e) => {
      e.preventDefault();
      reponse = true;
      if(indexArray <= motsArraySort.length-1){
        flashCard.textContent = motsArraySort[indexArray].arabe;
      }
    });
    
    buttonConnais.addEventListener("click", (e) => {
      e.preventDefault();
      if(reponse){
        indexArray++;
        if(indexArray <= motsArraySort.length-1){
          flashCard.textContent = motsArraySort[indexArray].francais;
        };
        if(indexArray === motsArraySort.length){
          console.log('vous etes arrive a la fin de la serie');
          let ancienIndexDebut = parseInt(localStorage.getItem("indexDebut"));
          let ancienIndexFin = parseInt(localStorage.getItem("indexFin"));
          let nouveauIndexDebut = ancienIndexDebut+5;
          let nouveauIndexFin = ancienIndexFin+5;
          let isLearned = parseInt(localStorage.getItem("isLearned"));
          let nouveauTableauMotsOublies = JSON.parse(localStorage.getItem("motsOublies"));
          if(nouveauTableauMotsOublies.length >= 1){
            indexArray = 0;
            localStorage.setItem('motsOublies', JSON.stringify([]));
            motsArraySort = motsArrayExtract.sort(comparaisonAleatoire);
            console.log('vous avez oublie des mots');
          }else{
            console.log(motsArray)
            if((isLearned % 2) === 0){
              localStorage.setItem("indexDebut", nouveauIndexDebut);
              localStorage.setItem('indexFin', nouveauIndexFin);
              if(nouveauIndexFin > motsArray.length){
                motsArrayExtract = motsArray.slice(nouveauIndexDebut, motsArray.length);
                console.log('c est plus grand que l index '+motsArray.length);
              }else{
                motsArrayExtract = motsArray.slice(nouveauIndexDebut, nouveauIndexFin);
              }
              motsArraySort = motsArrayExtract.sort(comparaisonAleatoire);
              indexArray = 0;
            };
            if((isLearned % 2) === 1 && isLearned > 0){
              motsArrayExtract = motsArray.slice(0, ancienIndexFin);
              motsArraySort = motsArrayExtract.sort(comparaisonAleatoire);
              indexArray = 0;
            };
            localStorage.setItem('isLearned', isLearned+1);
          }
          flashCard.textContent = motsArraySort[indexArray].francais;
        }
        reponse = false;
      }
    });
    
    buttonConnaisPas.addEventListener("click", (e) => {
      e.preventDefault();
      if(reponse){
        if(indexArray <= motsArraySort.length-1){
          let ancienTableauMotsOublies = localStorage.getItem("motsOublies");
          ancienTableauMotsOublies = JSON.parse(ancienTableauMotsOublies);
          let motsOublies = [...ancienTableauMotsOublies,motsArraySort[indexArray]];
          localStorage.setItem("motsOublies", JSON.stringify(motsOublies));
          indexArray++;
          console.log(motsOublies)
          if(indexArray <= motsArraySort.length-1){
            flashCard.textContent = motsArraySort[indexArray].francais;
          };
          if(indexArray === motsArraySort.length){
            console.log('vous etes arrive a la fin de la serie');
            let ancienIndexDebut = localStorage.getItem("indexDebut");
            let ancienIndexFin = localStorage.getItem("indexFin");
            let nouveauTableauMotsOublies = JSON.parse(localStorage.getItem("motsOublies"));
            if(nouveauTableauMotsOublies.length >= 1){
              indexArray = 0;
              localStorage.setItem('motsOublies', JSON.stringify([]));
              motsArraySort = motsArrayExtract.sort(comparaisonAleatoire);
              console.log('vous avez oublie des mots');
            }
            flashCard.textContent = motsArraySort[indexArray].francais;
          }
        };
        reponse = false;
        //console.log(motsOublies);
      }
    })
  })
  .catch(error => console.log(error))
};

function exerciceRevision(){
  fetch("http://localhost:4000/deuxieme")
  .then(response => response.json())
  .then(data => {
    let motsArray = [...data[4],...data[2]];
    console.log(motsArray);
      
    
    function comparaisonAleatoire() {
        return Math.random() - 0.5; // Génère un nombre aléatoire entre -0.5 et 0.5
    }
    
    //motsArray.sort(comparaisonAleatoire).map(toto => console.log(toto));
    let motsArraySort = motsArray.sort(comparaisonAleatoire);
    
    let reponse = false;
    let indexArray = 0;
    flashCard.textContent = motsArraySort[indexArray].francais;
    
    buttonReponse.addEventListener("click", (e) => {
      e.preventDefault();
      reponse = true;
      if(indexArray <= motsArraySort.length-1){
        flashCard.textContent = motsArraySort[indexArray].arabe;
      }
    });
    
    buttonConnais.addEventListener("click", (e) => {
      e.preventDefault();
      if(reponse){
        indexArray++;
        if(indexArray <= motsArraySort.length-1){
          flashCard.textContent = motsArraySort[indexArray].francais;
        };
        reponse = false;
      }
    });
    
    buttonConnaisPas.addEventListener("click", (e) => {
      e.preventDefault();
      if(reponse){
        if(indexArray <= motsArraySort.length-1){
          let ancienTableauMotsOublies = localStorage.getItem("motsOublies");
          ancienTableauMotsOublies = JSON.parse(ancienTableauMotsOublies);
          let motsOublies = [...ancienTableauMotsOublies,motsArraySort[indexArray]];
          localStorage.setItem("motsOublies", JSON.stringify(motsOublies));
          indexArray++;
          console.log(motsOublies)
          if(indexArray <= motsArraySort.length-1){
            flashCard.textContent = motsArraySort[indexArray].francais;
          };
        };
        reponse = false;
        //console.log(motsOublies);
      }
    })
  })
  .catch(error => console.log(error))
};

function exerciceApprentissageMotsOublies(){
  let motsArray = JSON.parse(localStorage.getItem("motsOublies"));
  console.log(motsArray);
  let indexDebut = localStorage.getItem("indexDebut");
  let indexFin = localStorage.getItem('indexFin');
  let motsArrayExtract = motsArray.slice(indexDebut, indexFin);
    
  
  function comparaisonAleatoire() {
      return Math.random() - 0.5; // Génère un nombre aléatoire entre -0.5 et 0.5
  }
  
  //motsArray.sort(comparaisonAleatoire).map(toto => console.log(toto));
  let motsArraySort = motsArrayExtract.sort(comparaisonAleatoire);
  
  let reponse = false;
  let indexArray = 0;
  flashCard.textContent = motsArraySort[indexArray].francais;
  
  buttonReponse.addEventListener("click", (e) => {
    e.preventDefault();
    reponse = true;
    if(indexArray <= motsArraySort.length-1){
      flashCard.textContent = motsArraySort[indexArray].arabe;
    }
  });
  
  buttonConnais.addEventListener("click", (e) => {
    e.preventDefault();
    if(reponse){
      indexArray++;
      if(indexArray <= motsArraySort.length-1){
        flashCard.textContent = motsArraySort[indexArray].francais;
      };
      if(indexArray === motsArraySort.length){
        console.log('vous etes arrive a la fin de la serie');
        let ancienIndexDebut = parseInt(localStorage.getItem("indexDebut"));
        let ancienIndexFin = parseInt(localStorage.getItem("indexFin"));
        let nouveauIndexDebut = ancienIndexDebut+5;
        let nouveauIndexFin = ancienIndexFin+5;
        let isLearned = parseInt(localStorage.getItem("isLearned"));
        let nouveauTableauMotsOublies = JSON.parse(localStorage.getItem("motsOubliesRevision"));
        if(nouveauTableauMotsOublies.length >= 1){
          indexArray = 0;
          localStorage.setItem('motsOubliesRevision', JSON.stringify([]));
          motsArraySort = motsArrayExtract.sort(comparaisonAleatoire);
          console.log('vous avez oublie des mots');
        }else{
          console.log(motsArray)
          if((isLearned % 2) === 0){
            localStorage.setItem("indexDebut", nouveauIndexDebut);
            localStorage.setItem('indexFin', nouveauIndexFin);
            if(nouveauIndexFin > motsArray.length){
              motsArrayExtract = motsArray.slice(nouveauIndexDebut, motsArray.length);
              console.log('c est plus grand que l index '+motsArray.length);
            }else{
              motsArrayExtract = motsArray.slice(nouveauIndexDebut, nouveauIndexFin);
            }
            motsArraySort = motsArrayExtract.sort(comparaisonAleatoire);
            indexArray = 0;
          };
          if((isLearned % 2) === 1 && isLearned > 0){
            motsArrayExtract = motsArray.slice(0, ancienIndexFin);
            motsArraySort = motsArrayExtract.sort(comparaisonAleatoire);
            indexArray = 0;
          };
          localStorage.setItem('isLearned', isLearned+1);
        }
        flashCard.textContent = motsArraySort[indexArray].francais;
      }
      reponse = false;
    }
  });
  
  buttonConnaisPas.addEventListener("click", (e) => {
    e.preventDefault();
    if(reponse){
      if(indexArray <= motsArraySort.length-1){
        let ancienTableauMotsOublies = localStorage.getItem("motsOubliesRevision");
        ancienTableauMotsOublies = JSON.parse(ancienTableauMotsOublies);
        let motsOublies = [...ancienTableauMotsOublies,motsArraySort[indexArray]];
        localStorage.setItem("motsOubliesRevision", JSON.stringify(motsOublies));
        indexArray++;
        console.log(motsOublies)
        if(indexArray <= motsArraySort.length-1){
          flashCard.textContent = motsArraySort[indexArray].francais;
        };
        if(indexArray === motsArraySort.length){
          console.log('vous etes arrive a la fin de la serie');
          let ancienIndexDebut = localStorage.getItem("indexDebut");
          let ancienIndexFin = localStorage.getItem("indexFin");
          let nouveauTableauMotsOublies = JSON.parse(localStorage.getItem("motsOubliesRevision"));
          if(nouveauTableauMotsOublies.length >= 1){
            indexArray = 0;
            localStorage.setItem('motsOubliesRevision', JSON.stringify([]));
            motsArraySort = motsArrayExtract.sort(comparaisonAleatoire);
            console.log('vous avez oublie des mots');
          }
          flashCard.textContent = motsArraySort[indexArray].francais;
        }
      };
      reponse = false;
      //console.log(motsOublies);
    }
  })
}

buttonApprentissage.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("indexDebut", 0);
  localStorage.setItem('indexFin', 5);
  localStorage.setItem('motsOublies', JSON.stringify([]));
  localStorage.setItem('isLearned', 0);
  localStorage.setItem("theme", "apprentissage");
  exerciceApprentissage()
});

buttonRevision.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem('motsOublies', JSON.stringify([]));
  exerciceRevision();
});

buttonMotsOublies.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("indexDebut", 0);
  localStorage.setItem('indexFin', 5);
  localStorage.setItem('motsOubliesRevision', JSON.stringify([]));
  localStorage.setItem('isLearned', 0);
  localStorage.setItem("theme", "apprentissage");
  exerciceApprentissageMotsOublies()
});