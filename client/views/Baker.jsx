import React from 'react';
import {Segment, Grid, Card, Icon, Image,Header} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';

export default class Baker extends React.Component
{
  render()
  {
    return(
      <div>
        <Image style={{width:window.innerWidth}} src='./../../images/baker.jpg' />
        <Header style={{fontSize:'125px',position:'absolute',top:'40%',left:'40%',color:'white'}}><span className="heroText">Baker</span></Header>
        <Header as='h1' style={{textAlign:'center'}}><span className="headers" style={{color:'#bcb229'}}>Select a Product</span></Header>
        <br/>
        <br/>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <Image as={Link} to='/bakerInfo' src='http://www.pngmart.com/files/3/Bread-PNG-Clipart.png'/>
              <center><Header as='h1'><span className="headers" style={{color:'#bcb229'}}>Bread</span></Header></center>
            </Grid.Column>
            <Grid.Column width={4}>
              <Image src='https://pngimg.com/uploads/bagel/bagel_PNG54.png'/>
              <center><Header as='h1'><span className="headers" style={{color:'#bcb229'}}>Bagels</span></Header></center>
            </Grid.Column>
            <Grid.Column width={4}>
              <Image src='http://dunkindonuts.bg/assets/uploads/product/38/muffins_preview.png'/>
              <center><Header as='h1'><span className="headers" style={{color:'#bcb229'}}>Muffins</span></Header></center>
            </Grid.Column>
            <Grid.Column width={4}>
              <Image src='http://www.hornosdobra.com/img/news/coccion/coccion.png'/>
              <center><Header as='h1'><span className="headers" style={{color:'#bcb229'}}>Baguettes</span></Header></center>
            </Grid.Column>
            <Grid.Column width={4}>
              <Image src='./../../images/donut.png'/>
              <center><Header as='h1'><span className="headers" style={{color:'#bcb229'}}>Donuts</span></Header></center>
            </Grid.Column>
            <Grid.Column width={4}>
              <Image src='http://cannichstores.co.uk/wp-content/uploads/2017/04/Pastries.png'/>
              <center><Header as='h1'><span className="headers" style={{color:'#bcb229'}}>Pastries</span></Header></center>
            </Grid.Column>
            <Grid.Column width={4}>
              <Image src='./../../images/sticks.jpg'/>
              <center><Header as='h1'><span className="headers" style={{color:'#bcb229'}}>Bread sticks</span></Header></center>
            </Grid.Column>
            <Grid.Column width={4}>
              <Image src='./../../images/loaves.jpg'/>
              <center><Header as='h1'><span className="headers" style={{color:'#bcb229'}}>Loaves</span></Header></center>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
