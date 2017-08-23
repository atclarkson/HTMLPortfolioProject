console.log("Start of Program");
var numbers = 1;
while(numbers <= 5){
  console.log(numbers);
  numbers++;
}
console.log("end of while loop.  Beginging for loop.")
for(numbers--; numbers >= 1; numbers--){
  console.log(numbers);
}

function countE (){
  var userPhrase = prompt("Please enter a word or phrase and I'll tell you how many's letter e's are in it.");
  if(typeof(userPhrase) != "string") {
    return;
  } else {
    var eCounter = 0
    for (var i = 0; i < userPhrase.length; i++) {
      if(userPhrase[i] == 'e' || userPhrase[i] == 'E'){
        eCounter++
      }
    }
    alert("There are " + eCounter + " E's in your phrase.");
    return eCounter;
  }

}

countE();

console.log("End of Program");
