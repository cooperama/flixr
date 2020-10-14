// -------------- Edit Playlist Functions

function updatePlaylistMovies() {
  const movieChoices = [];

  const movieIdInputs = document.querySelectorAll('.movie-id-checkbox');

  // push checked movies into array

  movieIdInputs.forEach(input => {
    const movieId = input.getAttribute('name');

    console.log(movieId)

    /// not sure
    if (input.checked) {
      console.log('checked')
      movieChoices.push(movieId);
    }
  })

  // set value of movie choices input to checked movies
  const moviesToUpdate = document.getElementById('movie-choices');
  moviesToUpdate.setAttribute('value', movieChoices)

  console.log('******* final *********')
  console.log('moviechoices; ', movieChoices)

}


// module.exports = {
//   editHelper: updatePlaylistMovies
// }