import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Tests on GifGridItem component', () => {

    const title = 'A title';
    const url = 'https://localhost/image.jpg';

    let wrapper = shallow(<GifGridItem title={title} url={url} />);

    beforeEach( () => {
        wrapper = shallow(<GifGridItem title={title} url={url} />);
    });

    test('should show <GifGridItem /> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should have a paragraph with the title', () => {
        const parg = wrapper.find('p').text().trim();
        expect( parg ).toBe(title);
    });
    
    test('should the image url and the alt be the same as the component paramters', () => {
        const {src, alt} = wrapper.find('img').props();
        expect( src ).toBe(url);
        expect( alt ).toBe(title);
    });
    
    test('should have the class animate__fadeIn', () => {
        const containerClass = wrapper.find('div').hasClass('animate__fadeIn');
        expect( containerClass ).toBe( true );
    });
    
})  
