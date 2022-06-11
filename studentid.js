function checkPoint2(){
    alert3();

    const friends = ["Rei", "Miya", "Alexis", "Ethan", "Anna"];
  
    const studentID = [];
    
    for (let i = 0; i < friends.length; i++){ 
    
    studentID.push("JS" + i);
    
    }
    
    console.log(studentID);

    alerts(studentID);
}

function alerts(studentID) {
    if (studentID.length == 5) {
        alert("Yay! You got the system running!");
    }
    else {
        alert("You failed!");
    }
}