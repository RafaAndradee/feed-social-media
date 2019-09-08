const search = document.getElementById('search');
const matchList = document.getElementById('match-list');
let origens; //corresponde a lista de lugares disponiveis inseridos na lista .Json

// PEGAR A LISTA
const pegarOrigens = async () => {
 const res = await fetch('./data/airport.json');
 origens = await res.json();
};

// FILTRAR A LISTA
const searchStates = searchText => {
 // FILTRA A PALAVRA DIGITADA NA BUSCA PARA RELACIONAR COM UMA LISTA DE OBJETOS JSON
 let matches = origens.filter(state => {
  const regex = new RegExp(`^${searchText}`, 'gi');
  return state.CIDADE.match(regex) || state.IATA.match(regex);
 });

 // EVITAR APARECER TUDO QUANDO CLICAR NO INPUT
 if (searchText.length === 0) {
  matches = [];
  matchList.innerHTML = '';
 }

 outputHtml(matches);
};




//criar uma array com os titulos de cada objeto da lista
//criar uma função que marque o texto com uma id


//titleOrigens.map(function(index));

function clickListener(){

  const addActive = document.getElementById('listOrigin').id = 'listActive'
  const listActive = document.getElementById('listActive')

  const titleOrigens = document.getElementsByClassName('titleOrigens');


}


/*
function clickListener(e){
    var el = document.querySelector('h4')
    e = el.textContent
}
*/


// VER RESULTADOS
const outputHtml = matches => {



 if (matches.length > 0) {
  const html = matches
   .map(
    match => `<div class="card card-body mb-1 listOrigin">
    <h4 id="listOrigin" class="titleOrigens" onclick="clickListener()">(${match.IATA}) ${match.CIDADE} </h4>
   </div>`
   )
   .join('');

  matchList.innerHTML = html;



 }





};





window.addEventListener('DOMContentLoaded', pegarOrigens);
search.addEventListener('input', () => searchStates(search.value));
