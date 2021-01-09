import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      err: "",
    };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => this.setState({ err: err.message })
    );
  }

  render() {
    if (this.state.err && !this.state.lat) {
      return <div>Error: {this.state.err}</div>;
    }
    if (!this.state.err && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    if (!this.state.err && !this.state.lat) {
      return (
        <div>
          <h1>
            <Loader />
          </h1>
          >
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
