import React from 'react';
import {Button, Comment, Form, Header, Segment,Grid,Icon,Search,Divider,Input,Label } from 'semantic-ui-react';


export default class ProductInfo extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={    }
  }
  render()
  {
    return(
      <div>
        <Grid divided='vertically'>
          {/* <Grid.Row>
            <Grid.Column>
            </Grid.Column>
          </Grid.Row> */}
          <Label as='a' color='teal' pointing='below' size='huge' style={{marginLeft:'30%',marginTop:'4%',marginBelow:'-2%'}}>CREATE PRODUCT INFORMATION</Label>

          <Segment className = "lowerGrid">
              <Segment.Group raised className = "segment" style={{marginLeft:'2%',marginRight:'2%',marginTop:'-1%'}}>
               <Segment>


               </Segment>
              </Segment.Group>
          </Segment>
        </Grid>
    </div>
    );
  }
}
