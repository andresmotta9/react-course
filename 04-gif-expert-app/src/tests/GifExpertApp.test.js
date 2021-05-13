import React from 'react';

import { shallow } from "enzyme";
import { GifExpertApp } from '../GifExpertApp';

describe('Test on  GifExpertApp component', () => {

    test('should <GifExpertApp /> match exactly', () => {
        const wrapper = shallow( <GifExpertApp /> )
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('should retunr a category list', () => {
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow( <GifExpertApp defaultCategories={categories} /> );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length).toBe(categories.length);
    })
    
})
