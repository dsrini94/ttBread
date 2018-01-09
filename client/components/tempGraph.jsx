import React from 'react';
import {Line} from 'react-chartjs-2';
import tempData from './tempData.js';


export default class TempGraph extends React.Component{

  constructor()
  {
    super();
    this.state={label:[],data:[]}
  }
  componentDidMount()
  {

    var templabel=[],temp=[];

    tempData.map((item,i)=>{
        templabel.push(item.Time);
        temp.push(item.Temparature);
    });

    this.setState({label:templabel,data:temp})
  }
  render()
  {
    const data = {
      labels: this.state.label,
      datasets: [
        {
          label: 'Temparature',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#c13109',
          borderColor: '#c13109',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#0f0f0f',
          pointBackgroundColor: '#c13109',
          pointBorderWidth: 3,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#c13109',
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
      <Line data={data} />
      </div>
    );
  }
}
