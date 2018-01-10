import React from 'react';
import {
  Modal,
  Divider,
  Form,
  Segment,
  Grid,
  Card,
  Icon,
  Image,
  Header,
  Button,
  Input,
  Dropdown,
  Table
} from 'semantic-ui-react';
import {Line} from 'react-chartjs-2';
import {HashRouter, Route, Link} from 'react-router-dom';

import TempGraph from './../components/tempGraph.jsx';
import TempTable from './../components/tempTable.jsx';
import tempData from './../components/tempData.js';

var duplicateTempData = tempData;

export default class TempChart extends React.Component {

  constructor() {
    super();
    this.state = {
      open: false,
      options: [
        {
          key: '10:00',
          text: '10:00',
          value: 10.00
        }, {
          key: '10:10',
          text: '10:10',
          value: 10.10
        }, {
          key: '10:20',
          text: '10:20',
          value: 10.20
        }, {
          key: '10:30',
          text: '10:30',
          value: 10.30
        }, {
          key: '10:40',
          text: '10:40',
          value: 10.40
        }, {
          key: '10:50',
          text: '10:50',
          value: 10.50
        }, {
          key: '11:00',
          text: '11:00',
          value: 11.00
        }, {
          key: '11:10',
          text: '11:10',
          value: 11.10
        }, {
          key: '11:20',
          text: '11:20',
          value: 11.20
        }, {
          key: '11:30',
          text: '11:30',
          value: 11.30
        }, {
          key: '11:40',
          text: '11:40',
          value: 11.40
        }, {
          key: '11:50',
          text: '11:50',
          value: 11.50
        }, {
          key: '12:00',
          text: '12:00',
          value: 12.00
        }, {
          key: '12:10',
          text: '12:10',
          value: 12.10
        }, {
          key: '12:20',
          text: '12:20',
          value: 12.20
        }, {
          key: '12:30',
          text: '12:30',
          value: 12.30
        }, {
          key: '12:40',
          text: '12:40',
          value: 12.40
        }, {
          key: '12:50',
          text: '12:50',
          value: 12.50
        }, {
          key: '1:00',
          text: '1:00',
          value: 13.00
        }, {
          key: '1:10',
          text: '1:10',
          value: 13.10
        }, {
          key: '1:20',
          text: '1:20',
          value: 13.20
        }, {
          key: '1:30',
          text: '1:30',
          value: 13.30
        }, {
          key: '1:40',
          text: '1:40',
          value: 13.40
        }, {
          key: '1:50',
          text: '1:50',
          value: 13.50
        }, {
          key: '2:00',
          text: '2:00',
          value: 14.00
        }, {
          key: '2:10',
          text: '2:10',
          value: 14.10
        }, {
          key: '2:30',
          text: '2:30',
          value: 14.30
        }, {
          key: '2:40',
          text: '2:40',
          value: 14.40
        }, {
          key: '2:50',
          text: '2:50',
          value: 14.50
        }, {
          key: '3:00',
          text: '3:00',
          value: 15.00
        }, {
          key: '3:10',
          text: '3:10',
          value: 15.10
        }, {
          key: '3:20',
          text: '3:20',
          value: 15.20
        }, {
          key: '3:30',
          text: '3:30',
          value: 15.30
        }, {
          key: '3:40',
          text: '3:40',
          value: 15.40
        }, {
          key: '3:50',
          text: '3:50',
          value: 15.50
        }
      ],
      startTime: 0,
      endTime: 0,
      table: '',
      label:'',
      data:''
    }
    this.handleStartTime = this.handleStartTime.bind(this);
    this.handleEndTime = this.handleEndTime.bind(this);

  }

  componentDidMount() {
    var dummy=[],label=[],data=[];
    dummy.push(tempData.map((item,i)=>{
      label.push(item.Time);
      data.push(item.Temperature);
      return(<Table.Row key={i}>
        <Table.Cell>{item.Time}</Table.Cell>
        <Table.Cell>{item.Location}</Table.Cell>
        <Table.Cell>{item.Temperature}</Table.Cell>
      </Table.Row>)
    }))
    this.setState({table:dummy,label:label,data:data})
  }

  handleStartTime(e, {value}) {
    this.setState({startTime: value});

  }

  handleEndTime(e, {value}) {
    this.setState({endTime: value});
  }

  handleSearch() {
    var dummy=[],label=[],data=[];
    // var start = this.state.startTime,
    //   end = this.state.endTime;
    // console.log('-->', this.state.startTime, '---->', this.state.endTime);
    // var temp = (<TempTable startTime={start} endTime={end}/>);
    // this.setState({table: temp});
    dummy.push(tempData.map((item,i)=>{

        if(item.time>this.state.startTime && item.time<this.state.endTime)
        {
          label.push(item.Time);
          data.push(item.Temperature);
          return(
            <Table.Row key={i}>
            <Table.Cell>{item.Time}</Table.Cell>
            <Table.Cell>{item.Location}</Table.Cell>
            <Table.Cell>{item.Temperature}</Table.Cell>
          </Table.Row>);
        }
    }))

  this.setState({table:dummy,label:label,data:data})
  }

  render() {
    const {value} = this.state

    const data = {
      labels: this.state.label,
      datasets: [
        {
          label: 'Temperature (Optimum Temperature is 50 °F)',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#a8eaed',
          borderColor: '#a8eaed',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#0f0f0f',
          pointBackgroundColor: '#a8eaed',
          pointBorderWidth: 3,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#a8eaed',
          pointHoverBorderColor: '#0f0f0f',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.state.data
        }
      ]}

    return (<div>
      <Grid>
        <Grid.Row style={{
            marginTop: '10px'
          }}>
          <Grid.Column width={2}/>
          <Grid.Column width={12}>
            <Segment style={{
                backgroundColor: '#a8eaed'
              }}>
              <Header style={{
                  textAlign: 'center'
                }}>
                <span className="headers" style={{color:'black'}}>Temperature</span>
              </Header>
            </Segment>
          </Grid.Column>
          <Grid.Column width={2}/>
        </Grid.Row>

        <Grid.Row style={{
            marginTop: '10px'
          }}>
          <Grid.Column width={2}/>
          <Grid.Column width={3}>
            <Form>
              <Form.Field>
                <label >Start time</label>
                <Dropdown placeholder='Start time' selection options={this.state.options} onChange={this.handleStartTime}/>
              </Form.Field>
            </Form>
          </Grid.Column>
          <Grid.Column width={3}>
            <Form>
              <Form.Field>
                <label >End time</label>
                <Dropdown placeholder='Start time' selection options={this.state.options} onChange={this.handleEndTime}/>
              </Form.Field>
            </Form>
          </Grid.Column>
          <Grid.Column width={2}>
            <center>
              <Button style={{
                  marginTop: '23px',
                  backgroundColor:'#a8eaed'
                }} onClick={this.handleSearch.bind(this)}>Search</Button>
            </center>
          </Grid.Column>
          <Grid.Column width={2}>
            <Button fluid  onClick={()=>{this.setState({open:true})}} style={{
                marginTop: '23px',
                backgroundColor:'#a8eaed'
              }}>
              <Icon name='window maximize'/>
              Table
            </Button>
          </Grid.Column>
          <Grid.Column width={2}>
            <Button as={Link} to='/customer/1' style={{
                marginTop: '23px',
                backgroundColor:'#a8eaed'
              }}>
                <Icon name='reply'/>
                Home
            </Button>
          </Grid.Column>
          <Grid.Column width={2}/>
        </Grid.Row>

        <Grid.Row style={{
            marginTop: '10px'
          }}>
          <Grid.Column width={2}/>
          <Grid.Column width={12}>
            <Line data={data} />
          </Grid.Column>
          <Grid.Column width={2}/>
        </Grid.Row>

        <Modal open={this.state.open} >
          <Header icon='line chart' content='Temperature'/>
          <Modal.Content>
          <Table inverted style={{backgroundColor:'#a8eaed',color:'black'}}>
            <Table.Header>
              <Table.Row >
                <Table.HeaderCell>Time</Table.HeaderCell>
                <Table.HeaderCell>Location</Table.HeaderCell>
                <Table.HeaderCell>Temperature</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.state.table}
            </Table.Body>
          </Table>
          </Modal.Content>
          <Modal.Actions>
            <Button color='red' onClick={()=>{this.setState({open:false})}}>
              <Icon name='remove'/>
              close
            </Button>
          </Modal.Actions>
        </Modal>

      </Grid>
    </div>);
  }
}
