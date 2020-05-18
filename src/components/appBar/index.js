import React, { Component } from "react";
import { connect } from "react-redux";
import Page from "./page";

class AppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  onChangeText = (text) => {
    this.setState({ text });
  };

  onChangeSelection = (text) => {};

  render() {
    const { text } = this.state;
    const { suggestions } = this.props;
    return (
      <Page
        text={text}
        suggestions={suggestions}
        onChangeText={this.onChangeText}
        onChangeSelection={this.onChangeSelection}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    suggestions: state.suggestions,
  };
};

export default connect(mapStateToProps)(AppBar);
