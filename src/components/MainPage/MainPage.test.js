import { shallow } from "enzyme";
import React from "react";
import MainPage from "./MainPage";

describe('MainPage Component', () => {
    it('renders MainPage Component', () => {
        const mockProps = {
            onRequestRobots: jest.fn(),
            onSearchChange: jest.fn(),
            robots: [],
            searchField: '',
            isPending: false,
        };
        expect(shallow(<MainPage {...mockProps}/>)).toMatchSnapshot();
    });

    it('filters robots correctly 1', () => {
        const mockProps = {
            onRequestRobots: jest.fn(),
            onSearchChange: jest.fn(),
            robots: [{
              id: 1,
              name: 'Leanne Graham',
              username: 'Bret',
              email: 'Sincere@april.biz'
            }],
            searchField: 'Leanne',
            isPending: false
          };
        const wrapper = shallow(<MainPage {...mockProps}/>);
        expect(wrapper.find('#robotList').prop('robots').length).toEqual(1);    
    });

    it('filters robots correctly 2', () => {
        const mockProps = {
            onRequestRobots: jest.fn(),
            onSearchChange: jest.fn(),
            robots: [{
              id: 1,
              name: 'Leanne Graham',
              username: 'Bret',
              email: 'Sincere@april.biz'
            }],
            searchField: 'John',
            isPending: false
          };
          const wrapper = shallow(<MainPage {...mockProps}/>);
          expect(wrapper.find('#robotList').prop('robots').length).toEqual(0);    
        })
});
