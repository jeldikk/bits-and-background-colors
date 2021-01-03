import React, { Component } from "react";

import "./footer.styles.scss";

import {connect} from 'react-redux'

export class Footer extends Component {
  timer = null;
  state = {
    timeInfo: new Date(),
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ timeInfo: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    console.log("Footer unmounted");
    clearInterval(this.timer);
  }
  render() {

    const redString = this.props.red.toString(2).padStart(8,'0')
    return (
      <div className="footer fixed-bottom bg-dark">
        <div className="time-info">
          {this.state.timeInfo.toLocaleTimeString()}
        </div>
        <div className="credits">Made with love on React &amp; Bootstrap</div>
        <div className="binary-info">
          <span className="red-info">{redString}</span>{" "}
          <span className="green-info">{this.props.green.toString(2).padStart(8,'0')}</span>{" "}
          <span className="blue-info">{this.props.blue.toString(2).padStart(8,'0')}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        red: state.rgb.red,
        green: state.rgb.green,
        blue: state.rgb.blue
    }
}

export default connect(mapStateToProps,null)(Footer);
