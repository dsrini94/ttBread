import React from 'react';
import {Modal,Divider,Form,Segment, Grid, Card, Icon, Image,Header,Button,Input} from 'semantic-ui-react';
import SwipeableViews from 'react-swipeable-views';
import LogisticsLogin from './../components/logisticLogin.jsx'
import RetailerInfo from './../components/retailerInfo.jsx'
import RetailerSummary from './../components/retailerSummary.jsx'
import {HashRouter, Route, Link} from 'react-router-dom';


export default class Retailer extends React.Component
{

  constructor()
  {
    super();
    this.state={slidingIndex:0,butonComponents:'',open:false}
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
            <Segment inverted color='red'><Header style={{textAlign:'center'}}>
              <span className="headers">Retailer</span>
            </Header></Segment>
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={2} />
          <Grid.Column width={4} >
            <center><Header as='h1' style={{marginTop:'100px'}}><span className="headers" style={{color:'#0e1e7a'}}>Retailer</span></Header></center>
            <br/>
            <Image src ='data:image/png;base64,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' />
          </Grid.Column>
          <Grid.Column width={8}>
          <SwipeableViews index={this.state.slidingIndex}>
            <div style={{overflow:'hidden'}}>
              <LogisticsLogin handleLogin={this.handleLogin}/>
            </div>
            <div style={{overflow:'hidden'}}>
              <RetailerInfo />
            </div>
            <div style={{overflow:'hidden'}}>
              <RetailerSummary />
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
                <span>7th Jan 2018,Sun  |Manufacturer| 1K31KZXjcoxhXpRyjH9g5NxFSJIPi2zEXb</span><br/><br/>
                <span>7th Jan 2018,Sun  |The Apparel Logistics Group| 3QJmV3qfvL4SuXo34YihAf3sRCW3qSipgC</span><br/><br/>
                <span>7th Jan 2018,Sun  |Distribution Centre| 3LifsmHu5HTmvcR8tow13fVfBSFW1s4mrP</span><br/><br/>
                <span>7th Jan 2018,Sun  |Global Fashion Logistics| 1ab5cmqmvQq8YTREEqcTmW7dfBNuFfgdCD</span><br/><br/>
                <span>7th Jan 2018,Sun  |Retailer| 1bbwUkiTcMd2QYt1QMFELf3oJYui3jYahD</span><br/>
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
