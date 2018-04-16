import React from 'react';
import { Accordion, Icon,Grid,Form} from 'semantic-ui-react';

export default class Yeast extends React.Component
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
          Yeast
        </Accordion.Title>
        <Accordion.Content active={this.state.activeIndex === 0} >
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <Form>
                <Form.Field>
                  <label >Product ID</label>
                  <label className="headers" style={{fontSize:'17px',color:'black'}}>ING418165</label>
                </Form.Field>
                <br/>
                <Form.Field>
                  <label >Brand Name</label>
                  <label className="headers" style={{fontSize:'17px',color:'black'}}>Blue Star Rapid Rise Natural Yeast</label>
                </Form.Field>
                <br/>
                <Form.Field>
                  <label >Manufactured By</label>
                  <label className="headers" style={{fontSize:'17px',color:'black'}}>BS Baking Supplies</label>
                </Form.Field>
                </Form>
              </Grid.Column>
              <Grid.Column width={4}>
                <Form>
                <Form.Field>
                  <label >Manufacture At</label>
                  <label className="headers" style={{fontSize:'17px',color:'black'}}>LaSalle,Quebec, Canada</label>
                </Form.Field>
                <br/>
                <Form.Field>
                  <label >Culture Date</label>
                  <label className="headers" style={{fontSize:'17px',color:'black'}}>10th April, 2015</label>
                </Form.Field>
                <br/>
                <Form.Field>
                  <label >Culture Batch</label>
                  <label className="headers" style={{fontSize:'17px',color:'black'}}>BS01787</label>
                </Form.Field>
                </Form>
              </Grid.Column>
              <Grid.Column width={4}>
                <Form>
                <Form.Field>
                  <label >Packing Date</label>
                  <label className="headers" style={{fontSize:'17px',color:'black'}}>10th June, 2017</label>
                </Form.Field>
                <br/>
                <Form.Field>
                  <label >Best Before Date</label>
                  <label className="headers" style={{fontSize:'17px',color:'black'}}>09th June, 2019</label>
                </Form.Field>
                </Form>
              </Grid.Column>
              <Grid.Column width={4}>
                <Form>
                <Form.Field>
                  <label >StorageTemp</label>
                  <label className="headers" style={{fontSize:'17px',color:'black'}}>32-60°F (0-15°C)</label>
                </Form.Field>
                <br/>
                <Form.Field>
                  <label >Storage Humidity</label>
                  <label className="headers" style={{fontSize:'17px',color:'black'}}>50-60% (Relative Humidity)</label>
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
