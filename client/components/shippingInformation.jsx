import React from 'react';
import {Icon,Header, Form, Grid, Dropdown,Segment} from 'semantic-ui-react';

const countryOptions = [
  { key: 'U', text: 'USA', value: 'USA' },
  { key: 'I', text: 'India', value: 'India' },
]
const stateOptions = [
  { key: 't', text: 'Texas', value: 'Texas' },
  { key: 'b', text: 'Bengaluru', value: 'Bengaluru' },
]


export default class ShippingInformation extends React.Component {
  render() {
    return (<div>
      <Header as='h2'>Shipping Information</Header>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <Form>
              <Form.Field>
                <label >Shipping ID</label>
                <input placeholder='Shipping ID'/>
              </Form.Field>
              <Form.TextArea label='Source' placeholder='Source'/>
              <Dropdown placeholder='Select Country' search="search" selection="selection" options={countryOptions} style={{ marginRight:'1px'}}/>
              <Dropdown placeholder='Select State' search="search" selection="selection" options={stateOptions}/>
              <br/>
              <br/>
              <Form.Field>
                <label >Enter Postalcode</label>
                <input placeholder='Postalcode'/>
              </Form.Field>
              <Form.Field>
                <label>Logistics Partner</label>
                <Dropdown placeholder='Logistics Partner' selection="selection" options={countryOptions} style={{
                    opacity: "0.6"
                  }}/>
              </Form.Field>

            </Form>
          </Grid.Column>
          <Grid.Column width={8}>
            <Form>
              <Form.Field>
                <label >Product ID</label>
                <label style={{
                    fontSize: '20px'
                  }}>XXXXXYYYYSYYSYY</label>
              </Form.Field>
              <Form.TextArea label='Source' placeholder='Tell us more about you...'/>
              <Dropdown placeholder='Select Country' search="search" selection="selection" options={countryOptions} style={{ marginRight:'1px'}}/>
              <Dropdown placeholder='Select State' search="search" selection="selection" options={countryOptions}/>
              <br/>
              <br/>
              <Form.Field>
                <label >Enter Postalcode</label>
                <input placeholder='Postalcode'/>
              </Form.Field>
            </Form>
            <br/>
            <label>Suggested Temperature</label>
            <br/>
            <br/>
            <Segment circular="circular" style={{height:115,width:115}} color="blue">
                <Icon name="thermometer three quarters" color="blue"  size="big"/>
                <br/>
                  60°C
            </Segment>
            <label style={{float:'right',marginTop:'-150px'}}>Suggested Humidity</label>
            <br/>
            <br/>
            <Segment circular="circular" color="red" style={{float:'right',marginTop:'-150px',height:115,width:115}}>
                <Icon name="theme" size="big" color="red" />
                <br/>
                  25%
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    </div>);
  }
}
