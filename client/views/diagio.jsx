import React from 'react';
import {Grid, Image,Header} from 'semantic-ui-react';

export default class Diagio extends React.Component {
  render() {
    return (<div>
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
            <Image src='./../../images/graph.jpg'/>
          <center><Header as='h1'><span className="headers" style={{fontSize:'45px',position:'absolute',top:'30%',left:'23%'}}>Promocode</span></Header></center><br/>
          <center><Header as='h1'><span className="headers" style={{fontSize:'45px',position:'absolute',top:'48%',left:'20%'}}>Performance</span></Header></center>
          </Grid.Column>
          <Grid.Column>
            <Image src='./../../images/compare.jpg'/>
            <center><Header as='h1'><span className="headers" style={{fontSize:'45px',position:'absolute',top:'30%',left:'10%'}}>YOY performance</span></Header></center>
          </Grid.Column>
          <Grid.Column>
            <Image src='./../../images/diagioCustomer.jpg'/>
            <center><Header as='h1'><span className="headers" style={{fontSize:'45px',position:'absolute',top:'30%',left:'32%'}}>category</span></Header></center>
            <center><Header as='h1'><span className="headers" style={{fontSize:'45px',position:'absolute',top:'48%',left:'30%'}}>Scorecard</span></Header></center>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
      );
  }
}
