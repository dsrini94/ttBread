import React from 'react';
import {Divider,Form,Segment, Grid, Card, Icon, Image,Header,Button,Input} from 'semantic-ui-react';

export default class Odc extends React.Component
{
  render()
  {
    return(
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header as='h2'><span className="headers" style={{color:'#0e1e7a'}}>Product Information</span></Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={8}>
          <Form>
            <Form.Field>
              <label >Product ID</label>
              <label className="headers" style={{fontSize:'20px',color:'black'}}>PROD524932</label>
            </Form.Field>
            <br/>
            <Form.Field>
              <label >Shipment ID (Bakery - DC)</label>
              <label className="headers" style={{fontSize:'20px',color:'black'}}>HK4481N</label>
            </Form.Field>
            <br/>

            <Form.Field>
              <label >Logistic Partner Name</label>
              <label className="headers" style={{fontSize:'20px',color:'black'}}>TimBrothers Food Logistics</label>
            </Form.Field>
            <br/>

            <Form.Field>
              <label >DC (Pick-up) Location</label>
              <label className="headers" style={{fontSize:'20px',color:'black'}}>Trenton, NJ</label>
            </Form.Field>
            <br/>

            <Form.Field>
              <label >Store (Drop) Location</label>
              <label className="headers" style={{fontSize:'20px',color:'black'}}>New Brunswick, N</label>
            </Form.Field>
          </Form>
          </Grid.Column>

          <Grid.Column width={8}>

          <Form>

          <Form.Field>
            <label >Vehicle</label>
            <label className="headers" style={{fontSize:'20px',color:'black'}}>XIJ 2THJ</label>
          </Form.Field>

          <Form.Field>
            <label >DC Dispatch -  Date </label>
            <input type='date' value="2018-01-07"/>
          </Form.Field>

            <Form.Field>
              <label >DC Dispatch - Time</label>
              <input defaultValue="2:30:00 PM" />
            </Form.Field>

            <Form.Field>
              <label >Temp Recorded (Outbound)</label>
              <input defaultValue="50°F" />
            </Form.Field>

            <Form.Field>
              <label >Humidity Recorded (Outbound)</label>
              <input defaultValue="60%" />
            </Form.Field>
          </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
