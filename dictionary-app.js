//https://dictionaryapi.dev/

//Notes from API Site
//Usage : The basic syntax of a URL request to the API is shown below:
//https://api.dictionaryapi.dev/api/v2/entries/en/<word>
//As an example, to get definition of English word hello, you can send request to
//https://api.dictionaryapi.dev/api/v2/entries/en/hello

//-----------------------------------------------------------------

//testing dictionary API
// async function dictionaryCall() {
//   let response = await fetch ("https://api.dictionaryapi.dev/api/v2/entries/en/data")
//   let responseData = await response.json();
//   console.log(responseData);
// }

// dictionaryCall();

//----------------------

//selecting P element to populate with dictionary definition
let definitionParagraph = document.getElementById("definitionArea");


//creating a function that takes userinput to call dictionary API with user input
  //within Function
    //select input field and assigning it to the variable userInput

//main functionality of web app here ⬇ 

async function userInputDictionaryCall() {
  let userInput = document.getElementById("userInput");
  console.log(userInput.value);
  //let response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + userInput.value)
  let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${userInput.value}`)
  let responseData = await response.json();
  console.log(responseData[0].meanings[0].definitions[0].definition);
  definitionParagraph.innerText = responseData[0].meanings[0].definitions[0].definition;
}

//---------

//selecting the button with id searchbutton
let searchButton = document.getElementById("searchButton");

//adding event listener to search button to call function
searchButton.addEventListener("click",userInputDictionaryCall)

//event listener that searches when ENTER is clicked - incomplete

// searchButton.addEventListener("keypress", function(event){
//   if (event.key === "Enter") {
//     userInputDictionaryCall
//   }
// }

//----------

//add event listener to hide suggested searches on click
let suggestedSearches = document.getElementById("suggestedSearches");

function hideSuggested() {
  suggestedSearches.style.display = "none"
}

searchButton.addEventListener("click", hideSuggested);
//---------