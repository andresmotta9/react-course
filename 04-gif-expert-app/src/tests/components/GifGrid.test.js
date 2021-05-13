import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from  "enzyme";
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Tests on GifGrid component', () => {

    const category = 'Goku';
    
    test('should <GifGrif /> match with the snapshot', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow( <GifGrid category={ category }/>);
        expect( wrapper  ).toMatchSnapshot();
    });
    
    test('should show the items when the images are loaded useFetchGifs', () => {
        const gifs = [
            {
            id: 'ABC',
            title: 'image title',
            url: 'https://localhost/image.jpg'
            },
            {
            id: 'ABCD',
            title: 'image title',
            url: 'https://localhost/image.jpg'
            },
        ]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow( <GifGrid category={ category }/>);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    })
    
})
