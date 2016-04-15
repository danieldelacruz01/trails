import React from 'react'

export default React.createClass({
  getInitialState() {
    return {
      secondsRemaining: 0
    };
  },
  tick() {
    this.setState({secondsRemaining: this.state.secondsRemaining - 1});
  },
  componentDidMount() {
    console.log(this.state.secondsRemaining)
    this.setState({secondsRemaining: this.props.secondsRemaining});
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount() {
    clearInterval(this.interval);
  },
  render() {
    return (
      <div>Seconds Remaining: {this.state.secondsRemaining}</div>
    );
  }
});