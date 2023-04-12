import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedJobs = ({featuredJobs}) => {
    console.log(featuredJobs)
    const {id,company_logo,job_title,company_name,remote_or_onsite,fulltime_or_parttime,location,salary} = featuredJobs;
    return (
        <div className=' border border-gray-500 rounded-lg'>
            <div className='p-5'><img className=' h-14' src={company_logo} alt="" /></div>
            <div>
                <h1 className=' text-start p-4 font-bold text-lg lg:text-2xl'>{job_title}</h1>
            </div>
            <div>
                <p className=' text-start p-4 text-lg '>{company_name}</p>
            </div>
            <div className=' text-start p-4  flex gap-2'>
                <div className=' p-2 border border-2 border-indigo-400 rounded-lg font-bold text-indigo-400'>{remote_or_onsite}</div>
                <div className=' p-2 border border-2 border-indigo-400 rounded-lg font-bold text-indigo-400'>{fulltime_or_parttime}</div>
            </div>
            <div className='lg:flex'>
                <div className='text-start p-4 flex'>
                    <div className=''><img src="https://i.ibb.co/fSRFV7n/Frame-4.png" alt="" /></div>
                    <div className=' text-gray-500'>{location}</div>
                </div>
                <div className='text-start p-4 flex'>
                <div className=''><img src="https://i.ibb.co/Pwrcbj6/Frame.png" alt="" /></div>
                    <div className=' text-gray-500'>{salary}</div>
                </div>
            </div>
            <div className='text-start p-4'>
               <Link to={`/JobDetails/${id}`}>
               <button className=' bg-indigo-400 p-3 rounded-lg text-white font-bold w-40'>View Details</button></Link>
            </div>
        </div>
    );
};

export default FeaturedJobs;
