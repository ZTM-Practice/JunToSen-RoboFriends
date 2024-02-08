import { shallow } from "enzyme";
import React from "react";
import Scroll from "./Scroll";

describe('Scroll Component', () => {
    it('it renders the Scroll component', () => {
        expect(shallow(<Scroll />)).toMatchSnapshot();
    });
});
