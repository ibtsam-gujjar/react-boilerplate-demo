import React from 'react';
import { mount } from 'enzyme';

import Box from '../Box';

const renderComponent = (props = {}) => mount(<Box {...props} />);

describe('<Box />', () => {
  it('should render a Box', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('button')).toHaveLength(1);
  });
});
