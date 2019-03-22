let randomWep = (image) => {
    //console.log(image)
    let userWeapon = image.target.alt
    // image.target.dataset.wtv
    console.log('works')
let x = Math.random()
if(x < .20){
    botWeapon = 'scissors'
}else if(x < .40 && x > 0.20){
    botWeapon = 'rock'
}else if(x < .60 && x > .40){
    botWeapon = 'paper'
}else if(x < .80 && x > 0.60){
    botWeapon = 'lizard'
}else{
    botWeapon = 'spock'
}
console.log(userWeapon)
//mutating the data passed in by the client, into a string
userWeapon.toString();
winner(userWeapon, botWeapon)

}
// instantiate(the procress of creating a instance of something) global player score
let playerCount = 0

let winner = (userWeapon, botWeapon) => {
    console.log(botWeapon)
    console.log(userWeapon)
 
    if(userWeapon==="rock"&&(botWeapon==="scissors"||botWeapon==="lizard")){
      playerCount+=1
   console.log('win')
   document.getElementById('result').textContent = 'YOU WIN'
   }else if(userWeapon==="paper"&&(botWeapon==="spock"||botWeapon==="rock")){
    playerCount+=1
   console.log('win')
   document.getElementById('result').textContent = 'YOU WIN'
   }else if(userWeapon==="scissors"&&(botWeapon==="lizard"||botWeapon==="paper")){
    playerCount+=1
   console.log('win')
   document.getElementById('result').textContent = 'YOU WIN'
   }else if(userWeapon==="lizard"&& (botWeapon==="spock"||botWeapon==="paper")){
    playerCount+=1
   console.log('win')
   document.getElementById('result').textContent = 'YOU WIN'
   }else if(userWeapon==="spock"&& (botWeapon==="rock"||botWeapon==="scissors")){
    playerCount+=1
   console.log('win')
   document.getElementById('result').textContent = 'YOU WIN'
    }else if(userWeapon===botWeapon){
   console.log('draw')
   }else {
     console.log('loss')
     document.getElementById('result').textContent = 'YOU LOST'
   }
};
    

    // let mySelection = document.querySelectorAll('img')
//going through the length of the selected elements in the html
// mySelection.forEach((pic) => {
    // pic.addEventListener('click',randomWep)
    // pic.addEventListener('click',selected)
// })
 
    // mySelection[i].addEventListener('click' , randomWep)
    // mySelection[i].addEventListener('click' , selected)

let mySelection = document.querySelectorAll('img')
    mySelection.forEach(image =>{
        image.addEventListener('click' , randomWep)
    })

