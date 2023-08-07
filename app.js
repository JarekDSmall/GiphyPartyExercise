console.log("Let's get this party started!");

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const searchTermInput = document.querySelector('#search-term');
    const removeButton = document.querySelector('#remove-button');
    const gifContainer = document.querySelector('#gif-container');

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const searchTerm = searchTermInput.value;
      if (searchTerm !== '') {
        searchGiphy(searchTerm, gifContainer);
      }
    });

    removeButton.addEventListener('click', function () {
      gifContainer.innerHTML = '';
    });
});

function searchGiphy(searchTerm, gifContainer) {
    const apiKey = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
    const url = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}`;
    
    axios.get(url)
      .then(function (response) {
        const gifData = response.data.data;
        const gif = gifData[Math.floor(Math.random() * gifData.length)];
        const gifUrl = gif.images.fixed_height.url;

        const newGif = document.createElement('img');
        newGif.src = gifUrl;
        newGif.alt = searchTerm;

        gifContainer.appendChild(newGif);
      })
      .catch(function (error) {
        console.log(error);
      });
}
