import React from 'react';
import {Modal,Icon,Image, Header, Divider, Grid,Segment,Button} from 'semantic-ui-react';
import SwipeableViews from 'react-swipeable-views';
import CreateInfo from '../components/createInfo.jsx';
import BakerInfoPreview from '../components/bakerInfoPreview.jsx';
import {HashRouter, Route, Link} from 'react-router-dom';


export default class BakerInfo extends React.Component {

  constructor(props)
  {
    super(props);
    this.state={
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
        <Button positive floated="right" circular onClick={this.handleModal.bind(this)}>Submit</Button>
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
    return (<div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}/>
          <Grid.Column width={12}>
          <br/>
          <center>
            <Segment inverted style={{backgroundColor:'#676b72'}}><Header>T-Shirt Information</Header></Segment>
          </center>
          </Grid.Column>
          <Grid.Column width={2}/>
        </Grid.Row>
        <Grid.Row style={{marginTop:'-50px'}}>
          <Grid.Column width={4}>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
            <center>
            <Header as='h1'><span className="headers" style={{color:'#676b72',fontSize:'35px',marginLeft:'80px'}}>TShirt</span></Header>
              <Image src='https://images-na.ssl-images-amazon.com/images/I/71FyTpYC8IL._UX385_.jpg' size='massive' style={{
                  marginTop: '50px',marginLeft:'45px'
                }}/>
            </center>
          </Grid.Column>
          <Grid.Column width={10}>
          <SwipeableViews index={this.state.slidingIndex}>
            <div style={{overflow:'hidden'}}>
            <CreateInfo/>
            </div>
            <div style={{overflow:'hidden'}}>
              <BakerInfoPreview/>
            </div>
          </SwipeableViews>
          <div>
          <br/>
          {this.state.buttonComponents}
          </div>
          </Grid.Column>
        </Grid.Row>
        </Grid>

        <Modal size='tiny' open={this.state.open} onClose={this.close}>
            <Modal.Content>
            <center>
            <Icon name="thumbs up" size="huge" />
            <br/>
              <p>Product Information Submitted Successfully</p>
              <p>Product ID PROD524932</p>
              <br/>
              <span className='headers' style={{color:'black'}}>Blockchain Address</span><br/>
              </center>
              <div style={{marginLeft:'25px'}}>
              <span>Product Route :</span><br/>
                <span>7th Jan 2018,Sun  |Baker| 1K31KZXjcoxhXpRyjH9g5NxFSJIPi2zEXb</span><br/>
                </div>
            </Modal.Content>
            <Modal.Actions>
              <Button as={Link} to='/' positive onClick={()=>{this.setState({open:false})}}>Done</Button>
            </Modal.Actions>
          </Modal>

        </div>
        );
  }
}
