import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    };
};

const App = ({ searchField, robots, isPending, onSearchChange, onRequestRobots }) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
