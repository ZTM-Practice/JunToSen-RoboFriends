import searchRobotsSlice, { changeSearchField } from './searchSlice';

const initialStateSearch = {
    searchField: ''
};

describe('Search Robot Slice', () => {
    it('should return the initial state', () => {
        expect.assertions(1);
        expect(searchRobotsSlice(initialStateSearch, {})).toEqual(initialStateSearch)
    });

    it('should handle changes to the searchfield', () => {
        const testData = 'ryan';
        expect(searchRobotsSlice(initialStateSearch, changeSearchField(testData))).toEqual({
            searchField: 'ryan'
        })
    });

    it('should create the correct action object', () => {
        const testData = 'ryan';
        const expectedAction = {
            type: 'searchField/changeSearchField',
            payload: testData
        };
        expect(changeSearchField(testData)).toEqual(expectedAction);
    });
})
