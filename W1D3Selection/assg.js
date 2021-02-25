const prompt = require("prompt-sync")();

/*Write a program that helps a user choose the correct footwear for the day’s weather based on
the table shown below. If the user enters any other weather type, your program should output
“sneakers”*/
let weather = prompt("What's the weather today? ")
if(weather.toUpperCase() ===('HOT')){
    console.log("Yor correct footwear is Sandals.")
} else if(weather.toUpperCase() ==='RAINY'){
    console.log("Yor correct footwear is galoshes.")
} else if(weather.toUpperCase() ==='SNOW'){
    console.log("Yor correct footwear is boots.")
} else{
    console.log("Yor correct footwear is sneakers. ")
}

/* Write a program that reads from the keyboard a student's name and number of completed
credits and then outputs the student's name and label*/
let stdName = prompt("Enter your name: ")
let crCompleted = +prompt("Enter your credit completed: ")
if(crCompleted<30){
    console.log(`${stdName}, you are Freshman student.`)
}else if(crCompleted>30 && crCompleted<60){
    console.log(`${stdName}, you are Sophomore student.`)
} else if(crCompleted>60 && crCompleted<90){
    console.log(`${stdName}, you are Junior student.`)
} else{ 
        console.log(`${stdName}, you are Senior student.`)   
}
//Write a program that calculates down payment for a home loan based on cost
let houseCost = +prompt("What is the cost of the house? ")
if(houseCost<50000){
    console.log(`The interest rate for the house is ${5*houseCost/100}`)
} else if(houseCost>50000 &&houseCost<100000 ){
    console.log(`The interest rate for the house is ${10*(houseCost-50000)/100 + 1000}`)
} else if(houseCost>100000 &&houseCost<200000 ){
    console.log(`The interest rate for the house is ${15*(houseCost-100000)/100 + 2000}`)
} else{
    console.log(`The interest rate for the house is ${10*(houseCost-200000)/100 + 5000}`)
}

//A university library that loans book to students, faculty, and the public policy
let status = prompt("Enter your status: ")
let books = +prompt("How many books overdue do you have? ") 
if(status.toLowerCase()==='student'){
    if(books===0){
        console.log(`You have 6 weeks loan duration`)
    } else if(books<3){
        console.log(`You have 4 weeks loan duration`)
    } else{
        console.log(`You have 2 weeks loan duration`) 
    }
} else if(status.toLowerCase()==='faculty'){
    if(books===0){
        console.log(`You have 12 weeks loan duration`)
    } else if(books<3){
        console.log(`You have 10 weeks loan duration`)
    } else{
        console.log(`You have 8 weeks loan duration`) 
    }
} else{
    if(books===0){
        console.log(`You have 4 weeks loan duration`)
    } else if(books<3){
        console.log(`You have 3 weeks loan duration`)
    } else{
        console.log(`You have 2 weeks loan duration`) 
    }
}

// A program that determines what time a child should go to bed
let childAge = +prompt("What is the the child's age: ")
let season = prompt("What is the current season of the year: ")
if(childAge<5){
    if(season.toLowerCase()==='summer' || season.toUpperCase()==='fall'){
        console.log("Bed time is @8:30PM")
    }else if(season.toLowerCase()==='winter' || season.toUpperCase()==='spring'){
        console.log("Bed time is @8:00PM")
    }
}else if(childAge>5 || childAge<12){
    if(season.toLowerCase()==='summer'){
        console.log("Bed time is @9:30PM")
    }else if(season.toLowerCase()==='' || season.toUpperCase()==='fall' || season.toUpperCase()==='spring'){
        console.log("Bed time is @8:30PM")
    }
}else {
    if(season.toLowerCase()==='summer'){
        console.log("Bed time is @10:30PM")
    } else {
        console.log("Bed time is @9:30PM")
    }
}

// Q- What happens when you forget a break while using switch statement?
// A- It will the program continues execution at the next statement in the switch statement.

//Q- What will be the output of running following code?
/* var foo = 0;
switch (foo) {
 case -1:
 console.log('negative 1');
 break;
 case 0:
 console.log(0);
 case 1:
 console.log(1);
 break;
 case 2:
 console.log(2);
 break;
 default:
 console.log('default');
} */

//A- 0 and 1

//Q- Will output change if value of foo is a ‘0’ (0 in quotes) instead?
//A- Yes, the output will be default