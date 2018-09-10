import React from 'react';
import {Segment, Grid, Card, Icon, Image,Header} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';

export default class DashBoard extends React.Component {


  render() {
    return (<Segment inverted style={{
        background: 'url("./../../images/1.jpg")',
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
        height:window.innerHeight
      }}>

      <Header as='h1' style={{marginTop:window.innerHeight/5,textAlign:'center',marginBottom:'20px'}}><span className='headers'>Select your Role</span></Header>
      <div >
      <Grid style={{width:window.innerWidth, margin:'0px auto'}}>
        <Grid.Row >
          <Grid.Column width={3}>
            <center>
              <Link to='/baker'>
                <Image src='./../../images/backerDashboard.jpeg' circular style={{width:175,height:175}}/>
              <Header><span className="headers">HB Bakers</span></Header>
              </Link>
            </center>
          </Grid.Column>
          <Grid.Column width={3}>
          <center>
          <Link to='/log1'>
            <Image src='./../../images/dtruck.jpg' circular style={{width:175,height:175}}/>
          </Link>
            <Header><span className="headers">Fine Foods Logistics</span></Header>
          </center>
          </Grid.Column>
          <Grid.Column width={3}>
          <center>
          <Link to='/dc'>
            <Image src='./../../images/ddc.png' circular style={{width:175,height:175}}/>
          </Link>
            <Header><span className="headers">Distribution Center</span></Header>
          </center>
          </Grid.Column>
          <Grid.Column width={3}>
          <center>
            <Link to='/log2'>
            <Image src='./../../images/dtruck.jpg' circular style={{width:175,height:175}}/>
            </Link>
            <Header><span className="headers">Global Food Logistics</span></Header>
          </center>
          </Grid.Column>
          <Grid.Column width={3}>
          <center>
          <Link to='/retailer'>
            <Image src='./../../images/dretailer.png' circular style={{width:175,height:175}}/>
          </Link>
            <Header><span className="headers">Retailer</span></Header>
          </center>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    </Segment>);
  }
}
