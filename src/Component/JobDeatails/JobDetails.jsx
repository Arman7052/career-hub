import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const aboutJob = useLoaderData();
    console.log(aboutJob);
    return (
        <div>
            <h1>hello details </h1>
        </div>
    );
};

export default JobDetails;