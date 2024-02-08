import requestRobotsSlice from './requestSlice';

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
};

describe('Request Robot Slice', () => {
    it('should return the initial state', () => {
        expect.assertions(1);
        expect(requestRobotsSlice(initialStateRobots, {})).toEqual(initialStateRobots)
    });
});
