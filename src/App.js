import "./App.css";
import NavBar from "./components/navbar";
import Cards from "./components/cards";
import React, { Component } from "react";
import getGyms from "./services/fakeGym";

class App extends Component {
  state = {
    gyms: getGyms(),
  };

  handleBookmark = (gym) => {
    const gyms = [...this.state.gyms];
    const index = gyms.indexOf(gym);
    gyms[index] = { ...gym };
    gyms[index].bookmarked = !gyms[index].bookmarked;
    this.setState({ gyms });
  };

  handleLike = (gym) => {
    const gyms = [...this.state.gyms];
    const index = gyms.indexOf(gym);
    gyms[index] = { ...gym };
    gyms[index].liked = !gyms[index].liked;
    this.setState({ gyms });
  };

  handleDelete = (gym) => {
    let gyms = this.state.gyms;
    gyms = gyms.filter((g) => g.Title !== gym.Title);
    this.setState({ gyms });
  };
  render() {
    console.log(this.state.gyms);
    return (
      <React.Fragment>
        <NavBar />
        <div className="container ">
          <div className="row">
            {this.state.gyms.map((g) => {
              return (
                <div className="col-4 d-flex ">
                  <Cards
                    gym={g}
                    onBookmark={() => {
                      return this.handleBookmark(g);
                    }}
                    onLike={() => {
                      return this.handleLike(g);
                    }}
                    onDelete={() => {
                      return this.handleDelete(g);
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
