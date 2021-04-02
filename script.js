let mainCourse = "";
let mainCoursePrice = 0;
let drink = "";
let drinkPrice = 0;
let dessert = "";
let dessertPrice = 0;
let totalPrice;

function selectedItem(itemPosition){
  
  // Primeiramente, configuramos as variáveis que iremos utilizar
  const item = document.querySelector("ul.mainCourse " + itemPosition); // Variável que guarda a posição do item que foi clicado
  const nameItem = document.querySelector("ul.mainCourse " + itemPosition + " h3"); // Variável que guarda a tag h3 do nome do item selecionado
  const priceItem = document.querySelector("ul.mainCourse " + itemPosition + " .cost") // Varável que guarda a tag p do preço do item
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
  // Também ligamos o ion-icon do item
  selectedMark.classList.add("display");
  // Aqui pegamos o nome do prato que foi selecionado
  mainCourse = nameItem.innerHTML;
  // Aqui pegamos o preço do prato escolhido
  mainCoursePrice = parseFloat(priceItem.innerHTML.replace("R$ ", "").replace(",","."));
  
  
  finalizationButton();

}

function selectedDrink (itemPosition){

  const item = document.querySelector("ul.drink " + itemPosition);
  const nameItem = document.querySelector("ul.drink " + itemPosition + " h3");
  const priceItem = document.querySelector("ul.drink " + itemPosition + " .cost") // Varável que guarda a tag p do preço do item
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
  drink = nameItem.innerHTML;
  drinkPrice = parseFloat(priceItem.innerHTML.replace("R$ ", "").replace(",","."));
  

}

function selectedDessert (itemPosition){
  
  const item = document.querySelector("ul.dessert " + itemPosition);
  const nameItem = document.querySelector("ul.dessert " + itemPosition + " h3");
  const priceItem = document.querySelector("ul.dessert " + itemPosition + " .cost") // Varável que guarda a tag p do preço do item
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
  dessert = nameItem.innerHTML;
  dessertPrice = parseFloat(priceItem.innerHTML.replace("R$ ", "").replace(",","."));
  

}

function finalizationButton(){
  const totalItensSelected = document.querySelectorAll(".outlined"); // Vetor com o número de elementos utilizando a classe .outlined (classe que deixa a borda verde do elemento selecionado)
  const finalizationButton = document.querySelector("footer button"); 
  if(totalItensSelected.length === 3){ // Caso tenha 3 elemetos selecionados, podemos ativar o botão
    finalizationButton.classList.add("activated");
    finalizationButton.innerHTML = "Fechar pedido";
    finalizationButton.setAttribute("onClick", "confirmationScreen()");
  } else { // Caso contrário, continuamos com o botão inativo
    finalizationButton.classList.remove("activated");
    finalizationButton.innerHTML = "Selecione os 3 itens para fechar o pedido"
    finalizationButton.removeAttribute("onClick");
  }
}

function confirmationScreen(){

  let selectedItemInfo = null; // Essa variável será responsável por trazer as informações dos itens escolhidos para a tela de confirmação
  totalPrice = mainCoursePrice + drinkPrice + dessertPrice;

  selectedItemInfo = document.querySelector(".confirmation li.mainCourse .name"); // pegamos a tag do nome do prato escolhido
  selectedItemInfo.innerHTML = mainCourse;
  selectedItemInfo = document.querySelector(".confirmation li.mainCourse .cost"); // Pegamos a tag do valor do item
  selectedItemInfo.innerHTML = mainCoursePrice.toFixed(2);

  selectedItemInfo = document.querySelector(".confirmation li.drink .name");
  selectedItemInfo.innerHTML = drink;
  selectedItemInfo = document.querySelector(".confirmation li.drink .cost");
  selectedItemInfo.innerHTML = drinkPrice.toFixed(2);

  selectedItemInfo = document.querySelector(".confirmation li.dessert .name");
  selectedItemInfo.innerHTML = dessert;
  selectedItemInfo = document.querySelector(".confirmation li.dessert .cost");
  selectedItemInfo.innerHTML = dessertPrice.toFixed(2);

  selectedItemInfo = document.querySelector(".confirmation li.total .cost");
  selectedItemInfo.innerHTML = totalPrice.toFixed(2);


  const screen = document.querySelector(".confirmation");
  screen.classList.add("displayConfirmation");
}

function removeConfirmationScreen(){
  const screen = document.querySelector(".confirmation");
  screen.classList.remove("displayConfirmation");
  
  let input = document.querySelector(".confirmation input.name");
  input.value = "";

  input = document.querySelector(".confirmation input.address");
  input.value = "";
}

function sendToWhatsapp(){
  const name = document.querySelector(".confirmation input.name").value;
  const address = document.querySelector(".confirmation input.address").value;

  if(name === "" || address === ""){
    alert("Por favor, preencha todos os campos obrigatórios");
  } else {
    let message = "Olá, gostaria de fazer o pedido: \n - Prato: " + mainCourse + "\n - Bebida: " + drink + "\n - Sobremesa: " + dessert + "\n Total: R$ " + totalPrice.toFixed(2);
    message = message + "\n\nNome: " + name + "\nEndereço: " + address;
    message = encodeURIComponent(message);
    window.open("https://wa.me/5555984193093?text="+message);
  }
  
}