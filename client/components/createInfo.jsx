import React from 'react';
import {
  Button,
  Comment,
  Form,
  Header,
  Segment,
  Grid,
  Icon,
  Search,
  Divider,
  Input,
  Label,
  Menu,
  Image,
  Select,
  Radio,
  TextArea,
  Dropdown,
  List,
  Modal
} from 'semantic-ui-react';

const countryOptions = [
  {
    key: 'U',
    text: 'USA',
    value: 'USA'
  }, {
    key: 'I',
    text: 'India',
    value: 'India'
  }
]
const stateOptions = [
  {
    key: 't',
    text: 'Texas',
    value: 'Texas'
  }, {
    key: 'b',
    text: 'Bengaluru',
    value: 'Bengaluru'
  }
]

const ingredientOptions = [
  {
    key: 'br',
    text: 'Polyester',
    value: 'Polyester'
  }, {
    key: 'm',
    text: 'Cotton',
    value: 'Cotton'
  },
]
export default class CreateInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open:false,
      open1:false,
      activeItem: 'create',
      activeItem2: 'bread',
      textValue:'',
      ingredients: [
        {
          key: 'br',
          text: 'Bread',
          value: 'Bread'
        }, {
          key: 'm',
          text: 'Milk',
          value: 'Milk'
        }, {
          key: 'ye',
          text: 'Yeast',
          value: 'Yeast'
        }
      ]
    }
  }

  handleModal(value)
  {
    console.log(value);
    this.setState({open:true,textValue:value})
    console.log(this.state.textValue);
  }
  handleIngredients(e, {value}) {
    alert(value);
  }

  render() {
    var value = this.state
    return (<div>
      <Grid style={{
          marginLeft: '4%'
        }}>
        <Grid.Row>
          <Grid.Column width={2}/>
          <Grid.Column width={14}>
            <br/>
            <Header as='h2'>
              <span className="headers" style={{
                  color: '#676b72'
                }}>T-Shirt Information</span>
            </Header>
            <center></center>
          </Grid.Column>
          <Grid.Column width={2}/>
        </Grid.Row>
        <Grid.Row >
          <Grid.Column width={2}/>
          <Grid.Column width={6}>
            <Form>
              <Form.Field>
                <label >Product Name</label>
                <Input focus="focus" placeholder='Product Name' defaultValue='HB T-Shirt'/>
              </Form.Field>

              <Form.Field>
                <label >Assembled In</label>
                <Input focus="focus" placeholder='Product Name' defaultValue='Princeton, NJ'/>
              </Form.Field>

              <Form.Field>
                <label >Assembled Address</label>
                <Input focus="focus" placeholder='Product Name' defaultValue='100, ABC Street, 08540'/>
              </Form.Field>



              <Form.Field>
                <label >Ingredients</label>
                <List>
                  <List.Item onClick={this.handleModal.bind(this,'ING3477488')}>
                    <Image avatar="avatar" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfIw-gtF9AJD_t64cgOkgjcWZ_zP16JHpDu9rRYLfs65QEZhLg'/>
                    <List.Content>
                      <List.Header>Polyester</List.Header>
                    </List.Content>
                  </List.Item>
                  <List.Item onClick={this.handleModal.bind(this,'ING1225665')}>
                    <Image avatar="avatar" src='https://media.istockphoto.com/vectors/cotton-blossom-illustration-vector-id911801478?k=6&m=911801478&s=612x612&w=0&h=ybTF5ZxJQgKFALuWKTH6r33xiiMffZ6HPWo6NmUarFM='/>
                    <List.Content>
                      <List.Header>Cotton</List.Header>
                    </List.Content>
                  </List.Item>
                </List>
              </Form.Field>

            </Form>
          </Grid.Column>
          <Grid.Column width={6}>
            <Form>

              <Form.Field>
                <label >Manufactured Date</label>
                <input type='date' value="2017-10-07"/>
              </Form.Field>

              <Form.Field>
                <label >Packaged Date</label>
                <input type='date' value="2018-01-07"/>
              </Form.Field>

              <Form.Field>
                <label >Net Quantity</label>
                <input defaultValue="1500 Pieces"/>
              </Form.Field>

              <Form.Field>
                <label >Current Temperature</label>
                <Input focus="focus" placeholder='Product Name' defaultValue='58°F'/>
              </Form.Field>

              <Form.Field>
                <label >Current Humidity</label>
                <Input focus="focus" placeholder='Product Name' defaultValue='54 '/>
              </Form.Field>

            </Form>
          </Grid.Column>
          <Grid.Column width={2}/>
        </Grid.Row>
      </Grid>
      <Modal open={this.state.open} basic size='small'>
    <Modal.Content>
      <center>
      <span className="headers">Enter Product ID</span>
      <br/>
      <br/>
      <Input placeholder='enter Product id' defaultValue={this.state.textValue}/>
      <br/>
      <br/>
       <Divider horizontal>Or</Divider>
       <span className="headers">Scan the Product</span>
       <br/>
       <br/>
      <Icon name="search" size="massive"/>
      </center>
    </Modal.Content>
    <Modal.Actions>
      <Button color='green' inverted onClick={()=>{this.setState({open1:true,open:false})}}>
        <Icon name='checkmark' /> Submit
      </Button>
    </Modal.Actions>
  </Modal>

  <Modal open={this.state.open1} basic size='small'>
<Modal.Content>
  <center>
  <span className="headers">Product Information have been added to the list</span>
  <span className='headers' style={{color:'black'}}>Blockchain Address</span><br/>
  </center>
</Modal.Content>
<Modal.Actions>
  <Button color='green' inverted onClick={()=>{this.setState({open1:false})}}>
    <Icon name='checkmark' /> Done
  </Button>
</Modal.Actions>
</Modal>

    </div>);
  }
}
