import React from 'react';
import tempData from './tempData.js';

import { Table } from 'semantic-ui-react'

export default class TempTable extends React.Component {

  constructor(props) {
    super(props);
    this.state={table:[]}
  }

  componentDidMount() {
    var temp=[]
    if(this.props.startTime==0 || this.props.endTime==0)
    {
    temp.push(tempData.map((item, i) => {
      return(
        <Table.Row key={i}>
          <Table.Cell>{item.Time}</Table.Cell>
          <Table.Cell>{item.Location}</Table.Cell>
          <Table.Cell>{item.Temperature}</Table.Cell>
        </Table.Row>
      )
    }));
    console.log(temp);
    this.setState({table:temp})
  }
  else {
    temp.push(tempData.map((item, i) => {
      if(item.time>this.props.startTime && item.time<this.props.endTime)
      {
      return(
        <Table.Row key={i}>
          <Table.Cell>{item.Time}</Table.Cell>
          <Table.Cell>{item.Location}</Table.Cell>
          <Table.Cell>{item.Temperature}</Table.Cell>
        </Table.Row>
      )
    }
    }));
    console.log(temp);
    this.setState({table:temp})
  }

  }


  componentWillReceiveProps()
  {
    var temp=[]
    if(this.props.startTime==0 || this.props.endTime==0)
    {
      console.log('its here',this.props.startTime,this.props.endTime);
    temp.push(tempData.map((item, i) => {
      return(
        <Table.Row key={i}>
          <Table.Cell>{item.Time}</Table.Cell>
          <Table.Cell>{item.Location}</Table.Cell>
          <Table.Cell>{item.Temperature}</Table.Cell>
        </Table.Row>
      )
    }));
    this.setState({table:temp})
  }
  else {
    temp.push(tempData.map((item, i) => {
      console.log('comparing',item.time,'and',this.props.startTime);
      if(item.time>this.props.startTime && item.time<this.props.endTime)
      {
        console.log('in',item.time);
      return(
        <Table.Row key={i}>
          <Table.Cell>{item.Time}</Table.Cell>
          <Table.Cell>{item.Location}</Table.Cell>
          <Table.Cell>{item.Temperature}</Table.Cell>
        </Table.Row>
      )
    }
    }));
    this.setState({table:temp})
  }
  }

  render() {
    console.log('inside render',this.props);
    return (<div>
      <Table color='red' inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Time</Table.HeaderCell>
            <Table.HeaderCell>Location</Table.HeaderCell>
            <Table.HeaderCell>Temperature</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.state.table}
        </Table.Body>
      </Table>
    </div>)
  }
}
