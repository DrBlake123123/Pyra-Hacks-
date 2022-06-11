//greeting people
const greeting = (nameofperson = "") => {

    if (Array.isArray(nameofperson)) {
    
    for (var i = 0; i <= nameofperson.length; i++) {
    
    var str = nameofperson.toString();
    
    return str; }
    
    } 
    
    
    else {
    
    return nameofperson; }
    
    };
    
    console.log(`Hello ${greeting("Andrew")}`);
    
    console.log(`Hello ${greeting("Mike")}`);
    
    console.log(`Hello ${greeting("Claire")}`);
    
    console.log(`Hello ${greeting(['Andrew','Mike','Claire'])}`);