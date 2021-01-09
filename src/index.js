import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      err: "",
    };

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
      return <div>Latitude: {this.state.lat}</div>;
    }
    if (!this.state.err && !this.state.lat) {
      return (
        <div>
          <h1>Loading</h1>>
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
