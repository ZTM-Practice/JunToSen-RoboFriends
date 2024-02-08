import { shallow } from "enzyme";
import React from "react";
import SearchBox from "./SearchBox";

describe('SearchBox Component', () => {
    it('it renders the SearchBox component', () => {
        const mockOnChange = jest.fn();
        expect(shallow(<SearchBox searchChange={mockOnChange} />)).toMatchSnapshot();
    });
});
