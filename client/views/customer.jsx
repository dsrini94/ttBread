import React from 'react';
import {
  List,
  Modal,
  Divider,
  Form,
  Segment,
  Grid,
  Card,
  Icon,
  Image,
  Header,
  Button,
  Input
} from 'semantic-ui-react';
import SwipeableViews from 'react-swipeable-views';
import LogisticsLogin from './../components/logisticLogin.jsx';
import CustomerInfo from './../components/customerProductInfo.jsx';



export default class Customer extends React.Component {

  constructor()
  {
    super();
    this.state={slidingIndex:0}
    this.handleLogin = this.handleLogin.bind(this);

  }

  componentWillMount()
  {
    if(this.props.match.params.index==0)
    {

    }
    else
    this.setState({slidingIndex:this.props.match.params.index})
  }

  handleHome()
  {
    this.setState({slidingIndex:1})
  }
  handleLogin()
  {
    this.setState({slidingIndex:(this.state.slidingIndex+1)})
  }

  render() {
    return (<div>
      <Grid>
        <Grid.Row style={{
            marginTop: '10px'
          }}>
          <Grid.Column width={2}/>
          <Grid.Column width={12}>
            <Segment inverted="inverted" color="teal" >
              <Header as='h2' style={{
                  textAlign: 'center',
                  margin:'0px',
                  border:'none'
                }}>
                <span className="headers">Hello Rachel</span>
              </Header>
            </Segment>

          </Grid.Column>
          <Grid.Column width={2}>

            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={2}/>
            <Grid.Column width={4} >
              <Image src ='./../../images/rachel.jpg' style={{marginTop:'50px',borderRadius:'50%'}}/>
            </Grid.Column>
            <Grid.Column width={8}>
                <SwipeableViews index={this.state.slidingIndex} >
                  <div style={{overflow:'hidden'}}>
                    <LogisticsLogin handleLogin={this.handleLogin}/>
                  </div>
                  <div style={{overflow:'hidden'}}>
                    <CustomerInfo handleHome={this.handleHome}/>
                  </div>
                </SwipeableViews>
            </Grid.Column>
            <Grid.Column width={2}/>
          </Grid.Row>
        </Grid>
      </div>
      );
  }
}
