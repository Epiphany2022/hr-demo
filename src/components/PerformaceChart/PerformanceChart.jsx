import React from 'react'
import classes from './PerformanceChart.module.css';
import { Bar }  from 'react-chartjs-2'


export default function PerformanceChart() {

    const data = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
          {
            label: '# of Red Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgb(164,117,226)',
          },
          {
            label: '# of Blue Votes',
            data: [2, 3, 20, 5, 1, 4],
            backgroundColor: 'rgb(39,67,247)',
          },
          {
            label: '# of Green Votes',
            data: [3, 10, 13, 15, 22, 30],
            backgroundColor: 'rgb(62,219,201)',
          },
        ],
      };
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };

    return (
        <div className={classes.MainContainer}>
          Report
            <Bar style={{height:'180px'}}  data={data} options={options} />
         
            
        </div>
    )
}
