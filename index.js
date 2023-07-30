
var randomNumber1 = Math.ceil(Math.random()*6);
var randomNumber2 = Math.ceil(Math.random()*6);
var str1 = "images/dice"+ randomNumber1 + ".png";
var str2 = "images/dice"+ randomNumber2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", str1);
document.querySelectorAll("img")[1].setAttribute("src", str2);
if(randomNumber1>randomNumber2)
   document.querySelector("h1").innerHTML = "🚩Player 1 wins";
else if(randomNumber1<randomNumber2)
    document.querySelector("h1").innerHTML = "Payer 2 wins🚩";
else
    document.querySelector("h1").innerHTML = "Draw 🤓";

