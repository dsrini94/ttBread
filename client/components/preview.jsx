import React from 'react'
import { Header,Grid,Divider } from 'semantic-ui-react';

export default class Preview extends React.Component
{
  render()
  {
    return(
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
            <Header as='h3'>Bread Information</Header>
            <Divider/>
            <Grid>
              <Grid.Row>
                <Grid.Column width={8}>
                  <label style={{float:'right',fontSize:'15px'}}>Product Id</label>
                  <br/>
                  <br/>
                  <label style={{float:'right',fontSize:'15px'}}>Manufactured/Assembled in</label>
                  <br/>
                  <br/>
                  <br/>
                  <label style={{float:'right',fontSize:'15px'}}>Manufacturing Location Address</label>
                </Grid.Column>
                <Grid.Column width={8}>
                <label style={{float:'left',fontWeight:'bold',fontSize:'15px'}}>XXXXXYYYYSYYSYY</label>
                <br/>
                <br/>
                <label style={{float:'left',fontWeight:'bold',fontSize:'15px'}}>Karnataka,India</label>
                <br/>
                <br/>
                <br/>
                <label style={{float:'right',fontSize:'15px',fontWeight:'bold'}}>#1234,One Bakery,Electronic City Phase 1</label>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={8}>
                  <label style={{float:'right',fontSize:'15px'}}>Bake date</label>
                  <br/>
                  <br/>
                  <label style={{float:'right',fontSize:'15px'}}>Packing date</label>
                  <br/>
                  <br/>
                  <label style={{float:'right',fontSize:'15px'}}>Best before date</label>
                  <br/>
                  <br/>
                  <label style={{float:'right',fontSize:'15px'}}>Net Quantity</label>
                  <br/>
                  <br/>
                  <label style={{float:'right',fontSize:'15px'}}>Ingredients</label>
                </Grid.Column>
                <Grid.Column width={8}>
                <label style={{float:'left',fontWeight:'bold',fontSize:'15px'}}>10 December 2017</label>
                <br/>
                <br/>
                <label style={{float:'left',fontWeight:'bold',fontSize:'15px'}}>10 December 2017</label>
                <br/>
                <br/>
                <label style={{float:'left',fontWeight:'bold',fontSize:'15px'}}>20 December 2017</label>
                <br/>
                <br/>
                <label style={{float:'left',fontWeight:'bold',fontSize:'15px'}}>1kg</label>
                <br/>
                <br/>
                <label style={{float:'left',fontWeight:'bold',fontSize:'15px'}}>Abcd</label>
                <br/>
                <br/>
                <label style={{float:'left',fontWeight:'bold',fontSize:'15px'}}>EFGH</label>
                <br/>
                <br/>
                </Grid.Column>
              </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column width={8}>
            <Header as='h3'>Shipping Information</Header>
            <Divider/>
            <Grid>
              <Grid.Row>
                <Grid.Column width={8}>
                  <label style={{float:'right',fontSize:'15px'}}>Shipping Id</label>
                  <br/>
                  <br/>
                  <label style={{float:'right',fontSize:'15px'}}>Source</label>
                </Grid.Column>
                <Grid.Column width={8}>
                <label style={{float:'left',fontWeight:'bold',fontSize:'15px'}}>XXXXXYYYYSYYSYY</label>
                <br/>
                <br/>
                <label style={{float:'right',fontSize:'15px',fontWeight:'bold'}}>#1234,One Bakery,Electronic City Phase 1</label>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={8}>
                  <label style={{float:'right',fontSize:'15px'}}>Destination</label>
                </Grid.Column>
                <Grid.Column width={8}>
                <label style={{float:'left',fontWeight:'bold',fontSize:'15px'}}>#456,2 Bakers.USA</label>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={8}>
                  <label style={{float:'right',fontSize:'15px'}}>Logistics Partner</label>
                </Grid.Column>
                <Grid.Column width={8}>
                <label style={{float:'left',fontWeight:'bold',fontSize:'15px'}}>Travel Logistics Company</label>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={8}>
                  <label style={{float:'right',fontSize:'15px'}}>Suggested Temperature</label>
                  <br/>
                  <br/>
                  <label style={{float:'right',fontSize:'15px'}}>Suggested Humidity</label>

                </Grid.Column>
                <Grid.Column width={8}>
                <label style={{float:'left',fontWeight:'bold',fontSize:'15px'}}>60°C</label>
                <br/>
                <br/>
                <label style={{float:'left',fontWeight:'bold',fontSize:'15px'}}>25%</label>
                </Grid.Column>
              </Grid.Row>

              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
