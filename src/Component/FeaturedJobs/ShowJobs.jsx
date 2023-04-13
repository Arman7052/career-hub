import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FeaturedJobs from './FeaturedJobs';

const ShowJobs = () => {
  const [typeOfJobs, setTypeOfJobs] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch('/featured-jobs.json')
      .then(response => response.json())
      .then(data => setTypeOfJobs(data))
      .catch(error => console.error(error));
  }, []);

  const handleClick = () => {
    setShowAll(true);
  };

  return (
    <div className='text-center py-20 mx-20'>
      <h1 className='font-bold text-5xl py-10'>Featured Jobs</h1>
      <p className='text-gray-500 pb-10'>Explore thousands of job opportunities with all the information you need. Its your future</p>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        {typeOfJobs.slice(0, showAll ? typeOfJobs.length : 4).map(typeOfJob => (
          <FeaturedJobs
            key={typeOfJob.id}
            typeOfJob={typeOfJob}
          />
        ))}
      </div>
      {!showAll && (
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8' onClick={handleClick}>
          Show All
        </button>
      )}
    </div>
  );
};

export default ShowJobs;

