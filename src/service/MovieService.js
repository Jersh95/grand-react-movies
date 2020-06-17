import Video from '../class_wrapper/Video';

const { MovieDb } = require('moviedb-promise');
const moviedb = new MovieDb('97ff94ffa322661543429f8a9b3199df');

export const getConfig = async () => {
  let config = {};
  await moviedb.configuration().then(results => {
    config = results;
  });

  return config;
};

export const discoverNewMovies = async (params) => {
  const config = await getConfig();
  return await moviedb.discoverMovie({
    'language': 'en-US',
    'region': 'US'
  }).then(results => {
    if(results) {
      return results.results.map(apiVideo => {
        return new Video(apiVideo, config);
      });
    }
  });

};