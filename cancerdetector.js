//cancer detector 
var age= 43;
function chance(){

if (age >= 50) {
  console.log("higher chances");
}
else {
  console.log("lower chances but consult a doctor")
}

}
chance();
//symptom1= "Lump or area of thickening that can be felt under the skin."
//symptom2= ""Skin changes, such as yellowing, darkening or redness of the skin, sores that won't heal, or changes to existing moles.";

var symptom1= "false";
var symptom2= "false";
var symptoms12= "false";

function symptoms(){
 if (symptom1=true) {
    console.log("immediately visit a doctor");
}
else if (symptom2=true) {
  console.log("lower chances, but be sure to consult a doctor")
}
    
}
symptoms();


function avoid(){
 if (age <= 50)
    console.log("Don't use tobacco, using any type of tobacco puts you on a collision course with cancer, eat a healthy diet, maintain a healthy weight and be physically active");
    else if (symptoms12=false){
        console.log("Get regular medical care")
    }
}
avoid();