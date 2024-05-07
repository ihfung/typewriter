const sentence = "hello there from lighthouse labs";
let delay = 0;
for (const char of sentence) { //iterating every letter in the sentence
  
  setTimeout(() => {
  // print the char here
  //each letter delayed by 50ms
    process.stdout.write(char); //print the letter
    console.log(); //print a new line
  }, delay);
  delay += 50; //delay increases by 50ms
}

