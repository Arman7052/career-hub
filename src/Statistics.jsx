import React from 'react';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip } from 'recharts';

const Statistics = () => {
    const data = [
        {
            Assignment: 1,
            mark: 57,
        },
        {
            Assignment: 2,
            mark: 59,
        },
        {
            Assignment: 3,
            mark: 50,
        },
        {
            Assignment: 4,
            mark: 52,
        },
        {
            Assignment: 5,
            mark: 29,
        },
        {
            Assignment: 6,
            mark: 50,
        },
        {
            Assignment: 7,
            mark: 60,
        },
        {
            Assignment: 8,
            mark: 60,
        }
    ];

    const colors = ['#ff7f50', '#00ffff', '#ffd700', '#ff6347', '#9acd32', '#7b68ee', '#b22222', '#32cd32'];

    const customAxisTick = ({ payload, x, y, textAnchor, stroke }) => (
        <g transform={`translate(${x},${y})`}>
            <text
                x={0}
                y={0}
                dy={16}
                textAnchor={textAnchor}
                fill="#666"
                fontSize={10}
            >
                {payload.value}
            </text>
        </g>
    );

    const averageMark = data.reduce((total, item) => total + item.mark, 0) / data.length;

    return (
        <div className='py-10 text-center bg-indigo-50'>
            <div>
                <h1 className=' py-5 text-4xl'>This page shows marks gained in Assignments</h1>
            </div>


            <ResponsiveContainer width="100%" aspect={2}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis
                        dataKey="Assignment"
                        tick={customAxisTick}
                        axisLine={{ stroke: "#666", strokeWidth: 1.5 }}
                        tickLine={false}
                    />
                    <PolarRadiusAxis
                        stroke="#666"
                        strokeWidth={1.5}
                        domain={[0, 60]}
                        angle={30}
                        tickCount={4}
                        tickFormatter={(tick) => tick}
                        tick={{ fill: "#666", fontSize: 10 }}
                        axisLine={{ stroke: "#666", strokeWidth: 1.5 }}
                    />
                    <Radar
                        name="Assignment"
                        dataKey="mark"
                        stroke="#ca3e47"
                        fill="#ca3e47"
                        fillOpacity={0.2}
                    />

                    <Tooltip label="mark" ></Tooltip>
                </RadarChart>
            </ResponsiveContainer>
            <div>
                <p className=' text-3xl '>Average Mark: {averageMark.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Statistics;



// import React from 'react';
// import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip } from 'recharts';

// const Statistics = () => {
//     const data = [
//         {
//             Assignment: 1,
//             mark: 57,
//         },
//         {
//             Assignment: 2,
//             mark: 59,
//         },
//         {
//             Assignment: 3,
//             mark: 50,
//         },
//         {
//             Assignment: 4,
//             mark: 52,
//         },
//         {
//             Assignment: 5,
//             mark: 29,
//         },
//         {
//             Assignment: 6,
//             mark: 50,
//         },
//         {
//             Assignment: 7,
//             mark: 60,
//         },
//         {
//             Assignment: 8,
//             mark: 60,
//         }
//     ];

//     const colors = ['#ff7f50', '#00ffff', '#ffd700', '#ff6347', '#9acd32', '#7b68ee', '#b22222', '#32cd32'];

//     const customAxisTick = ({ payload, x, y, textAnchor, stroke }) => (
//         <g transform={`translate(${x},${y})`}>
//             <text
//                 x={0}
//                 y={0}
//                 dy={16}
//                 textAnchor={textAnchor}
//                 fill="#666"
//                 fontSize={10}
//             >
//                 {payload.value}
//             </text>
//         </g>
//     );

//     return (
//         <div className='py-10 text-center bg-indigo-50'>
//             <div>
//                 <h1 className=' py-5 text-4xl'>This page shows marks gained in Assignments</h1>
//             </div>


//             <ResponsiveContainer width="100%" aspect={2}>
//                 <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
//                     <PolarGrid radialLines={false} />
//                     <PolarAngleAxis
//                         dataKey="Assignment"
//                         tick={customAxisTick}
//                         axisLine={{ stroke: "#666", strokeWidth: 1.5 }}
//                         tickLine={false}
//                     />
//                     <PolarRadiusAxis
//                         stroke="#666"
//                         strokeWidth={1.5}
//                         domain={[0, 60]}
//                         angle={30}
//                         tickCount={4}
//                         tickFormatter={(tick) => tick}
//                         tick={{ fill: "#666", fontSize: 10 }}
//                         axisLine={{ stroke: "#666", strokeWidth: 1.5 }}
//                     />
//                     <Radar
//                         name="Assignment"
//                         dataKey="mark"
//                         stroke="#ca3e47"
//                         fill="#ca3e47"
//                         fillOpacity={0.2}
//                     />

//                     <Tooltip label="mark" ></Tooltip>
//                 </RadarChart>
//             </ResponsiveContainer>
//         </div>
//     );




// };

// export default Statistics;


