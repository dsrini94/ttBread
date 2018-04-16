import React from 'react';
import {Input,Modal,Icon,Image, Header, Divider, Grid,Segment,Button,Form} from 'semantic-ui-react';

export default class OdcSummary extends React.Component
{
  render()
  {
    return(
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h2' ><span className="headers" style={{color:'#0e1e7a'}}>Verify Information</span></Header>
              <Form>
              <Form.Field>
                <label >Product ID</label>
                <label className="headers" style={{fontSize:'20px'}}>PROD524932</label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label >Shipment ID (DC - Store)</label>
                <label className="headers" style={{fontSize:'20px'}}>HK4481N</label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label >Logistics Partner Name</label>
                <label className="headers" style={{fontSize:'20px'}}>Global Fashion Logistics</label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label >DC (Pick-up) Location</label>
                <label className="headers" style={{fontSize:'20px'}}>Trenton, NJ</label>
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
              <br/>
              <br/>
              <Form.Field>
                <label >Store (Drop) Location</label>
                <label className="headers" style={{fontSize:'20px'}}>Miami,FL</label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label >Vehicle</label>
                <label className="headers" style={{fontSize:'20px'}}>XIJ 2THJ</label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label >DC Dispatch -  Date </label>
                <label className="headers" style={{fontSize:'20px'}}>8th Jan, 2018</label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label >DC Dispatch -  Time</label>
                <label className="headers" style={{fontSize:'20px'}}>2:30:00 PM</label>
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
      </div>)
  }
}
