// TODO
const Cards = document.querySelector('.cards')

fetch('json/cards.js')
  .then(res => res.json())
  .then(json => showCards(json))

function showCards(stats) {
  
  for(const stat of stats) {
    const view = `<div class="col">
    <div class="card d-flex flex-row shadow-sm">
      <div class="prepend-icon ${stat.bg} text-white p-3 d-flex align-items-center">
        <span data-feather="${stat.icon}"></span>
      </div>
      <div class="p-2">
        <h3 class="m-0">${stat.name}</h2>
      </div>
    </div>
  </div>`
    
    Cards.insertAdjacentHTML('beforeend', view)
    feather.replace()
  }
}
    
    






