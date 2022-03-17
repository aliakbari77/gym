import React, { Component } from "react";

class Card extends Component {
  state = {};

  handleBookmarkClass = () => {
    let classes = "fa mr-4 fa-bookmark";
    if (!this.props.gym.bookmarked) {
      classes += "-o";
    }
    return classes;
  };

  handleLikeClass = () => {
    let classes = "fa fa-heart";
    if (!this.props.gym.liked) {
      classes += "-o";
    }
    return classes;
  };

  render() {
    const { Title, Plot } = this.props.gym;
    const { onLike, onBookmark } = this.props;
    return (
      <React.Fragment>
        <div className="card mt-4" style={{ width: "100%" }}>
          <img src="images/download.jpg" alt="" className="card-img-top" />
          <div className="card-body" style={{ height: "100%" }}>
            <h5 className="card-title">{Title}</h5>
            <p
              className="card-text"
              style={{ height: "15%", overflow: "hidden", paddingBottom: "0" }}
            >
              {Plot}
            </p>
            <div>
              <p className="badge badge-secondary ">49$</p>
            </div>
            <div>
              <i
                className={this.handleBookmarkClass()}
                aria-hidden="true"
                onClick={onBookmark}
                style={{ cursor: "pointer" }}
              ></i>
              <i
                className={this.handleLikeClass()}
                aria-hidden="true"
                onClick={onLike}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <button className="btn btn-primary mt-4">Show Details</button>
              <button
                className="btn btn-danger mt-2"
                onClick={this.props.onDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Card;
