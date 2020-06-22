import Video from '../class_wrapper/Video';

const { MovieDb } = require('moviedb-promise');
const moviedb = new MovieDb('97ff94ffa322661543429f8a9b3199df');

const movieService = {
  async getConfig() {
    let config = {};
    await moviedb.configuration().then(results => {
      config = results;
    });

    return config;
  },

  async discoverNewMovies() {
    const config = await this.getConfig();
    return await moviedb.discoverMovie({
      'language': 'en-US',
      'region': 'US',
      'vote_count.gte': 10
    }).then(results => {
      return results.results.map(apiVideo => {
        return new Video(apiVideo, config);
      });
    });
  }

};

export default movieService;