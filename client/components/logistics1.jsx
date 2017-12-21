import React from 'react';
import {
  Icon,
  Header,
  Form,
  Grid,
  Dropdown,
  Segment,
  Input
} from 'semantic-ui-react';

export default class Logistics1 extends React.Component {
  render() {
    return (<div>
      <Header as='h2' >Logistics</Header>
      <Input icon="icon" placeholder='Search...' defaultValue='PROD524932' style={{float:'right',marginTop:'-40px',marginLeft:'-150px'}}>
        <input/>
        <Icon name='search'/>
      </Input>
      <Grid>
        <Grid.Row>
          <Grid.Column></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>);
  }
}
