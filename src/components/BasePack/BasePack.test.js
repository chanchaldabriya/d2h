import React from 'react';
import BasePack from './BasePack';
import { shallow } from 'enzyme';

describe("BasePack", () => {
    test('BasePack renders a button which is disabled initially & enables on change event in months field', () => {
        const pack = {
            name: "bronze",
            price: 30
        };
        const wrapper = shallow(<BasePack pack={pack} /> );
        expect(wrapper.find('button').prop('disabled')).toBeTruthy();

        wrapper.find('.BasePack-Months').simulate('change', {
            target: {
              value: '2',
            },
        });

        expect(wrapper.find('button').prop('disabled')).toBeFalsy();
    });

    test('BasePack button has selected class if already subscribed', () => {
        const propValue = "World";
        const pack = {
            id: "bronze"
        };
        const wrapper = shallow(<BasePack pack={pack} alreadySubscribed /> );
        expect(wrapper.find('button').hasClass('already-subscribed')).toBeTruthy();
    });
});