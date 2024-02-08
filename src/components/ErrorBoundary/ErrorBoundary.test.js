import { shallow } from "enzyme";
import React from "react";
import ErrorBoundary from "./ErrorBoundary";

describe('ErrorBoundary Component', () => {
    it('renders ErrorBoundary Component', () => {
        expect(shallow(<ErrorBoundary />)).toMatchSnapshot();
    });

    it('displays error message if hasError is true', () => {
        const wrapper = shallow(<ErrorBoundary />);
        const instance = wrapper.instance();
        instance.state = { hasError: true };
        wrapper.setProps({})
        expect(wrapper.exists('#errorMessage')).toEqual(true);
    });

    it('doesn\'t display error message if hasError is false', () => {
        const wrapper = shallow(<ErrorBoundary />);
        expect(wrapper.exists('#errorMessage')).toEqual(false);
    })
});