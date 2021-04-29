function getMovieRecommendation(){
    var movieName = document.getElementById("random__movie__name__");
    var movieCast = document.getElementById("random__movie__cast__");
    var movieYear = document.getElementById("random__movie__year__");
    var movieImage = document.getElementById("random__movie__image__");
    var movieRating = document.getElementById("random__movie__rating__");
    var getSelectedGenre = document.getElementById("get__selected__item__");
    var movieDesc = document.getElementById("random__movie__desc__");
    var movieTrailer = document.getElementById("random__movie__trailer__");
    url = "http://movieapidk7.herokuapp.com/api/v1/resources/movies/random";
    if (getSelectedGenre.value != "Random Genre") {
        url = "http://movieapidk7.herokuapp.com/api/v1/resources/movies/random?genre=" + getSelectedGenre.value;
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
                movieCast.innerHTML = repo.star;
                movieYear.innerHTML = repo.year;
                movieImage.src = repo.imgurl;
                if(repo.rating){
                    movieRating.innerHTML = repo.rating;
                }else{
                    movieRating.innerHTML = "";
                }
                movieDesc.innerHTML = repo.desc;
                movieTrailer.src = repo.youtubeurl;
                
              });          
        }
    };
    xhr.send();
    
}
