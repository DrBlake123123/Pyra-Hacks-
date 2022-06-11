const Greet = (name = "there!") => {

    if (Array.isArray(name)) {
    
    for (var i = 0; i < name.length; i++) {
    
    var str = name.toString();
    
    return str;
    
    }
    
    } else if (name == name.toUpperCase()) {
    
    return name;
    
    } else {
    
    return name;
    
    }
    
    };
    
    console.log(`Hello ${Greet("Elizabeth")}`);
    
    console.log(`Hello ${Greet()}`);
    
    console.log(`Hello ${Greet("JOSE")}`);
    
    console.log(`Hello ${Greet(['Jose','Pep'])}`);
    
    console.log(`Hello ${Greet(['Alex','Arsene','Jose','Zidane'])}`);