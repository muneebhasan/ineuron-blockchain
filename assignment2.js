// Assignment # 2 

// which type of triangle you have 

function triangle(x,y,z){
    if ((x==y)&&(x==z)&&(y==z)){
        console.log("The triangle is equilateral all sides "+ x, + y, + z +" are equal");
    }
    else if ((x==y)||(x==z)||(y==z)){
        console.log("the traingle is isosceles Triangle "+ x, + y, + z +" only 2 sides are equal");
    }
    else{
        console.log("The triangle is Scalene all slides "+ x, + y, + z +" are not equal");
    }
}
triangle(4,42,40)


// question # 2 switch 

let marks_score="S grade";
switch(marks_score){
    case "S grade":
        console.log(marks_score+" marks are between 90 and 100");
    break;

    case "A grade":
        console.log(marks_score+" marks are between 80 and 90");
    break;
    case "B grade":
        console.log(marks_score+" marks are between 70 and 80");
    break;
    case "C grade":
        console.log(marks_score+" marks are between 60 and 70");
    break;
    case "D grade":
        console.log(marks_score+" marks are between 50 and 60");
    break;
    case "E grade":
        console.log(marks_score+" marks are between 40 and 50");
    break;
    case "F grade":
        console.log(marks_score+" marks are between 0 to 40 ");
    break;
    default:
        console.log(marks_score+" invalid score")

    }
    

// question # 3 

// variable sum
var sum =0 ;
for (x=0;x<100;x++){
    if ((x%3===0)||(x%5==0)){
        sum +=x;
    }

}
console.log("The sum of multiples 3 and 5 between 100 is  "+ sum)


// question # 4 

// Declearation of function 

function prime(lowerNumber,higherNumber){

    for (let i = lowerNumber; i <= higherNumber; i++) {
        let flag = 0;
    
        // looping through 2 to user input number
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
    
        // if number greater than 1 and not divisible by other numbers
        if (i > 1 && flag == 0) {
            console.log(i);
            


        
        }
        
            }
        }
    


prime(1,10)