function getAnotherSuggestion(){
    var movieName = document.getElementById("random__movie__name__");
  var movieYear = document.getElementById("random__movie__year__");
  var movieRating = document.getElementById("random__movie__rating__");
  var movieDesc = document.getElementById("random__movie__desc__");
  var movieTrailer = document.getElementById("random__movie__trailer__");
  var movieImage = document.getElementById("random__movie__image__");
  var movieRuntime = document.getElementById("random__movie__time__")
  var movieGenre = document.getElementById("random__movie__genre__"); 
  var movieCast = document.getElementById("random__movie__cast__");
  var getSelectedGenre = document.getElementById("get__selected__item__");
  url = "https://movieapidk7.herokuapp.com/api/v1/resources/movies/random";
    if (getSelectedGenre.value != "Random") {
        url = "https://movieapidk7.herokuapp.com/api/v1/resources/movies/random?genre=" + getSelectedGenre.value;
    }
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.responseType = 'json';
  xhr.onload = function (e) {
      if (this.status == 200) {
          console.log(this.response);
          var response = this.response
          response.forEach((repo) => {
              movieName.innerHTML = repo.title;
              movieYear.innerHTML = repo.year;
              movieImage.src = repo.imgurl;
              movieCast.innerHTML = repo.star;
              if(repo.rating){
                  movieRating.innerHTML = repo.rating;
              }else{
                  movieRating.innerHTML = "Unreleased";
              }
              if(repo.runtime){
                  if(movieRuntime.style.display == "none")
                      movieRuntime.style.display = "block";
                  movieRuntime.innerHTML = repo.runtime;
              }else{
                  movieRuntime.style.display = "none";
              }
              movieDesc.innerHTML = repo.desc;
              movieTrailer.src = repo.youtubeurl;
              if(getSelectedGenre.value == "Random")
                movieGenre.innerHTML = repo.genre;
              else
                movieGenre.innerHTML = getSelectedGenre.value;
            });          
      }
  };
  xhr.send();
}
const likeBtn = document.getElementById('like-btn');
const heart = document.getElementById('like-icon');
const btnContent = document.querySelector('#like-btn span')
var likes = 0;

function buttonLike(){

    if(likeBtn.classList.contains('is-liked') == false){
        likeBtn.style.backgroundColor = '#e54b4b'
        likeBtn.classList.add('is-liked');
        btnContent.innerText = 'Liked';
        likeBtn.style.color = '#fff';
    } else{
        likeBtn.style.backgroundColor = '#ededed'
        likeBtn.classList.remove('is-liked');
        btnContent.innerText = 'Like';
        likeBtn.style.color = '#000';
    }
}

    

likeBtn.addEventListener('click', buttonLike);
