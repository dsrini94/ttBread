import React from 'react';
import {
  List,
  Modal,
  Divider,
  Form,
  Segment,
  Grid,
  Card,
  Icon,
  Image,
  Header,
  Button,
  Input
} from 'semantic-ui-react';
import Wheat from './wheat.jsx';
import Milk from './milk.jsx';
import Yeast from './yeast.jsx';
import Shipping from './shipping.jsx';
import Shipping2 from './shipping2.jsx';


export default class CustomerInfo extends React.Component
{

  constructor()
  {
    super();
    this.state={map:'',open:false,heading:'',icon:''}
  }


  handleMapModal(value)
  {
      if(value == 'bakery')
      {
        var temp =( <Image src='./../../images/bak.jpg' />);
        this.setState({map:temp,open:true,headding:'Map',icon:'world'})
      }
      else
      if(value == 'dc')
      {
        var temp =( <Image src='./../../images/dc.jpg' />);
        this.setState({map:temp,open:true,headding:'Map',icon:'world'})
      }
      else
      if(value == 'temp')
      {
        var temp =( <div>
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
              <Image src='./../../images/temp.jpg' size="large"/>
              </Grid.Column>
              <Grid.Column width={8}>
              <Image src='./../../images/temptable.jpg' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          </div>
        );
        this.setState({map:temp,open:true,headding:'Temparature',icon:'thermometer three quarters'})
      }
      else
      if(value == 'humidy')
      {
        var temp =( <div>
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
              <Image src='./../../images/humid.jpg' size="large"/>
              </Grid.Column>
              <Grid.Column width={8}>
              <Image src='./../../images/humidtable.jpg' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          </div>
        );
        this.setState({map:temp,open:true,headding:'Humidity',icon:'thermometer three quarters'})
      }
  }
  render()
  {
    return(
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={16}>
              <Header><span className="headers" style={{color:'#1CB084',fontSize:'25px'}}>Product Info</span></Header>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={4}>
            <Form>
              <Form.Field>
                <label >Product ID</label>
                <label className="headers" style={{fontSize:'17px',color:'black'}}>PROD524932</label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label >Product Name</label>
                <label className="headers" style={{fontSize:'17px',color:'black'}}>HB Whole Wheat Bread</label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label >StorageTemp</label>
                <label className="headers" style={{fontSize:'17px',color:'black'}}>50-60°F (10-15°C)</label>
              </Form.Field>
              </Form>
            </Grid.Column>

            <Grid.Column width={4}>
            <Form>
              <Form.Field>
                <label >Manufactured/Assembled In</label>
                <label className="headers" style={{fontSize:'17px',color:'black'}}>Princeton, NJ</label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label >Manufacturing Location Address</label>
                <label className="headers" style={{fontSize:'17px',color:'black'}}>100, ABC Street, 08540</label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label >Storage Humidity</label>
                <label className="headers" style={{fontSize:'17px',color:'black'}}>60-65% (Relative Humidity)</label>
              </Form.Field>
              </Form>
            </Grid.Column>

            <Grid.Column width={4}>
            <Form>
              <Form.Field>
                <label >Bake Date</label>
                <label className="headers" style={{fontSize:'17px',color:'black'}}>7th Jan, 2018</label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label >Packing Date</label>
                <label className="headers" style={{fontSize:'17px',color:'black'}}>7th Jan, 2018</label>
              </Form.Field>
              </Form>
            </Grid.Column>
            <Grid.Column width={4}>
            <Form>
              <Form.Field>
                <label >Best Before Date</label>
                <label className="headers" style={{fontSize:'17px',color:'black'}}>27th Jan, 2018</label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label >Net Quanity</label>
                <label className="headers" style={{fontSize:'17px',color:'black'}}>400g/14.10oz</label>
              </Form.Field>
              </Form>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={16}>
            <Header><span className="headers" style={{color:'#1CB084',fontSize:'15px'}}>Wheat Information</span></Header>
              <Wheat />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={16}>
            <Header><span className="headers" style={{color:'#1CB084',fontSize:'15px'}}>Milk Information</span></Header>
              <Milk />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={16}>
            <Header><span className="headers" style={{color:'#1CB084',fontSize:'15px'}}>Yeast Information</span></Header>
              <Yeast />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={16}>
              <Header><span className="headers" style={{color:'#1CB084',fontSize:'25px'}}>Shipping Info</span></Header>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={1}>
            <Button icon color="teal" style={{marginBottom:'5px'}} onClick={this.handleMapModal.bind(this,'bakery')}>
              <Icon name='world' />
            </Button>
            </Grid.Column>
            <Grid.Column width={15}>
              <Shipping />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row >
          <Grid.Column width={1}>
          <Button icon color="teal" style={{marginBottom:'5px'}} onClick={this.handleMapModal.bind(this,'dc')}>
            <Icon name='world' />
          </Button>
          </Grid.Column>
            <Grid.Column width={15}>
              <Shipping2 />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row >
          <Grid.Column width={4}>
          <center><span className="headers" style={{color:'black'}}>Temparature</span>
          <br/>
          <br/>
          <Button icon color="teal" style={{marginBottom:'5px'}} onClick={this.handleMapModal.bind(this,'temp')}>
            <Icon name='thermometer half' />
          </Button></center>
          </Grid.Column>
            <Grid.Column width={4}>
            <center><span className="headers" style={{color:'black'}}>Humidity</span>
            <br/>
            <br/>
            <Button icon color="teal" style={{marginBottom:'5px'}} onClick={this.handleMapModal.bind(this,'humidy')}>
              <Icon name='thermometer half' />
            </Button></center>
            </Grid.Column>
          </Grid.Row>


        </Grid>

        <Modal open={this.state.open} basic>
            <Header icon={this.state.icon} content={this.state.headding} />
            <Modal.Content>
              {this.state.map}
            </Modal.Content>
            <Modal.Actions>
              <Button basic color='red' floated='left' style={{marginLeft:'150px'}} inverted onClick={()=>{this.setState({open:false})}}>
                <Icon name='remove' /> close
              </Button>
            </Modal.Actions>
        </Modal>

      </div>
    );
  }
}
