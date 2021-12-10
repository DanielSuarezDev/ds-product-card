import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle } from '../src/components/ProductTitle';

describe('it', () => {
  it('renders without crashing', () => {
    const wrapper = renderer.create(<ProductTitle title="product" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('renders with title', () => {});
});
