import React from 'react';
import {Divider,Form,Segment, Grid, Card, Icon, Image,Header,Button,Input} from 'semantic-ui-react';

export default class LogisticsInfo extends React.Component
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
     var day1 = today.getDate() - 3;
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
              <label >Shipment ID (Bakery - DC)</label>
              <label className="headers" style={{fontSize:'20px',color:'black'}}>SHIP275</label>
            </Form.Field>
            <br/>

            <Form.Field>
              <label >Logistics Partner Name</label>
              <label className="headers" style={{fontSize:'20px',color:'black'}}>Fine Foods Logistics</label>
            </Form.Field>
            <br/>

            <Form.Field>
              <label >Bakery (Pick-up) Location</label>
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
            <label >Bakery Pick-up - Date </label>
            <input type='date' value={this.state.date}/>
          </Form.Field>

            <Form.Field>
              <label >Bakery Pick-up - Time</label>
              <input defaultValue="10:30:00 PM" />
            </Form.Field>

            <Form.Field>
              <label >DC Drop -  Date </label>
              <input type='date' value={this.state.date1}/>
            </Form.Field>

            <Form.Field>
              <label >DC Drop -  Time</label>
              <input defaultValue="10:30:00 AM" />
            </Form.Field>

            <Form.Field>
              <label >Current Humidity</label>
              <Input focus="focus" placeholder='Product Name' defaultValue='62 %'/>
            </Form.Field>

            <Form.Field>
              <label >Current Temparature</label>
              <Input focus="focus" placeholder='Product Name' defaultValue='59 °F'/>
            </Form.Field>
          </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
