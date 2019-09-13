"use strict";

/*
var xhr = new XMLHttpRequest();

xhr.open('GET', 'data/airport.json');
xhr.send(null);



xhr.onreadystatechange = function(){
  if (xhr.readyState === 4) {
    JSON.parse(xhr.responseText)
  }
}
*/
//"resolve" caso a requisição tenha dado certo
//"reject" caso a  tenha dado erro
var xhr = new XMLHttpRequest();

xhr.onload = function () {
  if (xhr.status === 200) {
    var responseObject = JSON.parse(xhr.responseText);
    var newContent = responseObject;
    /*
    let newArr = newContent.map(function(item, teste){
      return item.lenght
    })
    */

    /*
    let newArr = newContent.reduce(function(total,next){
      return console.log(responseObject)
    })
    */

    var newArr = newContent.filter(function (item) {
      return item.IATA == "BEL";
    });
    console.log(newArr.CIDADE);
    /*
    let newArr = newContent.find(function(item){
      return newContent.IATA === '^';
     })
    */

    console.log(newArr);
    document.getElementById('texto').innerHTML = newArr.IATA;
  }
};

xhr.open('GET', 'data/airport.json', true);
xhr.send(null);
/*
var minhaPromise = function() {
  return new Promise(function(resolve, reject){ // criar promise (classe)
    var xhr = new XMLHttpRequest(); // requisição assincrona
    xhr.open('GET', 'data/airport.json') // caminho da requisição
    xhr.send(null);

    xhr.onreadystatechange = function(){ //quando a requisição for concluida
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText)); // parametro de sucesso da promise
        }else {
          reject('Erro na requisição');
        }
      }
    }
  })
}


minhaPromise()
  .then(function(response){
    console.log(response.push(['teste']));
  })
  .catch(function(error){
    console.warn(error);
  })



class List {
  constructor(){
    this.data = [];
  }
  add(data){
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List{
  constructor(){
    super();
    this.usuario = 'rafa';
  }
  mostraUsuario(){
    console.log(this.usuario);
  }
}

const MinhaLista = new TodoList()

document.getElementById('novotodo').onclick = function() {
  MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();
 */
