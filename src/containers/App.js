import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
// import { setSearchField, requestRobots } from '../redux/actions';
import { changeSearchField } from '../redux/searchSlice';
import { requestRobots } from '../redux/requestSlice';

const App = () => {
    const { searchField } = useSelector((state) => state.searchRobots);
    const { robots, isPending } = useSelector((state) => state.requestRobots)
    const dispatch = useDispatch();
    const onSearchChange = (e) => dispatch(changeSearchField(e.target.value));
    const onRequestRobots = () => dispatch(requestRobots());

    useEffect(() => {
        onRequestRobots();
    }, []);

    const filteredRobots = robots.filter((robot) => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return isPending ?
        <h1>LOADING</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
}

export default App;
