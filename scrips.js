function gameGuess() {
    var guessNum = 5;
    var ourNum = prompt("Введите что-нибудь");
    if (ourNum > guessNum) {
        alert("Число должно быть меньше");
        return gameGuess();
    } else if (ourNum < guessNum) {
        alert("Число должно быть больше");
        return gameGuess();
    } 
}
gameGuess();

function resinder() {
    alert("Слишком долго");
    window.close();
}
setTimeout(resinder, 5000);

function valide() {
    var name = document.gerElementById("name").value;    
    var password = document.getElementById("password").value;
    
    var reg_name = /^[a-za-я]+$/i;
    var pass_name = /[a-z0-9][5,100]/i;

}
document.querycommandSelector(".button").addEventListener("click", valide);
