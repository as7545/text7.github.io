fetch('https://meme-api.herokuapp.com/gimme')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });