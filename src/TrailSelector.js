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
          			 <img value="1" onClick={this.selectTrail} src="http://www.stuff.co.nz/content/dam/images/1/a/5/m/t/v/image.related.StuffLandscapeSixteenByNine.620x349.1a2huc.png/1457654617914.jpg"/>
                   <div className="trailName">
                    <h3>Trail 1</h3>
                    <p>This is the mvp trail</p>
                   </div>
                </div>
		    			</Col>
			    		<Col md={6}>
               	<div className="trailCont">
                  <img value="2" onClick={this.selectTrail} src="https://c1.staticflickr.com/3/2835/9088064883_27af8200b4_b.jpg"/>
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
