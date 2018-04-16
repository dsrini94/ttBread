import React from 'react'
import {
  Step,
  Button,
  Segment,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
  Grid,
  Header,
  Label,
  Icon,
  Menu,
  Table,
  Divider,
  Modal,
  Dimmer,
  Loader,
  Image
} from 'semantic-ui-react';
import request from 'superagent';

export default class BlockChain extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      slideIndex: 0,
      owner:'',
      uid:'',
      name: '',
      status : '',
      description:'',
      mfg_date:'',
      mfg_loc:'',
      ship_seq:'',
      last_process_point:'',
      trace:'',
      locationTraceTemp:'',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount()
  {
  }

  handleSubmit(e)
  {
    request.get('http://52.79.135.132:8080/getProductByQId?qId=qrcode1').end((err, res) => {
      if (err) {
        console.log(err);
      }
      else {
        console.log(res.text);
      }
      this.setState({

      });
    });
  }

  render()
  {
    return (
      <div>
        <Button onClick={this.handleSubmit}>Click Here..!!</Button>
      </div>
    );
  }
}
