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
            <Image src='https://png.pngtree.com/element_origin_min_pic/16/12/14/a136190eee88f74455adb382654c89ab.jpg' circular style={{width:175,height:175}}/>
          </Link>
            <Header><span className="headers">Fine Foods Logistics</span></Header>
          </center>
          </Grid.Column>
          <Grid.Column width={3}>
          <center>
          <Link to='/dc'>
            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgvCzFk4tY7xGPpqjAkjMyzsY6lgq9ejKoI653qOtJV45_wUuOCw' circular style={{width:175,height:175}}/>
          </Link>
            <Header><span className="headers">Distribution Center</span></Header>
          </center>
          </Grid.Column>
          <Grid.Column width={3}>
          <center>
            <Link to='/log2'>
            <Image src='https://png.pngtree.com/element_origin_min_pic/16/12/14/a136190eee88f74455adb382654c89ab.jpg' circular style={{width:175,height:175}}/>
            </Link>
            <Header><span className="headers">Global Food Logistics</span></Header>
          </center>
          </Grid.Column>
          <Grid.Column width={3}>
          <center>
          <Link to='/retailer'>
            <Image src='data:image/png;base64,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' circular style={{width:175,height:175}}/>
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
