import React from 'react';
import {Segment, Grid, Card, Icon, Image,Header} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';


module.exports = (props)=>{
  return(
    <div>
      <div style={{postion:'relative'}}>
        <img src="./../../images/baker.jpg" style={{width:'100%',height:'100%'}}/>
        <h1 style={{position:'absolute',top:'50%',left:'50%',color:'white',transform:'translate(-50%,-50%)',fontSize:'150px',fontFamily:'Pacifico',letterSpacing:10}}>Baker</h1>
      </div>

      <div>
        <Header style={{margin:10,padding:10,textTransform:'uppercase'}} textAlign='center' size='huge'>Select a Product</Header>
        <Grid columns={3} padded>
          <Grid.Row>
            <Grid.Column as={Link} to="/bakerInfo">
              <img src="./../../images/bread.jpg" />
              <Header style={{margin:10,padding:10,textTransform:'uppercase'}} textAlign='center' size='huge'>Bread</Header>

            </Grid.Column>

            <Grid.Column>
              <img src="./../../images/sticks.jpg" />
              <Header style={{margin:10,padding:10,textTransform:'uppercase'}} textAlign='center' size='huge'>bread sticks</Header>

            </Grid.Column>

            <Grid.Column>
              <img src="./../../images/donut.png" />
              <Header style={{margin:10,padding:10,textTransform:'uppercase'}} textAlign='center' size='huge'>Donut</Header>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>

    </div>
  );
}
