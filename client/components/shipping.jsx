import React from 'react';
import { Accordion, Icon,Grid,Form} from 'semantic-ui-react';

export default class Shipping extends React.Component
{
  constructor()
  {
    super();
    this.state={activeIndex:1,date:'',
    date1:''}
  }

  componentDidMount(){
     var today = new Date();
     var day1 = today.getDate() - 3;
     var day = today.getDate() - 4;
     this.setState({date:today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + day).slice(-2),
                    date1:today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + day1).slice(-2)});
 }


  handleClick()
  {
    if(this.state.activeIndex == 1)
          this.setState({activeIndex:0})
    else
    if(this.state.activeIndex == 0)
          this.setState({activeIndex:1})
  }

  render()
  {
    return(
      <Accordion styled fluid>
        <Accordion.Title active={this.state.activeIndex === 0} index={0} onClick={this.handleClick.bind(this)}>
          <Icon name='dropdown' />
          Bakery-DC
        </Accordion.Title>
        <Accordion.Content active={this.state.activeIndex === 0} >
          <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
            <Form>
              <Form.Field>
                <label >Shipment ID(Bakery-DC)</label>
                <label className="headers" style={{fontSize:'17px',color:'black'}}>SHIP275</label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label >Logistics Partner Name</label>
                <label className="headers" style={{fontSize:'17px',color:'black'}}>Fine Foods Logistics</label>
              </Form.Field>
              <br/>

              </Form>
            </Grid.Column>

            <Grid.Column width={4}>
            <Form>
            <Form.Field>
              <label >Bakery (Pick-up) Location</label>
              <label className="headers" style={{fontSize:'17px',color:'black'}}>Princeton, NJ</label>
            </Form.Field>
            <br/>
            <Form.Field>
              <label >DC (Drop) Location</label>
              <label className="headers" style={{fontSize:'17px',color:'black'}}>Trenton, NJ</label>
            </Form.Field>


              </Form>
            </Grid.Column>

            <Grid.Column width={4}>
            <Form>
            <Form.Field>
              <label >Bakery Pick-up - Date </label>
              <label className="headers" style={{fontSize:'17px',color:'black'}}>{this.state.date}</label>
            </Form.Field>
            <br/>
            <Form.Field>
              <label >Bakery Pick-up - Time</label>
              <label className="headers" style={{fontSize:'17px',color:'black'}}>10:30:00 PM</label>
            </Form.Field>
            <br/>
            <Form.Field>
              <label >DC Drop -  Date </label>
              <label className="headers" style={{fontSize:'17px',color:'black'}}>{this.state.date1}</label>
            </Form.Field>

              </Form>
            </Grid.Column>
            <Grid.Column width={4}>
            <Form>
            <Form.Field>
              <label >Vehicle</label>
              <label className="headers" style={{fontSize:'17px',color:'black'}}>CTF 276H</label>
            </Form.Field>
            <br/>
              <Form.Field>
                <label >DC Drop-Time</label>
                <label className="headers" style={{fontSize:'17px',color:'black'}}>10:30 AM</label>
              </Form.Field>
            {// <Form.Field>
            //   <label >Average Temperature Maintained</label>
            //   <label className="headers" style={{fontSize:'17px',color:'black'}}>50 °F (10 °C)</label>
            // </Form.Field>
            // <br/>
            // <Form.Field>
            //   <label >Average Humidity Maintained</label>
            //   <label className="headers" style={{fontSize:'17px',color:'black'}}>60% (Relative Humidity)</label>
            // </Form.Field>
          }
              </Form>
            </Grid.Column>
          </Grid.Row>
          </Grid>
        </Accordion.Content>
      </Accordion>
    )
  }
}
