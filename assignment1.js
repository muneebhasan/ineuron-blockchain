// Assignment # 1 

// question#1 Leap year or not 

var year="2023";

if ((year%4==0)&&(year%100 !=0)||(year%400==0)){
    console.log("The year "+ year+" is a leap year")
}
else{
    console.log("The year  "+ year+" not a leap year")
}

// Celsius to Farhenheit

function temperature(x){
    var f=((x/5*9)+32)
    console.log("The celsius temperature is "+  x + " The farhenheit is " + f)
}
temperature(60)


//function to find factorial 

function factorial(x){
    if (x<=0){
        console.log("negative number does not have factorial  ");
    }
    else if (x==1){
        console.log("1 factorial is always 1");
    }
    else{
        let fac=1;
        for (i=1 ; i<=x; i++){
            fac *=i;
        }
        console.log("the factorial of "+ x +" is "+ fac)
    
    }
}
factorial(3)