let Video = class {
  constructor(apiMovie, config) {
    if(apiMovie) {
      this.id = apiMovie.id;
      this.title = apiMovie.title;
      this.originalTitle = apiMovie.title;
      this.voteCount = apiMovie.vote_count;
      this.voteAverage = apiMovie.vote_average;
      this.popularity = apiMovie.popularity;
      this.originalLanguage = apiMovie.original_language;
      this.overview = apiMovie.overview;
      this.releaseDate = apiMovie.release_date;
      this.genreIds = apiMovie.genre_ids;
      this.video = apiMovie.video;
      this.adult = apiMovie.adult;
      this.backdropPath = apiMovie.backdrop_path;
      this.posterPath = apiMovie.poster_path;
    }
    if(config) {
      this.baseUrl = config.images.secure_base_url;
      this.backdropSizes = config.images.backdrop_sizes;
      this.posterSizes = config.images.poster_sizes;
    }
  };
};

export default Video;