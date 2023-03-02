// import React from 'react';
// import { useState, useEffect } from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';
// import faker from 'faker';
// import ParsingData from '../Parsing/ParsingData';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


// export const options = {
//   indexAxis: 'y',
//   elements: {
//     bar: {
//       borderWidth: 2,
//     },
//   },
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'right',
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Horizontal Bar Chart',
//     },
//   },
// };

// export default function Graph() {
//   const [data_month, setDataMonth] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const result = await ParsingData();
//       setDataMonth(result);
//     }

//     fetchData();
//   }, []);

//   const data = {
//     labels,
//     datasets: [
//       {
//         label: 'Dataset 1',
//         data: labels.map(() => 1000),
//         borderColor: 'rgb(255, 99, 132)',
//         backgroundColor: 'rgba(255, 99, 132, 0.5)',
//       },
//       {
//         label: 'Dataset 2',
//         data: labels.map(() => {4,3}),
//         borderColor: 'rgb(53, 162, 235)',
//         backgroundColor: 'rgba(53, 162, 235, 0.5)',
//       },
//     ],
//   };

//   return <Bar options={options} data={data} />;
// }