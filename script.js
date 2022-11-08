let apiQuotes = [];

//Show New Quote
const newQuote = () => {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)] 
  console.log(quote)
}


// Get Quotes From API
async function getQuotes() {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    //Catch Error Here
    alert(error);
  }
}

// On Load
getQuotes()