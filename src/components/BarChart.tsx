import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = [
    'HP',
    'Attack',
    'Defense',
    'Special Attack',
    'Special Defense',
    'Speed',
];

// export const data = {
//     labels,
//     datasets: [
//         {
//             backgroundColor: 'rgba(255, 99, 132, 0.5)',
//         },
//     ],
// };

type Props = {
    chartData: any;
};

export const BarChart = ({ chartData }: Props) => {
    return <Bar options={options} data={chartData} />;
};
