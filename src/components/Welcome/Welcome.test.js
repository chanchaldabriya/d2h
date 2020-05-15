import React from 'react';
import {render} from '@testing-library/react';
import Welcome from './Welcome';
import { shallow } from 'enzyme';

describe("Welcome", () => {
    test('Welcome renders welcome message', () => {
        const { getByText } = render(<Welcome />);
        const welcomeMsg = getByText(/Welcome to/i);
        expect(welcomeMsg).toBeInTheDocument();
    });

    test('Welcome renders welcome message with the desired name properly as an h1', () => {
        const propValue = "World";
        const wrapper = shallow(<Welcome name={propValue} /> );
        expect(wrapper.find('h1').text()).toBe(`Welcome to ${propValue}`); 
    });
});