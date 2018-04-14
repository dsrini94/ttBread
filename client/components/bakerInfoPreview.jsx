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
                  <label className="headers" style={{fontSize:'20px'}}>HB T-Shirt</label>
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
              <label >Net Quantity</label>
              <label className="headers" style={{fontSize:'20px'}}>1500 Pieces</label>
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

          </Form>
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>
      </Grid>
      </div>
    );
  }
}
