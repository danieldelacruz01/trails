import React from 'react'
import Trail from './Trail'
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap'

export default React.createClass({
	getInitialState(){
		return {trailSelected:false}
	},
	selectTrail(e){
		this.setState({trailSelected:e.target.value})
	},
  render() {
  	if(!this.state.trailSelected){
	    return (
	    	<div>
	    		<h3>Select a trail</h3>
		    	<Grid>
		    		<Row>
			    		<Col md={6}>
                <div className="trailCont">
          			 <img value="1" onClick={this.selectTrail} src="images/1.jpg"/>
                   <div className="trailName">
                    <h3>CBD Circuit</h3>
                    <p>This is the mvp trail</p>
                   </div>
                </div>
		    			</Col>
			    		<Col md={6}>
               	<div className="trailCont">
                  <img value="2" onClick={this.selectTrail} src="images/11.jpg"/>
		    				    <div className="trailName">
                    <h3>Iconic Buildings</h3>
                    <p>A preview of some of Wellington's unique architecture</p>
                    </div>
                </div>
			    		</Col>
              <Col md={6}>
                <div className="trailCont">
                  <img src="images/kent.jpg"/>
                    <div className="trailName">
                    <h3>Now and Then</h3>
                    <p>Travel back in time to old Wellington</p>
                    </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="trailCont">
                  <img src="images/plimmer.jpg"/>
                    <div className="trailName">
                    <h3>Sculpture Stroll</h3>
                    <p>Chisel your way through our sculpture trail</p>
                    </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="trailCont">
                  <img src="images/garrett.jpg"/>
                    <div className="trailName">
                    <h3>Graffiti Guide</h3>
                    <p>View an eclectic mix of some of the city's coolest street art</p>
                    </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="trailCont">
                  <img src="images/memphis.jpg"/>
                    <div className="trailName">
                    <h3>Cafe Crusade</h3>
                    <p>Check out some of our favourite coffee spots</p>
                    </div>
                </div>
              </Col>
			    	</Row>
		    	</Grid>
		    </div>
	    )
  	} else {
  		return (
  			<Trail trailId={this.state.trailSelected}/>
  		)
  	}
  }
})
