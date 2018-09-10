import React from 'react';
import {Input,Modal,Icon,Image, Header, Divider, Grid,Segment,Button,Form} from 'semantic-ui-react';

export default class RetailerSummary extends React.Component
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
     var day = today.getDate() ;
     this.setState({date:today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + day).slice(-2),
                    date1:today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + day1).slice(-2)});
 }

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
                <label className="headers" style={{fontSize:'20px'}}>Global Food Logistics</label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label >DC (Pick-up) Location</label>
                <label className="headers" style={{fontSize:'20px'}}>Trenton, NJ</label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label >Store (Drop) Location</label>
                <label className="headers" style={{fontSize:'20px'}}>Miami, FL</label>
              </Form.Field>


              </Form>
            </Grid.Column>
            <Grid.Column width={8}>
              <Form>
              <br/>
              <br/>
              <Form.Field>
                <label >Vehicle</label>
                <label className="headers" style={{fontSize:'20px'}}>XIJ 2THJ</label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label >Store Receiving -  Date </label>
                <label className="headers" style={{fontSize:'20px'}}>{this.state.date}</label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label >Store Receiving -  Time</label>
                <label className="headers" style={{fontSize:'20px'}}>3:40:00 PM</label>
              </Form.Field>
              <br/>

              <Form.Field>
                <label >Current Temparature</label>
                <label className="headers" style={{fontSize:'20px'}}>42°F</label>
              </Form.Field>


              <Form.Field>
                <label >Current Humidity</label>
                <label className="headers" style={{fontSize:'20px'}}>68 %</label>
              </Form.Field>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>)
  }
}
