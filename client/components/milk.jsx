import React from 'react';
import { Accordion, Icon,Grid,Form} from 'semantic-ui-react';

export default class Milk extends React.Component
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
          Milk
        </Accordion.Title>
        <Accordion.Content active={this.state.activeIndex === 0} >
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <Form>
                <Form.Field>
                  <label >Product ID</label>
                  <label className="headers" style={{fontSize:'17px',color:'black'}}>ING1225665</label>
                </Form.Field>
                <br/>
                <Form.Field>
                  <label >Product Name</label>
                  <label className="headers" style={{fontSize:'17px',color:'black'}}>Value Organic Whole Milk</label>
                </Form.Field>
                <br/>
                <Form.Field>
                  <label >Milk Farm Name</label>
                  <label className="headers" style={{fontSize:'17px',color:'black'}}>Nielson Farms</label>
                </Form.Field>
                </Form>
              </Grid.Column>
              <Grid.Column width={4}>
                <Form>
                <Form.Field>
                  <label >Milk Farm Location</label>
                  <label className="headers" style={{fontSize:'17px',color:'black'}}>Piscataway, NJ</label>
                </Form.Field>
                <br/>
                <Form.Field>
                  <label >Milk Type</label>
                  <label className="headers" style={{fontSize:'17px',color:'black'}}>USDA Organic</label>
                </Form.Field>
                <br/>
                <Form.Field>
                  <label >Packing Date</label>
                  <label className="headers" style={{fontSize:'17px',color:'black'}}>5th Jan, 2018</label>
                </Form.Field>
                </Form>
              </Grid.Column>
              <Grid.Column width={4}>
                <Form>
                <Form.Field>
                  <label >Nutrition Details</label>
                  <label className="headers" style={{fontSize:'17px',color:'black'}}>Added Vitamin D, 8g Protein</label>
                </Form.Field>
                <br/>
                <Form.Field>
                  <label >Best Before Date</label>
                  <label className="headers" style={{fontSize:'17px',color:'black'}}>18th Jan, 2018</label>
                </Form.Field>
                </Form>
              </Grid.Column>
              <Grid.Column width={4}>
                <Form>
                <Form.Field>
                  <label >Storage Temp</label>
                  <label className="headers" style={{fontSize:'17px',color:'black'}}>35-40°F (2-4°C)</label>
                </Form.Field>
                <br/>
                <Form.Field>
                  <label >Storage Humidity</label>
                  <label className="headers" style={{fontSize:'17px',color:'black'}}>40-70% (Relative Humidity)</label>
                </Form.Field>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Accordion.Content>
      </Accordion>
    )
  }
}
