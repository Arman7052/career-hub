import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FeaturedJobs from './FeaturedJobs';

const ShowJobs = () => {
    const typeOfJob = useLoaderData();
    // console.log(typeOfJob) 
    return (
        <div>
            <div className='text-center py-20 mx-20'>
            <h1 className=' font-bold text-5xl py-10'>Featured Jobs</h1>
            <p className=' text-gray-500 pb-10'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            {
                        typeOfJob.map( featuredJobs => <FeaturedJobs
                        key={featuredJobs.id}
                        featuredJobs={featuredJobs}
                        ></FeaturedJobs>)
                }
            </div>
        </div>
        </div>
    );
};

export default ShowJobs;