let display = document.getElementById("display");

// Add value to screen
function appendValue(value){
  display.value += value;
}

// Clear screen
function clearDisplay(){
  display.value = "";
}

// Delete last character
function deleteLast(){
  display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate(){
  try{
    display.value = eval(display.value);
  }
  catch(error){
    display.value = "Error";
  }
}

// Keyboard support
document.addEventListener("keydown", function(event){

  if(event.key >= "0" && event.key <= "9" || "+-*/.".includes(event.key)){
    appendValue(event.key);
  }

  else if(event.key === "Enter"){
    calculate();
  }

  else if(event.key === "Backspace"){
    deleteLast();
  }

  else if(event.key === "Escape"){
    clearDisplay();
  }

});