// Variable Practice 

var name = "Nayan Mia";
console.log(name); // Nayan Mia

let address = "Dhaka, Bangladesh";
console.log(address); // Dhaka, Bangladesh

const MitusVersity = "Chattogram University";
console.log(MitusVersity); // Chattogram University

let fan = "Hania Amir";
console.log(fan); // Hania Amir

const movieOfTheYear = "Tandob";
console.log(movieOfTheYear); // Tandob 

const hobby = "Reading Books";
console.log(hobby); // Reading Books

const favColor = "Black";
console.log(favColor); // Black

// Boolean Data Type 

const crushMessage = true;
console.log(crushMessage); //true

const isPhoneCharged = false;
console.log(isPhoneCharged); // false

const isDinnerDone = true;
console.log(isDinnerDone); // true

 

// Math 

const earnMoney = 100;
const costMoney = 40;

const hasMoney = earnMoney - costMoney;
console.log(hasMoney); // 60 

 
const str1 = "Hello";
const str2 = "World"; 

const strAdd = str1 + str2;
console.log(strAdd); // HelloWorld



// Data Type Check 

const price = 555;
console.log(typeof price); // number

const learning = true;
console.log(typeof learning); // boolean 

const megaCity = "Dhaka";
console.log(typeof megaCity); // String


// ParseInt and ParseFloat 

const sugar = parseInt("20");
console.log(typeof sugar); // 20 number

const fatherAge = "50";
const fatherAgeNumber = parseInt(fatherAge);
console.log(fatherAgeNumber) // 50

const first = 12.13568;
const second = 31.22564;

const total = first + second;
console.log(total.toFixed(2)) // 43.36



// Comparision 

console.log(5 > 10); // false

console.log(5 < 10); // true

console.log(5 == 10); // false 

console.log(10 == 10); // true

console.log(10 >= 10); // true 

console.log(15 >= 10); // true

console.log(5 <= 10); // true

console.log(7 != 10); // true 


// If else



    const rainingOutside = true;

    if(rainingOutside == true){
        console.log("You and me - under the tree.");
    }else{
        console.log("No rain, no romance.");
    }


    const weight = 40;

    if(weight > 20){
        console.log("Rickshaw mama cholo jai.");
    }else{
        console.log("Walking is Excercising.");
    }



    // Array 

    const numbers = [1,2,5,66,11,45];


    const size = numbers.length;
    console.log(size); // 6



    const numbers2 = [10,25,26,31,42,84,38,12,1];
    const fourth = numbers2[14];
    console.log(fourth); // 42