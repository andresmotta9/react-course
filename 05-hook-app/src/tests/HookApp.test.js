import { shallow } from 'enzyme';
import React from 'react';
import { HookApp } from '../HookApp';

describe('Tests on HookApp component', () => {
    test('should match <HookApp /> exactly', () => {
      const wrapper = shallow( <HookApp /> );
      expect( wrapper ).toMatchSnapshot();
    })
})
