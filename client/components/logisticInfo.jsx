import React from 'react';
import {Divider,Form,Segment, Grid, Card, Icon, Image,Header,Button,Input} from 'semantic-ui-react';

export default class LogisticsInfo extends React.Component
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
              <label >DC (Drop) Location</label>
              <label className="headers" style={{fontSize:'20px',color:'black'}}>Trenton, NJ</label>
            </Form.Field>
            <br/>

            <Form.Field>
              <label >Vehicle</label>
              <input defaultValue="CTF 276H"/>
            </Form.Field>

          </Form>
          </Grid.Column>

          <Grid.Column width={8}>

          <Form>

          <Form.Field>
            <label >Outlet Pick-up - Date </label>
            <input type='date' value="2018-01-07"/>
          </Form.Field>

            <Form.Field>
              <label >Outlet Pick-up - Time</label>
              <input defaultValue="10:30:00 AM" />
            </Form.Field>

            <Form.Field>
              <label >DC Drop -  Date </label>
              <input type='date' value="2018-01-07"/>
            </Form.Field>

            <Form.Field>
              <label >DC Drop -  Time</label>
              <input defaultValue="12:30:00 PM" />
            </Form.Field>

            <Form.Field>
              <label >Wash</label>
              <label className="headers" style={{fontSize:'20px'}}>Gentle Wash</label>
            </Form.Field>
            <br/>

            <Form.Field>
              <label >Iron</label>
              <label className="headers" style={{fontSize:'20px'}}>Medium Iron</label>
            </Form.Field>
          </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
