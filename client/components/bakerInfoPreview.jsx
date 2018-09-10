import React from 'react';
import {Image, Header, Divider, Grid,Segment,Button,Form} from 'semantic-ui-react';

export default class BakerInfoPreview extends React.Component
{

  constructor(props) {
    super(props);
    this.state = {
      date:'',
    }
  }

  componentDidMount(){
     var today = new Date();
     var day = today.getDate() - 5 ;
     this.setState({date:today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + day).slice(-2)});
 }

  render()
  {
    return(
      <div>
      <Grid>
        <Grid.Row style={{marginTop:'50px'}}>
        <Grid.Column width={2} />
          <Grid.Column width={7}>
              <Header as='h2'><span className="headers" style={{color:'#bcb229'}}>Verify Information</span></Header>
              <Form>

                <Form.Field>
                  <label >Product Brand Name</label>
                  <label className="headers" style={{fontSize:'20px'}}>HB Bread</label>
                </Form.Field>
                <br/>
                <Form.Field>
                  <label >Manufactured In</label>
                  <label className="headers" style={{fontSize:'20px'}}>Princeton, NJ</label>
                </Form.Field>
                <br/>

                <Form.Field>
                  <label >Manufactured Address</label>
                  <label className="headers" style={{fontSize:'20px'}}>100, ABC Street, 08540</label>
                </Form.Field>
                <br/>

                {// <Form.Field>
                //   <label >Bake Date</label>
                //   <label className="headers" style={{fontSize:'20px'}}>7th Jan, 2018</label>
                // </Form.Field>
                // <br/>
              }

                <Form.Field>
                  <label >Packaged Date</label>
                  <label className="headers" style={{fontSize:'20px'}}>{this.state.date}</label>
                </Form.Field>

                <br/>
                <Form.Field>
                  <label >Manufactured Date</label>
                  <label className="headers" style={{fontSize:'20px'}}>{this.state.date}</label>
                </Form.Field>

              </Form>
          </Grid.Column>

          <Grid.Column width={7}>
          <br/>
          <br/>
          <Form>

            <Form.Field>
              <label >Net Quantity</label>
              <label className="headers" style={{fontSize:'20px'}}>150 Loafs</label>
            </Form.Field>
            <br/>



            <Form.Field>
              <label >Current Temparature</label>
              <label className="headers" style={{fontSize:'20px'}}>58°F</label>
            </Form.Field>
            <br/>

            <Form.Field>
              <label >Current Humidity</label>
              <label className="headers" style={{fontSize:'20px'}}>54 %</label>
            </Form.Field>
            <br/>

          </Form>
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>
      </Grid>
      </div>
    );
  }
}
