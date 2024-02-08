import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';

describe('Card Component', () => {
    it('expect to render the Card component', () => {
        const mockName = 'R2-D2';
        const mockEmail = 'beepboop@gmail.com';
        const mockId = 5;
        expect(shallow(<Card name={mockName} email={mockEmail} id={mockId} />)).toMatchSnapshot();
    });
});
