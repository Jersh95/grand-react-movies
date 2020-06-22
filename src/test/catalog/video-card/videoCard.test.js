import React from 'react';
import renderer from 'react-test-renderer';
import VideoCard from '../../../components/catalog/video-card/VideoCard';
import {videoResult} from '../../json/video.json.js';

test('VideoCard renders', () => {
  const component = renderer.create(<VideoCard video={videoResult[0]}/>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});