import React,{PureComponent} from 'react'
import classes from './PerformanceChart.module.css';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux'

export default function PerformanceChart() {

   const mainGraphData = useSelector((state) => state.orderListData)
   const yearSortTwenty = mainGraphData.filter((item) => item.date.slice(6) === "2020") 
   const yearSortTwentyOne = mainGraphData.filter((item) => item.date.slice(6) === "2021") ;

   console.log(yearSortTwenty, yearSortTwentyOne);
   const twentyApril = yearSortTwenty.filter((item) => item.date.slice(3,5) === "09")
   console.log(twentyApril)
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June','July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: '2020',
        data: [1500, 2500, 800, 25800, 6000, 800],
        backgroundColor: 'rgb(39,67,247)',
       
      },
      {
        label: '2021',
        data: [200, 3500, 5000, 500, 80, 400],
        backgroundColor: 'rgb(61,219,200)',

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
          <Bar data={data} options={options} />
         
            
        </div>
    )
}
