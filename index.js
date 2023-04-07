
window.onload = function() {
    azar()
    azar2()
    cambioTitulo()
}

var player1 = document.querySelector(".img1")
var player2 = document.querySelector(".img2")

var randomNumber1 = Math.random()
    randomNumber1 = Math.floor(randomNumber1*6)+1
    
var randomNumber2 = Math.random()
    randomNumber2 = Math.floor(randomNumber2*6)+1
      
function azar(){

    if (randomNumber1 === 1){
        var resultado = player1.setAttribute("src", "images/dice1.png")
    }else if (randomNumber1 === 2){
        var resultado = player1.setAttribute("src", "images/dice2.png")
    }else if (randomNumber1 === 3){
        var resultado = player1.setAttribute("src", "images/dice3.png")
    }else if (randomNumber1 === 4){
        var resultado = player1.setAttribute("src", "images/dice4.png")
    }else if (randomNumber1 === 5){
        var resultado = player1.setAttribute("src", "images/dice5.png")
    }else{
        var resultado = player1.setAttribute("src", "images/dice6.png")
    }
    return resultado

} 

function azar2(){
    
    
    if (randomNumber2 === 1){
        var resultado2 = player2.setAttribute("src", "images/dice1.png")
    }else if (randomNumber2 === 2){
        var resultado2 = player2.setAttribute("src", "images/dice2.png")
    }else if (randomNumber2 === 3){
        var resultado2 = player2.setAttribute("src", "images/dice3.png")
    }else if (randomNumber2 === 4){
        var resultado2 = player2.setAttribute("src", "images/dice4.png")
    }else if (randomNumber2 === 5){
        var resultado2 = player2.setAttribute("src", "images/dice5.png")
    }else{
        var resultado2 = player2.setAttribute("src", "images/dice6.png")
    }
    return resultado2
}



function cambioTitulo(){

    var titulo = document.getElementById("cambioTitulo")
    
    if (randomNumber1<randomNumber2){
        titulo = titulo.textContent="Play 2 Wins!🚩"
    }else if(randomNumber1>randomNumber2){
       titulo =  titulo.textContent="🚩Play 1 Wins!"
    }else{
        titulo = titulo.textContent="Draw!"
    }
    console.log(titulo)
} 

window.onload()

console.log(randomNumber1)
console.log(randomNumber2)
