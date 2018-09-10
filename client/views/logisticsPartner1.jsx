import React from 'react';
import {Modal,Divider,Form,Segment, Grid, Card, Icon, Image,Header,Button,Input} from 'semantic-ui-react';
import SwipeableViews from 'react-swipeable-views';
import LogisticsLogin from './../components/logisticLogin.jsx'
import LogisticsInfo from './../components/logisticInfo.jsx'
import LogisticssSummary from './../components/logisticsSummary.jsx'
import {HashRouter, Route, Link} from 'react-router-dom';


export default class LogisticssPartner1 extends React.Component
{

  constructor()
  {
    super();
    this.state={slidingIndex:0,butonComponents:'',open:false,date:''}
    this.handleLogin = this.handleLogin.bind(this);
    this.handleNextSlider=this.handleNextSlider.bind(this)
  }

  handleModal()
  {
    this.setState({open:true});
  }

  handleLogin()
  {
    var temp = (
      <Button positive floated="right" circular onClick={()=>this.handleNextSlider()}>Next</Button>
    );
    this.setState({slidingIndex:(this.state.slidingIndex+1),butonComponents:temp})
  }

  componentDidMount()
  {
    var today = new Date();
    var day = today.getDate() - 5 ;
    this.setState({date:today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + day).slice(-2)});
  }

  handlePrevSlider()
  {
    if(this.state.slidingIndex == 2)
    {
      var temp = (
        <Button positive floated="right" circular onClick={()=>this.handleNextSlider()}>Next</Button>
      );
      this.setState({slidingIndex:(this.state.slidingIndex-1),butonComponents:temp})
    }
  }

  handleNextSlider()
  {
    if(this.state.slidingIndex == 1)
    {
      var temp=(
        <div>
          <Button positive floated="right" circular onClick={this.handleModal.bind(this)}>Submit</Button>
          <Button positive floated="right" circular onClick={this.handlePrevSlider.bind(this)}>Prev</Button>
        </div>
      )
      this.setState({slidingIndex:(this.state.slidingIndex+1),butonComponents:temp})
    }
  }

  render()
  {
    return(
      <div>
        <br/>
        <Grid>

        <Grid.Row>
          <Grid.Column width={2} />
          <Grid.Column width={12}>
            <Segment inverted style={{backgroundColor:'#0e1e7a'}}><Header style={{textAlign:'center'}}>
              <span className="headers">Logistics Partner</span>
            </Header></Segment>
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={2} />
          <Grid.Column width={4} >
          <center>  <Header as='h1' style={{marginTop:'100px'}}><span className="headers" style={{color:'#0e1e7a'}}>Logistics Partner</span></Header></center>
            <br/>
            <Image src ='./../../images/truck.png' />
          </Grid.Column>
          <Grid.Column width={8}>
          <SwipeableViews index={this.state.slidingIndex}>
            <div style={{overflow:'hidden'}}>
              <LogisticsLogin handleLogin={this.handleLogin}/>
            </div>
            <div style={{overflow:'hidden'}}>
              <LogisticsInfo />
            </div>
            <div style={{overflow:'hidden'}}>
              <LogisticssSummary />
            </div>
          </SwipeableViews>
          <br/>
          {this.state.butonComponents}
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>

        </Grid>

        <Modal size='large' open={this.state.open} onClose={this.close}>
            <Modal.Content>
            <center>
            <Icon name="thumbs up" size="huge" />
            <br/>
              <p>Product Information Submitted Successfully</p>
              <span className='headers' style={{color:'black'}}>Blockchain Address</span><br/>
              </center>
              <div style={{marginLeft:'25px'}}>
              <span>Product Route :</span><br/>
                <span>{this.state.date},Wed  |Baker| 1K31KZXjcoxhXpRyjH9g5NxFSJIPi2zEXb</span><br/><br/>
                <span>{this.state.date},Wed  |Fine Foods Logistics| 3QJmV3qfvL4SuXo34YihAf3sRCW3qSipgC</span><br/>
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
