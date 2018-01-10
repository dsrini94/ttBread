import React from 'react';
import {Image, Header, Divider, Grid,Segment,Button,Form} from 'semantic-ui-react';

export default class BakerInfoPreview extends React.Component
{
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
                  <label className="headers" style={{fontSize:'20px'}}>HB Whole Wheat Bread</label>
                </Form.Field>
                <br/>
                <Form.Field>
                  <label >Manufactured/Assembled In</label>
                  <label className="headers" style={{fontSize:'20px'}}>Princeton, NJ</label>
                </Form.Field>
                <br/>

                <Form.Field>
                  <label >Manufacturing Location Address</label>
                  <label className="headers" style={{fontSize:'20px'}}>100, ABC Street, 08540</label>
                </Form.Field>
                <br/>

                <Form.Field>
                  <label >Bake Date</label>
                  <label className="headers" style={{fontSize:'20px'}}>7th Jan, 2018</label>
                </Form.Field>
                <br/>

                <Form.Field>
                  <label >Packing Date</label>
                  <label className="headers" style={{fontSize:'20px'}}>7th Jan, 2018</label>
                </Form.Field>

              </Form>
          </Grid.Column>

          <Grid.Column width={7}>
          <br/>
          <br/>
          <Form>

            <Form.Field>
              <label >Best Before Date</label>
              <label className="headers" style={{fontSize:'20px'}}>27th Jan, 2018</label>
            </Form.Field>
            <br/>
            <Form.Field>
              <label >Net Quantity</label>
              <label className="headers" style={{fontSize:'20px'}}>400g/14.10oz</label>
            </Form.Field>
            <br/>

            <Form.Field>
              <label >StorageTemp</label>
              <label className="headers" style={{fontSize:'20px'}}>50-60°F (10-15°C)</label>
            </Form.Field>
            <br/>

            <Form.Field>
              <label >Storage Humidity</label>
              <label className="headers" style={{fontSize:'20px'}}>60-65% (Relative Humidity)</label>
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
