import React, { useEffect } from 'react';
import CardList from '../CardList/CardList';
import SearchBox from '../SearchBox/SearchBox';
import Scroll from '../Scroll/Scroll';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import './MainPage.css';

const MainPage = (props) => {
    const { searchField, isPending, robots, onRequestRobots, onSearchChange } = props;

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
                        <CardList id="robotList" robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
}

export default MainPage;
