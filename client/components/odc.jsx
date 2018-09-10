import React from 'react';
import {Divider,Form,Segment, Grid, Card, Icon, Image,Header,Button,Input} from 'semantic-ui-react';

export default class Odc extends React.Component
{

  constructor(props) {
    super(props);
    this.state = {
      date:'',
      date1:''
    }
  }

  componentDidMount(){
     var today = new Date();
     var day1 = today.getDate() - 2;
     var day = today.getDate() - 4;
     this.setState({date:today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + day).slice(-2),
                    date1:today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + day1).slice(-2)});
 }

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
              <label className="headers" style={{fontSize:'20px',color:'black'}}>Global Food Logistics</label>
            </Form.Field>
            <br/>

            <Form.Field>
              <label >DC (Pick-up) Location</label>
              <label className="headers" style={{fontSize:'20px',color:'black'}}>Trenton, NJ</label>
            </Form.Field>
            <br/>

            <Form.Field>
              <label >Current Temperature</label>
              <Input focus="focus" placeholder='Product Name' defaultValue='59°F'/>
            </Form.Field>

          </Form>
          </Grid.Column>

          <Grid.Column width={8}>

          <Form>

          <Form.Field>
            <label >Store (Drop) Location</label>
            <label className="headers" style={{fontSize:'20px',color:'black'}}>Miami,FL</label>
          </Form.Field>
          <br/>

          <Form.Field>
            <label >Vehicle</label>
            <label className="headers" style={{fontSize:'20px',color:'black'}}>XIJ 2THJ</label>
          </Form.Field>
          <br/>
          <Form.Field>
            <label >DC Dispatch -  Date </label>
            <input type='date' value={this.state.date1}/>
          </Form.Field>

            <Form.Field>
              <label >DC Dispatch - Time</label>
              <input defaultValue="2:30:00 PM" />
            </Form.Field>

            <Form.Field>
              <label >Current Humidity</label>
              <Input focus="focus" placeholder='Product Name' defaultValue='55 %'/>
            </Form.Field>

          </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
