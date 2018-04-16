import React from 'react';
import {Divider,Form,Segment, Grid, Card, Icon, Image,Header,Button,Input} from 'semantic-ui-react';

export default class RetailerInfo extends React.Component
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
              <label >Shipment ID (DC - Store)</label>
              <label className="headers" style={{fontSize:'20px',color:'black'}}>HK4481N</label>
            </Form.Field>
            <br/>

            <Form.Field>
              <label >Logistics Partner Name</label>
              <label className="headers" style={{fontSize:'20px',color:'black'}}>Global Fashion Logistics</label>
            </Form.Field>
            <br/>

            <Form.Field>
              <label >DC (Pick-up) Location</label>
              <label className="headers" style={{fontSize:'20px',color:'black'}}>Trenton, NJ</label>
            </Form.Field>
            <br/>

            <Form.Field>
              <label >Store (Drop) Location</label>
              <label className="headers" style={{fontSize:'20px',color:'black'}}>Miami, FL</label>
            </Form.Field>
            <br/>

            <Form.Field>
              <label >Current Temperature</label>
              <Input focus="focus" placeholder='Product Name' defaultValue='44°F'/>
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
            <label >Store Receiving -  Date </label>
            <input type='date' value="2018-01-10"/>
          </Form.Field>

            <Form.Field>
              <label >Store Receiving -  Time</label>
              <input defaultValue="3:40:00 PM" />
            </Form.Field>

            <Form.Field>
              <label >Wash</label>
              <input defaultValue="Gentle Wash" />
            </Form.Field>

            <Form.Field>
              <label >Iron</label>
              <input defaultValue="Medium Iron" />
            </Form.Field>

            <Form.Field>
              <label >Current Humidity</label>
              <Input focus="focus" placeholder='Product Name' defaultValue='56'/>
            </Form.Field>
          </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
