var sentence = ["I", "love", "Pyra Hacks"+"!"];
 
let line = "";


function formsentence(arr) {
  
  for (let counter = 0; counter < arr.length; counter++) {


    if (counter == arr.length - 1) {
      line = line + arr[counter];
    }

    else {
    
      line = line + arr[counter] + " ";
      
    }

  }


  return line;
}

console.log(formsentence(sentence));
