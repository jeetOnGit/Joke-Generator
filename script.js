// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => console.log(json))

let container = document.getElementById("box")
let qus = document.getElementById("ques")
let ans = document.getElementById("ans")
let url = "https://v2.jokeapi.dev/joke/Any"

let getJoke = () =>{
  fetch(url)
      .then(data => data.json())
      .then(item => {
        qus.textContent = `${item.setup}`
        ans.textContent = `${item.delivery}`
      })
}
function myAudio() {
  let sound = new Audio("sound/mixkit-crowd-laugh-424.wav")
  sound.play()
}
btn.addEventListener('click', getJoke)
btn.addEventListener('click', myAudio)

getJoke()
myAudio()