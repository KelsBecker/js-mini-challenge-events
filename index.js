/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
// grab the element
const header = document.querySelector('#header')
//listen to click event of the element
header.addEventListener('click', function(event){
  toggleColor(event.target) //event.target is the header
});

function toggleColor(header) {
  if (header.style.color === "red") {
    header.style.color = "black"
  } else {
    header.style.color = "red"
  }
};


/***** Deliverable 2 *****/
const newPlayerForm = document.querySelector('#new-player-form')
newPlayerForm.addEventListener('submit', function(event){
  event.preventDefault()
  let player = {
    number: event.target.number.value,
    name: event.target.name.value,
    nickname: event.target.nickname.value,
    photo: event.target.photo.value,
    likes: 0
  }
  renderPlayer(player)
  newPlayerForm.reset()
})

/***** Deliverable 3 *****/
playerContainer.addEventListener('click', function(event){
  if(event.target.className === 'like-button'){
    let likeCount = parseInt(event.target.previousElementSibling.innerText)
    let newLikeCount = likeCount + 1
    event.target.previousElementSibling.innerText = newLikeCount + " Likes"
  }
})