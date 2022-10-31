 
 
 let Numberofwon = 0;
let Numberoflost = 0;
 
 
 for(let i = 1; i <=5; i++){
    
    let guess = parseInt(prompt("Enter a Number from 1 to 5 : "));

  let randomNumber = Math.floor(Math.random()*5+1);

 if (guess == randomNumber) {
   document.write("Congratulate You are win <br/> <br/>");
   Numberofwon++;
}else{
    document.write("Uff's Sorry! You have to lost.Your lucky number was ~ <br/> "+randomNumber + "<br/> <br/>");
    Numberoflost ++;
} 
 }
document.write("Total Number of You won = "+Numberofwon + "<br/> <br/>");
document.write("Total Number of You Lost = "+ Numberoflost+ "<br/> <br/>");


