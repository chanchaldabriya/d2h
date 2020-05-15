import React from 'react';
import Recharge from './Recharge';
import { shallow } from 'enzyme';

describe("Recharge", () => {
    test('Recharge renders a button which is disabled initially & enables on change event in amount field', () => {
        const wrapper = shallow(<Recharge /> );
        expect(wrapper.find('.Recharge-button').prop('disabled')).toBeTruthy();

        wrapper.find('.Recharge-input').simulate('change', {
            target: {
              value: '100'
            },
        });

        expect(wrapper.find('button').prop('disabled')).toBeFalsy();
    });
});