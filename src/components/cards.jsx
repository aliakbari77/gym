import React, { Component } from "react";
import Card from "./card";

class Cards extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Card
          gym={this.props.gym}
          onBookmark={this.props.onBookmark}
          onLike={this.props.onLike}
          onDelete={this.props.onDelete}
        />
      </React.Fragment>
    );
  }
}

export default Cards;
