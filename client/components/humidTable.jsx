import React from 'react';
import humidData from './humidData.js';

import { Table } from 'semantic-ui-react'

export default class HumidTable extends React.Component {

  constructor() {
    super();
    this.state={table:[]}
  }

  componentDidMount() {
    var temp=[]
    temp.push(humidData.map((item, i) => {
      return(
        <Table.Row key={i}>
          <Table.Cell>{item.Time}</Table.Cell>
          <Table.Cell>{item.Location}</Table.Cell>
          <Table.Cell>{item.Humidity}</Table.Cell>
        </Table.Row>
      )
    }));

    this.setState({table:temp})

  }

  render() {
    return (<div>
      <Table color='blue' inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Time</Table.HeaderCell>
            <Table.HeaderCell>Location</Table.HeaderCell>
            <Table.HeaderCell>Humidity</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.state.table}
        </Table.Body>
      </Table>
    </div>)
  }
}
