//College profile rating 

var gpa= 3.0;
var SAT= 1450; 
let ecs1= "national competition winner, volunteer work, olympiad finalist";
let essay= "great essays!";

function chancemegpa(){
    if(gpa=true){
        console.log("great gpa!");
    }
    else {
        console.log("work harder");
    }
}
chancemegpa();

function chancemeSAT(){
    if(SAT>=1500&&SAT<=1600); {
    console.log("You are a competitive applicant! You are among the 99th percentile.");
    }
    
    if(SAT<=1500) {
        console.log("consider retaking the test.")
    }
   
}
chancemeSAT();

function chancemeecs(){
    if(ecs=true){
        console.log("You're passionate about your field of interest!")
    }
}
chancemeecs();

