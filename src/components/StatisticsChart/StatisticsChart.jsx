import React from 'react'
import classes from './StatisticsChart.module.css';
import { Doughnut } from 'react-chartjs-2';
export default function StatisticsChart() {

    const data = {
        labels: ['Sales','Purchase','Stock'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3],
            backgroundColor: [
              'rgb(39,67,247)',
              'rgb(164,116,226)',
              'rgb(61,219,200)',
             
            ],
            borderColor: [
              'rgb(39,67,247)',
              'rgb(164,116,226)',
              'rgb(61,219,200)',
            
            ],
            borderWidth: 1,
          },
        ],
      };
      

    return (
        <div className={classes.MainContainer}>
            Statistics
              <Doughnut data={data} />
        </div>
    )
}
