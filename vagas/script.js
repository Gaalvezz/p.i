var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// 
//function desistir() {


  //  let desistir = document.querySelector('.desistir')

    //desistir = confirm("Deseja Desistir ?");
    
    //if (desistir == true ) {
      //  alert("Você deseja continuar na vaga")
    //}
    

//}



// const btn = document.querySelector('.button-desistir')

// const btn1 = document.querySelector('.button-desistir')

// //fazendo evento de clique
// btn.addEventListener('click', abrirModal)
// btn1.addEventListener('click', abrirModal)


// function abrirJanela(){
//     const modal = document.querySelector('.janela')
//     const modalAtual = modal.style.display

//     if(modalAtual == 'block'){
//         modal.style.display = 'none'
//     }else{
//         modal.style.display = 'block'
//     }
// }




// function abrirJanela(){
//     let janela = document.querySelector('.button-desistir')

//     janela.computedStyleMap.display = "block"
// }

// function fechaJanela(){
//     let janela = document.querySelector ('.button-desistir')

//     janela.computedStyleMap.display = 'none'
// }

