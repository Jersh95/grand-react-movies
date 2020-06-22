import React from 'react';
import renderer from 'react-test-renderer';
import CatalogContainer from '../../components/catalog/CatalogContainer';
import MovieService from '../../service/MovieService';
import {videoResult} from '../json/video.json.js';
import VideoCard from '../../components/catalog/video-card/VideoCard';
import WaveLoader from '../../components/loader/WaveLoader';

describe('CatalogContainer component', () => {

  test('CatalogContainer renders with results', async () => {
    const spy = jest.spyOn(MovieService, 'discoverNewMovies').mockResolvedValue(videoResult);

    const component = await renderer.create(<CatalogContainer/>);
    let tree = component.toJSON();

    expect(component.root.findAllByType(VideoCard).length).toEqual(20);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(tree).toMatchSnapshot();
  });

  test('CatalogContainer renders with loader when no videos', async () => {
    const spy = jest.spyOn(MovieService, 'discoverNewMovies').mockResolvedValue(undefined);

    const component = await renderer.create(<CatalogContainer/>);
    let tree = component.toJSON();

    expect(component.root.findAllByType(WaveLoader).length).toEqual(1);
    expect(spy).toHaveBeenCalled();
    expect(tree).toMatchSnapshot();
  });

  test('CatalogContainer renders with loader when no videos', async () => {
    const spy = jest.spyOn(MovieService, 'discoverNewMovies').mockResolvedValue([]);

    const component = await renderer.create(<CatalogContainer/>);
    let tree = component.toJSON();

    expect(component.root.findAllByProps({id: 'no-results-container'}).length).toEqual(1);
    expect(spy).toHaveBeenCalled();
    expect(tree).toMatchSnapshot();
  });
});