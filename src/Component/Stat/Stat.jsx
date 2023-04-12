import React from 'react';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts';

const Stat = () => {
    const data = [
        {
            Assignment: 1,
            A: 57,
        },
        {
            Assignment: 2,
            A: 59,
        },
        {
            Assignment: 3,
            A: 50,
        },
        {
            Assignment: 4,
            A: 52,
        },
        {
            Assignment: 5,
            A: 29,
        },
        {
            Assignment: 6,
            A: 50,
        },
        {
            Assignment: 7,
            A: 60,
        },
        {
            Assignment: 8,
            A: 60,
        }
    ];
        return (
            <div>
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="Assignment" />
                        <PolarRadiusAxis />
                        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        );
    };


export default Stat;