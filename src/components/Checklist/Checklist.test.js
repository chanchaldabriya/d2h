import React from 'react';
import {render} from '@testing-library/react';
import Checklist from './Checklist';
import { shallow } from 'enzyme';

describe("Checklist", () => {
    test('Checklist renders a button when no submitLabel is passed as prop', () => {
        const { getByText } = render(<Checklist />);
        const btnElement = getByText(/submit/i);
        expect(btnElement).toBeInTheDocument();
    });
    
    test('Checklist renders a button with label as passed in prop', () => {
        const { getByText } = render(<Checklist submitLabel="Subscribe" />);
        const btnElement = getByText(/Subscribe/i);
        expect(btnElement).toBeInTheDocument();
    });

    test('Checklist renders same number of checkboxes as its items', () => {
        let items = [{id: 1, name: "One"}, {id: 2, name: "Two"}];
        const wrapper = shallow(<Checklist items={items} />);
        expect(wrapper.find('input[type="checkbox"]').length).toBe(items.length);
    })
});