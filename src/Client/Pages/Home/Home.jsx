import React from 'react';
import Banner from './Banner';
import PopularClass from './PopularClass';
import PrivateRoute from '../../Shared/PrivateRoute';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
        </div>
    );
};

export default Home;