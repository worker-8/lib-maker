import React from 'react';
import { shallow } from 'enzyme';
import Eaea from '../index';

describe('<Example />', () => {
  test('sending message will show it as text', () => {
    const wrapper = shallow(<Eaea message="hello world" />);
    expect(wrapper.find('div').text()).toBe('hello world');
  });
});
