import React from 'react';
import { Accordion, Icon,Grid,Form} from 'semantic-ui-react';

export default class Wheat extends React.Component
{
  constructor()
  {
    super();
    this.state={activeIndex:1}
  }

  handleClick()
  {
    if(this.state.activeIndex == 1)
          this.setState({activeIndex:0})
    else
    if(this.state.activeIndex == 0)
          this.setState({activeIndex:1})
  }

  render()
  {
    return(
      <Accordion styled fluid>
        <Accordion.Title active={this.state.activeIndex === 0} index={0} onClick={this.handleClick.bind(this)}>
          <Icon name='dropdown' />
          Cotton
        </Accordion.Title>
        <Accordion.Content active={this.state.activeIndex === 0} >
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <Form>
                <Form.Field>
                  <label >Product ID</label>
                  <label className="headers" style={{fontSize:'17px',color:'black'}}>ING3477488</label>
                </Form.Field>
                <br/>

                <Form.Field>
                  <label >Farm Name</label>
                  <label className="headers" style={{fontSize:'17px',color:'black'}}>Eagle Farms , Ames, IA</label>
                </Form.Field>
                </Form>
              </Grid.Column>
              <Grid.Column width={4}>
                <Form>
                <Form.Field>
                  <label >Manufactured In</label>
                  <label className="headers" style={{fontSize:'17px',color:'black'}}>Canton, OH</label>
                </Form.Field>
                <br/>
                <Form.Field>
                  <label >Cotton Type</label>
                  <label className="headers" style={{fontSize:'17px',color:'black'}}>SHANKER-6 R/G</label>
                </Form.Field>
                <br/>

                </Form>
              </Grid.Column>
              <Grid.Column width={4}>
                <Form>
                <Form.Field>
                  <label >Packing Date</label>
                  <label className="headers" style={{fontSize:'17px',color:'black'}}>10th Sep, 2017</label>
                </Form.Field>
                <br/>
                <Form.Field>
                  <label >Harvest Date</label>
                  <label className="headers" style={{fontSize:'17px',color:'black'}}>15th Aug, 2017</label>
                </Form.Field>
                {
                //   <Form.Field>
                //   <label >Best Before Date</label>
                //   <label className="headers" style={{fontSize:'17px',color:'black'}}>9th Sep, 2018</label>
                // </Form.Field>
              }
                </Form>
              </Grid.Column>
              <Grid.Column width={4}>
                <Form>
                <Form.Field>
                  <label>Product Name</label>
                  <label className="headers" style={{fontSize:'17px',color:'black'}}>Chino</label>
                </Form.Field>
                <br/>

                {
                //   <Form.Field>
                //   <label >StorageTemp</label>
                //   <label className="headers" style={{fontSize:'17px',color:'black'}}>59°F (15°C)</label>
                // </Form.Field>
              }
                <br/>
                {
                //   <Form.Field>
                //   <label >Storage Humidity</label>
                //   <label className="headers" style={{fontSize:'17px',color:'black'}}>50-70% (Relative Humidity)</label>
                // </Form.Field>
              }
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Accordion.Content>
      </Accordion>
    )
  }
}
