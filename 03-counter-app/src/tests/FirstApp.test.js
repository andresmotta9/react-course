import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import FirstApp from "../FirstApp";
// import { render } from '@testing-library/react';

describe("Tests in <FirstApp />>", () => {
  // test('should show the message -Hi, I am Andres-', () => {
  //     const greet = 'Hi, I am Andres';

  //     const { getByText } = render( <FirstApp greet={ greet }/> );

  //     expect( getByText(greet) ).toBeInTheDocument();
  // });

  test("should show <FirstApp /> correctly", () => {
    const greet = "Hi, I am Andres";
    const wrapper = shallow(<FirstApp greet={greet} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should show the subtitle sent by props", () => {
    const greet = "Hi, I am Andres";
    const subtitle = "this is a subtitle";

    const wrapper = shallow(
        <FirstApp
            greet={ greet } 
            subtitle={ subtitle }
        />
    );

    const textParagraph = wrapper.find('p').text();
    expect ( textParagraph ).toBe( subtitle);
  });
});
