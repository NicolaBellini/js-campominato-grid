const canva = document.querySelector(".canva")
// faccio il reset della mia tela eliminando qualsiasi cosa abbia messo nell html
// reset();



// funzione che fa partire tutto
init()






// functions/////

// funzione per creare 100 quadrati e stamparli in pagina dentro a canva
function getHundredSq(){
  for(let i = 1; i <= 100; i++){
    const square = square100(i)

    canva.append(square)
  }
}
// funzione per generare i quadrati all interno della canva, e al click applica la classe .clicked, in più aggiungendo una costante(squareText) scrivendola nel sq.
function square100(indice){
  const sq = document.createElement("div");
  sq.className= "square100";

  // gli do una custom property
  sq._sqID = indice

  // aggiungo il numero nel data attribute
  sq.dataset.sqid = indice

  // aggiungo la funzione che al click mi scive nel quadrato il valore dell' indice
  sq.addEventListener("click", function(){
// do il valore di _sqID ad una costante
    const squareText = this._sqID

//  scrivo dentro al quadrato il valore di _sqID
    this.innerHTML = squareText

    // al click del mouse aggiungo otolgo la classe .clicked, però non ho ancora tolto squaretext messo con il primo click
    sq.classList.toggle("clicked")

    // usando un fattore ternario applico un blocco if
    this.innerHTML = (this.classList.contains("clicked"))?
                    this.innerhtml = squareText:
                    this.innerHTML = ""                  

    console.log(squareText);

  })

//  return sq molto importante alrimenti non sa cosa deve ritornare
  return sq
}






// // funzione per generare 81quadrati
// function eightyOneSq(){
//   for(let i = 1; i <= 81; i++){
//     const square = getSquare81()

//     canva.append(square)
//   }
// }
// // funzione per generare i quadrati all interno della canva
// function getSquare81(){
//   const sq = document.createElement("div");
//   sq.className= "square81";
//   return sq
  
//   console.log(sq)
// }




// // funzione per generare 49quadrati
// function fourthyNineSq(){
//   for(let i = 1; i <= 49; i++){
//     const square = getSquare49()

//     canva.append(square)
//   }
// }
// // funzione per generare i quadrati all interno della canva
// function getSquare49(){
//   const sq = document.createElement("div");
//   sq.className= "square49";
//   return sq
  
//   console.log(sq)
// }


function init(){
  reset();
  getHundredSq()
  square100()
}


// funzione per resettare la tela
function reset(){
  canva.innerHTML = ""
}