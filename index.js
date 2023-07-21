function scuberGreetingForFeet(feet){
  // Write your code here!
   switch(true){
    case feet <= 400:
      return 'This one is on me!';
    case feet <=2000:
      return 'That will be twenty bucks.'
    case feet <=2500:
      return 'I will gladly take your thirty bucks.';
    default:
      return 'No can do.';

   }
}



function ternaryCheckCity(city){
  // Write your code here!
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if (tip === "generous"){
    return "Thank you so much.";
  }else if (tip === "not as generous"){
    return "Thank you.";
  }else{
    return "Bye.";
  }
}