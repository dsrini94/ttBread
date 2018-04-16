import React from 'react';
import {Divider,Form,Segment, Grid, Card, Icon, Image,Header,Button,Input} from 'semantic-ui-react';

export default class IdcSummary extends React.Component
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
              <label >Shipment ID (Outlet - DC)</label>
              <label className="headers" style={{fontSize:'20px',color:'black'}}>SHIP275</label>
            </Form.Field>
            <br/>

            <Form.Field>
              <label >Logistics Partner Name</label>
              <label className="headers" style={{fontSize:'20px',color:'black'}}>The Apparel Logistics Group</label>
            </Form.Field>
            <br/>

            <Form.Field>
              <label >Outlet (Pick-up) Location</label>
              <label className="headers" style={{fontSize:'20px',color:'black'}}>Princeton, NJ</label>
            </Form.Field>
            <br/>

            <Form.Field>
              <label >Current Temparature</label>
              <label className="headers" style={{fontSize:'20px'}}>59°F</label>
            </Form.Field>


          </Form>
          </Grid.Column>

          <Grid.Column width={8}>

          <Form>
          <Form.Field>
            <label >DC (Drop) Location</label>
            <label className="headers" style={{fontSize:'20px',color:'black'}}>Trenton, NJ</label>
          </Form.Field>
          <br/>

          <Form.Field>
            <label >Vehicle</label>
            <label className="headers" style={{fontSize:'20px',color:'black'}}>CTF 276H</label>
          </Form.Field>

          <br/>
          <Form.Field>
            <label >DC Receiving -  Date </label>
            <label className="headers" style={{fontSize:'20px',color:'black'}}>8th Jan 2018</label>
          </Form.Field>
          <br/>

            <Form.Field>
              <label >DC Receiving - Time</label>
              <label className="headers" style={{fontSize:'20px',color:'black'}}>10:30:00 AM</label>

            </Form.Field>
            <br/>

            <Form.Field>
              <label >Current Humidity</label>
              <label className="headers" style={{fontSize:'20px'}}>55</label>
            </Form.Field>

          </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
