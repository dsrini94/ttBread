import React from 'react';
import {Modal,Divider,Form,Segment, Grid, Card, Icon, Image,Header,Button,Input} from 'semantic-ui-react';
import SwipeableViews from 'react-swipeable-views';
import LogisticsLogin from './../components/logisticLogin.jsx'
import LogisticsInfo from './../components/logisticInfo.jsx'
import LogisticssSummary from './../components/logisticsSummary.jsx'
import DcBound from './../components/dcBound.jsx'
import Idc from './../components/idc.jsx';
import Odc from './../components/odc.jsx';
import OdcSummary from './../components/odcSummary.jsx';
import IdcSummary from './../components/idcSummary.jsx';
import {HashRouter, Route, Link} from 'react-router-dom';


export default class DistributionCenter extends React.Component
{

  constructor()
  {
    super();
    this.state={slidingIndex:0,butonComponents:'',open:false,dcComponents:'',summaryComponents:'',blockchainId:''}
    this.handleLogin = this.handleLogin.bind(this);
    this.handleNextSlider=this.handleNextSlider.bind(this);
    this.odc = this.odc.bind(this);
    this.idc = this.idc.bind(this);
  }

  odc()
  {
    var temp=(<Odc />);
    var temp1 = (<OdcSummary />);
    var temp2 = (
      <div>
      <center>
      <Icon name="thumbs up" size="huge" />
      <br/>
        <p>Product Information Submitted Successfully</p>
        <span className='headers' style={{color:'black'}}>Blockchain Address</span><br/>
        </center>
        <div style={{marginLeft:'25px'}}>
        <span>Product Route :</span><br/>
          <span>7th Jan 2018,Sun  |Baker| 1K31KZXjcoxhXpRyjH9g5NxFSJIPi2zEXb</span><br/><br/>
          <span>7th Jan 2018,Sun  |FoodHaul Logistics| 3QJmV3qfvL4SuXo34YihAf3sRCW3qSipgC</span><br/><br/>
          <span>7th Jan 2018,Sun  |Distribution Centre| 3LifsmHu5HTmvcR8tow13fVfBSFW1s4mrP</span><br/>
          </div>
          </div>
    )
    this.setState({slidingIndex:1,butonComponents:'',dcComponents:temp,summaryComponents:temp1,blockchainId:temp2})
  }

  idc()
  {
    var temp=(<Idc />);
    var temp1 = (<IdcSummary />);
    var temp2 = (
      <div>
      <center>
      <Icon name="thumbs up" size="huge" />
      <br/>
        <p>Product Information Submitted Successfully</p>
        </center>
          </div>
    )
    this.setState({slidingIndex:1,butonComponents:'',dcComponents:temp,summaryComponents:temp1,blockchainId:temp2})
  }

  handleModal()
  {
    this.setState({open:true});
  }

  handleLogin()
  {
    var temp=(
      <div>
        <Button positive floated="right" circular onClick={this.handleNextSlider.bind(this)}>Next</Button>
        <Button positive floated="right" circular onClick={this.handlePrevSlider.bind(this)}>Prev</Button>
      </div>);

    this.setState({slidingIndex:(this.state.slidingIndex+1),butonComponents:temp})
  }

  handlePrevSlider()
  {
    if(this.state.slidingIndex == 2)
    {
      this.setState({butonComponents:'',slidingIndex:(this.state.slidingIndex-2)})
    }
    else
    if(this.state.slidingIndex == 2 || this.state.slidingIndex == 3)
    {
      var temp=(
        <div>
          <Button positive floated="right" circular onClick={this.handleNextSlider.bind(this)}>Next</Button>
          <Button positive floated="right" circular onClick={this.handlePrevSlider.bind(this)}>Prev</Button>
        </div>
      )
      this.setState({slidingIndex:(this.state.slidingIndex-1),butonComponents:temp})
    }
    else
    if(this.state.slidingIndex == 5)
    {
      var temp = (
        <div>
        <Button positive floated="right" circular onClick={()=>this.handleNextSlider()}>Next</Button>
        </div>);
      this.setState({slidingIndex:(this.state.slidingIndex-1),butonComponents:temp})
    }

  }

  handleNextSlider()
  {

    if(this.state.slidingIndex == 2)
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
            <Segment inverted color="brown">
            <Header style={{textAlign:'center'}}>
              <span className="headers">Distribution Center</span>
            </Header></Segment>
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={2} />
          <Grid.Column width={4} >
          <center>  <Header as='h1' style={{marginTop:'100px'}}><span className="headers" style={{color:'brown'}}>Distribution Center</span></Header></center>
            <br/>
            <Link to='/'><Image size='massive' src ='./../../images/dc.png' /></Link>
          </Grid.Column>
          <Grid.Column width={8}>
          <SwipeableViews index={this.state.slidingIndex}>
            <div style={{overflow:'hidden',marginTop:'55px'}}>
            <DcBound idc={this.idc} odc={this.odc}/>
            </div>

            <div style={{overflow:'hidden'}}>
            <LogisticsLogin handleLogin={this.handleLogin}/>
            </div>

            <div style={{overflow:'hidden'}}>
              {this.state.dcComponents}
            </div>

            <div style={{overflow:'hidden'}}>
              {this.state.summaryComponents}
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

                {this.state.blockchainId}
            </Modal.Content>
            <Modal.Actions>
              <Button positive onClick={()=>{this.setState({open:false,slidingIndex:0,butonComponents:''})}}>Done</Button>
            </Modal.Actions>
          </Modal>
      </div>
    );
  }
 }
