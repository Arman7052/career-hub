import React from 'react';
import Banner from './Component/Banner/Banner';
import JobCategory from './Component/JobCategory/JobCategory';
import ShowJobs from './Component/FeaturedJobs/ShowJobs';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <ShowJobs></ShowJobs>
        </div>
    );
};

export default Home;