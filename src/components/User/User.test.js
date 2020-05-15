import React from 'react';
import User from './User';
import { shallow } from 'enzyme';

describe("User", () => {
    test('User renders data according to props passed', () => {
        const propValue = {
            username: "Mike",
            email: "Hesson"
        };
        const wrapper = shallow(<User user={propValue} />);
        expect(wrapper.find('.User-name').text()).toBe(propValue.username);
        expect(wrapper.find('.User-email').text()).toBe(propValue.email);
    });
});