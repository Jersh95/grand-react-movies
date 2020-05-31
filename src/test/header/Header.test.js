import React from 'react';
import renderer from 'react-test-renderer';
import Header from "../../components/header/Header";

test('Header renders', () => {
  const component = renderer.create(<Header/>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});