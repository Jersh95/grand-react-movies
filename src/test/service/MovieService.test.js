import {videoResult} from '../json/video.json';
import MovieService from '../../service/MovieService';
import Video from '../../class_wrapper/Video';

describe('MovieService component', () => {
  it('getConfig not null', async () => {
    const config = await MovieService.getConfig();
    expect(config).toBeDefined();
  });

  it('discoverNewMovies returns results', async () => {
    const movies = await MovieService.discoverNewMovies();
    expect(movies.length).toEqual(20);
    movies.map(movie => () => {
      expect(movie instanceof Video);
    });
  });
});