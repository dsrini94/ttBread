import React from 'react';
import {Dimmer, Loader,Input,Modal,Icon,Image, Header, Divider, Grid,Segment,Button,Form} from 'semantic-ui-react';

export default class LogisticsLogin extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={active:false}
  }

  handleSetTimeout()
  {
    this.setState({active:true})
    setTimeout(()=>{
      this.setState({active:false})
      this.props.handleLogin()}, 2000);
  }

  render()
  {
    return(
      <div>

        <Segment>
        <Dimmer active={this.state.active} />
        <Loader inverted active={this.state.active} >Fetching data...</Loader>
        <center>
        <Form.Field>
          <label style={{fontWeight:'bold'}}>Enter Product ID</label>
          <br/>
          <br/>
          <Input focus placeholder='Enter Product ID...' defaultValue='PROD524932'/>
          <br/>
          <br/>
          <Button primary onClick={this.handleSetTimeout.bind(this)}>Submit</Button>
        </Form.Field>
        </center>

        <Divider horizontal>Or</Divider>
        <center>
        <Form.Field>
          <label style={{fontWeight:'bold'}}>Scan your Product</label>
          <br/>
          <br/>
          <Icon name="search" size="massive"/>
        </Form.Field>
        </center>
        </Segment>
      </div>
    );
  }
}
