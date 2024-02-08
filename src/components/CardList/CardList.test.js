import { shallow } from "enzyme";
import React from "react";
import CardList from "./CardList";

describe('CardList Component', () => {
    it('expect it to render the CardList component', () => {
        const mockRobots = [
            {
                id: 0,
                name: 'Jonny',
                email: 'jonnyBeGood@gmail.com',
            },
            {
                id: 1,
                name: 'Betty',
                email: 'bettyBoop@gmail.com',
            }
        ];
        expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
    });
});
