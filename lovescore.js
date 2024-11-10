prompt("What is your name?");
prompt("What is their name?");

var loveScore=Math.random()*100;
loveScore=Math.floor(loveScore)+1; //1-100

//conditions

if (loveScore >70) {
    alert("Your love score is " + loveScore + "%" + "You love each other like kanye love kanye");
}

else if (loveScore > 30 && loveScore <=70){
    alert("Your love score is " + loveScore + "%");
}
else (loveScore <=30) {
    alert("Your love score is " + loveScore + "%" + "you are not matched together at all!");
}
