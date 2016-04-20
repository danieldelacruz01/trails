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
                    <h3>Trail 1</h3>
                    <p>This is the mvp trail</p>
                   </div>
                </div>
		    			</Col>
			    		<Col md={6}>
               	<div className="trailCont">
                  <img value="2" onClick={this.selectTrail} src="images/11.jpg"/>
		    				    <div className="trailName">
                    <h3>Trail 2</h3>
                    <p>This is the other trail</p>
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
