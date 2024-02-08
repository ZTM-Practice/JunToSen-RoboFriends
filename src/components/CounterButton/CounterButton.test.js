import { shallow } from "enzyme";
import React from "react";
import CounterButton from "./CounterButton";

describe('CounterButton Component', () => {
    it('renders CounterButton Component', () => {
        const mockColor = 'blue';
        expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
    });

    it('correctly increments the counter', () => {
        const mockColor = 'blue';
        const wrapper = shallow(<CounterButton color={mockColor} />);

        wrapper.find('[id="counter"]').simulate('click');
        expect(wrapper.state()).toEqual({ count: 1 });
    });
});
