import React from 'react';
import { Header, Segment,Grid } from 'semantic-ui-react';

export default class DcBound extends React.Component
{
  render()
  {
    return(
      <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
          <center>
          <Segment circular style={{width:275,height:275,backgroundColor:'brown'}} onClick={()=>this.props.idc()}>
          <Header as='h2'>
            <Header.Subheader>
              <span className="headers" style={{fontSize:'25px'}}>Inbound Process</span>
            </Header.Subheader>
          </Header>
        </Segment>
        </center>
          </Grid.Column>
          <Grid.Column width={8}>
          <center>
          <Segment circular inverted style={{width:275,height:275}} onClick={()=>this.props.odc()}>
            <Header as='h2' inverted>
              <Header.Subheader>
                <span className="headers" style={{fontSize:'25px'}}>Outbound Process</span>
              </Header.Subheader>
            </Header>
          </Segment>
          </center>
          </Grid.Column>
        </Grid.Row>
      </Grid>


      </div>
    );
  }
}
