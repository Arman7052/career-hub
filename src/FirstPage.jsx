import React from 'react';
import Banner from './Component/Banner/Banner';
import JobCategory from './Component/JobCategory/JobCategory';
import ShowJobs from './Component/FeaturedJobs/ShowJobs';

const FirstPage = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <ShowJobs></ShowJobs>
        </div>
    );
};

export default FirstPage;