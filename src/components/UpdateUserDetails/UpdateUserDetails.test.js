import React from 'react';
import UpdateUserDetails from './UpdateUserDetails';
import { shallow } from 'enzyme';

describe("UpdateUserDetails", () => {
    test('Should set contact number after on change event', () => {
        const wrapper = shallow(<UpdateUserDetails />);
        wrapper.find('input[type="number"]').simulate('change', {
          target: {
            value: '9876543210'
          },
        });
        expect(wrapper.find('input[type="number"]').prop('value')).toEqual(
          '9876543210',
        );
      });
});