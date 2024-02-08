import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearchField } from '../redux/searchSlice';
import { requestRobots } from '../redux/requestSlice';
import MainPage from '../components/MainPage/MainPage';

const App = () => {
    const { searchField } = useSelector((state) => state.searchRobots);
    const { robots, isPending } = useSelector((state) => state.requestRobots)
    const dispatch = useDispatch();
    const onSearchChange = (e) => dispatch(changeSearchField(e.target.value));
    const onRequestRobots = () => dispatch(requestRobots());

    return (<MainPage 
                onRequestRobots={onRequestRobots}
                onSearchChange={onSearchChange}
                robots={robots}
                isPending={isPending}
                searchField={searchField}
            />);
}

export default App;
