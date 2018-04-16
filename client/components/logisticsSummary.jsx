import React from 'react';
import {Input,Modal,Icon,Image, Header, Divider, Grid,Segment,Button,Form} from 'semantic-ui-react';

export default class LogisticssSummary extends React.Component
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
                <label >Shipment ID (Outlet - DC)</label>
                <label className="headers" style={{fontSize:'20px'}}>SHIP275</label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label >Logistics Partner Name</label>
                <label className="headers" style={{fontSize:'20px'}}>The Apparel Logistics Group</label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label >Outlet (Pick-up) Location</label>
                <label className="headers" style={{fontSize:'20px'}}>Princeton, NJ</label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label >DC (Drop) Location</label>
                <label className="headers" style={{fontSize:'20px'}}>Trenton, NJ</label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label >Vehicle</label>
                <label className="headers" style={{fontSize:'20px'}}>CTF 276H</label>
              </Form.Field>
              <br/>

              <Form.Field>
                <label >Current Humidity</label>
                <label className="headers" style={{fontSize:'20px'}}>62</label>
              </Form.Field>

              </Form>
            </Grid.Column>
            <Grid.Column width={8}>
              <Form>
              <br/>
              <br/>
              <Form.Field>
                <label >Outlet Pick-up - Date </label>
                <label className="headers" style={{fontSize:'20px'}}>7th Jan, 2018</label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label >Outlet Pick-up - Time</label>
                <label className="headers" style={{fontSize:'20px'}}>10:30:00 PM</label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label >DC Drop -  Date </label>
                <label className="headers" style={{fontSize:'20px'}}>8th Jan, 2018</label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label >DC Drop -  Time</label>
                <label className="headers" style={{fontSize:'20px'}}>10:30:00 AM</label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label >Wash</label>
                <label className="headers" style={{fontSize:'20px'}}>Gentle Wash</label>
              </Form.Field>
              <br/>

              <Form.Field>
                <label >Iron</label>
                <label className="headers" style={{fontSize:'20px'}}>Medium Iron</label>
              </Form.Field>
              <br/>

              <Form.Field>
                <label >Current Temparature</label>
                <label className="headers" style={{fontSize:'20px'}}>59°F</label>
              </Form.Field>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>)
  }
}
