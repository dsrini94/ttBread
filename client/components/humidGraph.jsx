import React from 'react';
import {Line} from 'react-chartjs-2';
import humidData from './humidData.js';


export default class HumidGraph extends React.Component{

  constructor()
  {
    super();
    this.state={label:[],data:[]}
  }
  componentDidMount()
  {

    if('11:11'<'10:20')
    {
      console.log('yes');
    }
    else {
      console.log('No');
    }
    var templabel=[],temp=[];

    humidData.map((item,i)=>{
        templabel.push(item.Time);
        temp.push(item.Humidity);
    });

    this.setState({label:templabel,data:temp})
  }
  render()
  {
    const data = {
      labels: this.state.label,
      datasets: [
        {
          label: 'Humidity',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#155fc6',
          borderColor: '#155fc6',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#0f0f0f',
          pointBackgroundColor: '#c13109',
          pointBorderWidth: 3,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#155fc6',
          pointHoverBorderColor: '#0f0f0f',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.state.data
        }
      ]
    };
    return(
      <div>
      <h2>Humidity Graph</h2>
      <Line data={data} />
      </div>
    );
  }
}
