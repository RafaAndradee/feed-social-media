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

// VER RESULTADOS
const outputHtml = matches => {
 if (matches.length > 0) {
  const html = matches
   .map(
    match => `<div class="card card-body mb-1">
    <h4>${match.CIDADE} (${match.IATA})
   </div>`
   )
   .join('');
  matchList.innerHTML = html;
 }
};

window.addEventListener('DOMContentLoaded', pegarOrigens);
search.addEventListener('input', () => searchStates(search.value));
