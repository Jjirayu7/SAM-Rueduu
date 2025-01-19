import BackOffice from "../../components/BackOffice";
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, plugins, scales } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Dashboard() {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apirl', 'May'],
        datasets: [
            {
                label: 'Monthly Sales',
                data: [10, 20, 30, 40, 50],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                Text: 'Monthly Sales Data'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return<BackOffice>
        <Bar data={data} options={options}></Bar>
    </BackOffice>
}

export default Dashboard;