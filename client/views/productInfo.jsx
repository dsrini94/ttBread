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
  Modal,
  List
} from 'semantic-ui-react';
import SwipeableViews from 'react-swipeable-views';

import CreateInfo from '../components/createInfo.jsx'
import ShippingInformation from '../components/shippingInformation.jsx'
import Preview from '../components/preview.jsx';
import Logisticss1 from '../components/logistics1.jsx';


export default class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'create',
      activeItem2: 'bread',
      slidingIndex:0,
      buttonComponents:'',
      open:false
    }
  }

  componentDidMount()
  {
    var temp=(
      <div>
      <Button positive floated="right" circular onClick={this.handleNextSlider.bind(this)}>Next</Button>
      </div>
    )
    this.setState({buttonComponents:temp})
  }

  handleModal()
  {
    this.setState({open:true});
  }

  handleNextSlider()
  {
    if(this.state.slidingIndex == 0)
    {
      var temp=(
        <div>
        <Button positive floated="right" circular onClick={this.handleNextSlider.bind(this)}>Next</Button>
        <Button positive floated="right" circular onClick={this.handlePrevSlider.bind(this)}>Prev</Button>
        </div>
      )
      this.setState({slidingIndex:(this.state.slidingIndex+1),buttonComponents:temp})
    }
    else
    if(this.state.slidingIndex == 1)
    {
      var temp=(
        <div>
        <Button positive floated="right" circular onClick={this.handleModal.bind(this)}>Submit</Button>
        <Button positive floated="right" circular onClick={this.handlePrevSlider.bind(this)}>Prev</Button>
        </div>
      )
      this.setState({slidingIndex:(this.state.slidingIndex+1),buttonComponents:temp})
    }
  }

  handlePrevSlider()
  {
    if(this.state.slidingIndex == 1)
    {
      var temp=(
        <div>
        <Button positive floated="right" circular onClick={this.handleNextSlider.bind(this)}>Next</Button>
        </div>
      )
      this.setState({slidingIndex:(this.state.slidingIndex-1),buttonComponents:temp})
    }
    else
    if(this.state.slidingIndex == 2)
    {
      var temp=(
        <div>
        <Button positive floated="right" circular onClick={this.handleNextSlider.bind(this)}>Next</Button>
        <Button positive floated="right" circular onClick={this.handlePrevSlider.bind(this)}>Prev</Button>
        </div>
      )
      this.setState({slidingIndex:(this.state.slidingIndex-1),buttonComponents:temp})
    }
  }
  render() {
    const {activeItem} = this.state
    const {activeItem2} = this.state
    return (<div>
      <Menu pointing="pointing" style={{
          marginLeft: '30%',
          marginTop: '10px',
          marginRight: '33.2%',
          borderRadius:'30px 30px 0px 0px',
          boxShadow:'none'
        }}>
        <Menu.Item color={'teal'} name='CREATE PRODUCT INFORMATION' active={activeItem === 'create'} onClick={this.handleItemClick} className='createProdInfo'/>
        <Menu.Item name='VIEW PRODUCT INFORMATION' active={activeItem === 'friends'} onClick={this.handleItemClick}/>
      </Menu>
      <List floated="right" style={{marginTop:'-50px',marginRight:'45px'}}>
      <List.Item>
      <Image avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSnLY_3QtGpKPFK3wBvaC1vjF2HsDHDRq0YMus_anzFa9mOQB0' />
      <List.Content>
        <List.Header as='a'>Mr Baker</List.Header>
        <List.Description>Sydney,Australia</List.Description>
      </List.Content>
    </List.Item>
    </List>

      <Segment.Group raised="raised" className="segment" style={{
          marginLeft: '2%',
          marginRight: '2%',
          marginTop: '-0.5%',
          borderRadius:"25px"
        }}>
        <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <h3 className='heading'>SELECT PRODUCT</h3>
            <Menu fluid="fluid" vertical="vertical" tabular="tabular">
              <Menu.Item name='bio' active={activeItem2 === 'egg'} onClick={this.handleMenuClick}><Image src='./images/egg.png' size='small'/></Menu.Item>
              <Menu.Item name='bio' active={activeItem2 === 'bread'} onClick={this.handleMenuClick}><Image src='./images/bread.png' size='small'/></Menu.Item>
              <Menu.Item name='bio' active={activeItem2 === 'milk'} onClick={this.handleMenuClick}><Image src='./images/milk.png' size='small'/></Menu.Item>
            </Menu>
          </Grid.Column>

          <Grid.Column stretched="stretched" width={12} style={{overflow:'hidden'}}>
            <SwipeableViews index={this.state.slidingIndex}>
              <div style={{overflow:"hidden"}}>
              <CreateInfo/>
              </div>
              <div style={{overflow:"hidden"}}>
                <ShippingInformation/>
              </div>
              <div style={{overflow:"hidden"}}>
                <Preview />
              </div>
            </SwipeableViews>
          </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{marginTop:"-45px"}}>
          <Grid.Column>
          {this.state.buttonComponents}
          </Grid.Column>

          </Grid.Row>
        </Grid>

      </Segment.Group>

      <Modal size='tiny' open={this.state.open} onClose={this.close}>
          <Modal.Content>
          <center>
          <Icon name="thumbs up" size="huge" />
            <p>Product Information Submitted Successfully</p>
            </center>
          </Modal.Content>
          <Modal.Actions>
            <Button positive onClick={()=>{this.setState({open:false})}}>Done</Button>
          </Modal.Actions>
        </Modal>

    </div>);
  }
}
