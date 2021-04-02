function selectedItem(itemPosition){
  
  // Primeiramente, configuramos as variáveis que iremos utilizar
  const item = document.querySelector("ul.mainCourse " + itemPosition); // Variável que guarda a posição do item que foi clicado
  const selectedMark = document.querySelector(itemPosition + " ion-icon"); // Variável que guarda o ionicon da caixa que foi clicado
  const removeClass = document.querySelector("ul.mainCourse .outlined"); // Variável que guarda o item que foi clicado anteriormente
  const previousSelectedMark = document.querySelector("ul.mainCourse li.outlined ion-icon"); // Variável que guarda o ionicon da posição que foi clicado anteriormente
  
  // Agora verificamos se algum item já foi selecionado anteriormente 
  if(removeClass !== null) {
    //Se sim, primeiramente, precisamos saber se o item clicado não é o próprio item que foi selecionado antes

    if(item === removeClass){
      // Se for o mesmo item selecionado anteriomente, precisamos apenas retirar a borda e o ionicon
      removeClass.classList.remove("outlined");
      selectedMark.classList.remove("display");
      finalizationButton();
      return; // Como não vamos adicionar mais nada, podemos dar um return para fazer sair da função
    
    }    
    // Caso sejam itens distintos, primeiramente removemos a borda e o ionicon do item anterior
    removeClass.classList.remove("outlined");
    previousSelectedMark.classList.remove("display");
  }

  //Agora, podemos colocar a borda no item selecionado
  item.classList.add("outlined");
  selectedMark.classList.add("display");
  finalizationButton();

}

function selectedDrink (itemPosition){

  const item = document.querySelector("ul.drink " + itemPosition);
  const selectedMark = document.querySelector(itemPosition + " ion-icon");
  const removeClass = document.querySelector("ul.drink .outlined");
  const previousSelectedMark = document.querySelector("ul.drink li.outlined ion-icon");
  
  if(removeClass !== null) {

    if(item === removeClass){

      removeClass.classList.remove("outlined");
      selectedMark.classList.remove("display");
      finalizationButton();
      return;

    }    

    removeClass.classList.remove("outlined");
    previousSelectedMark.classList.remove("display");

  }

  item.classList.add("outlined");
  selectedMark.classList.add("display");
  finalizationButton();

}

function selectedDessert (itemPosition){
  
  const item = document.querySelector("ul.dessert " + itemPosition);
  const selectedMark = document.querySelector(itemPosition + " ion-icon");
  const removeClass = document.querySelector("ul.dessert .outlined");
  const previousSelectedMark = document.querySelector("ul.dessert li.outlined ion-icon");
  
  if(removeClass !== null) {
  
    if(item === removeClass){
  
      removeClass.classList.remove("outlined");
      selectedMark.classList.remove("display");
      finalizationButton();
      return;

    }    
    
    removeClass.classList.remove("outlined");
    previousSelectedMark.classList.remove("display");

  }

  item.classList.add("outlined");
  selectedMark.classList.add("display");
  finalizationButton();
}

function finalizationButton(){
  const totalItensSelected = document.querySelectorAll(".outlined"); // Vetor com o número de elementos utilizando a classe .outlined (classe que deixa a borda verde do elemento selecionado)
  const finalizationButton = document.querySelector("footer button"); 
  if(totalItensSelected.length === 3){ // Caso tenha 3 elemetos selecionados, podemos ativar o botão
    finalizationButton.classList.add("activated");
    finalizationButton.innerHTML = "Fechar pedido";
  } else { // Caso contrário, continuamos com o botão inativo
    finalizationButton.classList.remove("activated");
    finalizationButton.innerHTML = "Selecione os 3 itens para fechar o pedido"
  }
}