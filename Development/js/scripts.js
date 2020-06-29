let food = prompt  ("what is your order");

switch(food) {
    case "1":
      console.log("burger");
      break;
    case "2":
       console.log("pizza");
      break;
      case "3":
        console.log("sushi");
        break;
    default:
        console.log ("we dont have this meal");
  }

let number1 = prompt("enter a number");

let number2 = prompt("enter a number");

let calculation = prompt("/ * - +");

switch(calculation){
    case "*":
     console.log( number1 *= number2);
      break;
    case "/":
        console.log( number1 /= number2);
      break;
    case "-":
        console.log( number1 -= number2);
      break;
      case "+":
        console.log( number1 += number2);
      break;
    default:
        console.log("enter a number please");
    }   
    
    let age = prompt("enter your age");

   if (age <= 5){
       console.log("روضة")
   }
   if (age <=17){
       console.log("مدرسة")
   }
   if (age >=18){
       console.log("جامعة")
   }