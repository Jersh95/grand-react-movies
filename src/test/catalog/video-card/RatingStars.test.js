import React from 'react';
import renderer from 'react-test-renderer';
import RatingStars from '../../../components/catalog/video-card/RatingStars';

test('RatingStars renders with 5 stars', () => {
  const component = renderer.create(<RatingStars rating={10}/>);
  let tree = component.toJSON();

  const fullStars = component.root.findAllByProps({className: 'material-icons star star--full'});
  const halfStars = component.root.findAllByProps({className: 'material-icons star star--half'});
  const emptyStars = component.root.findAllByProps({className: 'material-icons star star--empty'});

  expect(fullStars.length).toEqual(5);
  expect(halfStars.length).toEqual(0);
  expect(emptyStars.length).toEqual(0);

  expect(tree).toMatchSnapshot();
});

test('RatingStars renders with 0 stars', () => {
  const component = renderer.create(<RatingStars rating={0}/>);
  let tree = component.toJSON();

  const fullStars = component.root.findAllByProps({className: 'material-icons star star--full'});
  const halfStars = component.root.findAllByProps({className: 'material-icons star star--half'});
  const emptyStars = component.root.findAllByProps({className: 'material-icons star star--empty'});

  expect(fullStars.length).toEqual(0);
  expect(halfStars.length).toEqual(0);
  expect(emptyStars.length).toEqual(5);

  expect(tree).toMatchSnapshot();
});

test('RatingStars renders with 2.5 stars', () => {
  const component = renderer.create(<RatingStars rating={5}/>);
  let tree = component.toJSON();

  const fullStars = component.root.findAllByProps({className: 'material-icons star star--full'});
  const halfStars = component.root.findAllByProps({className: 'material-icons star star--half'});
  const emptyStars = component.root.findAllByProps({className: 'material-icons star star--empty'});

  expect(fullStars.length).toEqual(2);
  expect(halfStars.length).toEqual(1);
  expect(emptyStars.length).toEqual(2);

  expect(tree).toMatchSnapshot();
});