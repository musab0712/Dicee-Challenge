var dice = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
var randomNum_1 = Math.floor(Math.random() * 6) + 1;
var randomNum_2 = Math.floor(Math.random() * 6) + 1;
// console.log(randomNum_1);
// console.log(randomNum_2);
var path1  = "images/"+dice[randomNum_1 - 1];
var path2  = "images/"+dice[randomNum_2 - 1];
// console.log(path1);
// console.log(path2);
var elem= document.getElementsByTagName('img');
elem[0].setAttribute("src" , path1);
elem[1].setAttribute("src" , path2);
// console.log(elem[0].getAttribute("src"));
// console.log(elem[1].getAttribute("src"));
elem= document.getElementsByTagName('h1');
if((randomNum_1 - 1) == (randomNum_2 - 1)) {
    elem[0].innerHTML = "Draw";
}
else if((randomNum_1 - 1) > (randomNum_2 - 1)) {
    elem[0].innerHTML = "Players 1 wins";
}
else {
    elem[0].innerHTML = "Players 2 wins";
}

