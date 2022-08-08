import "./App.css";
import Image from "./Image.jpg";
import React from "react";

class App extends React.Component {
  state = {
    person: {
      fullName: "Will Smith",
      bio: " American actor, rapper, producer, and YouTuber.",
      imgSrc: Image,
      profession: "Actor",
    },
    show: true,
  };
  handleSowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div className="">
        {this.state.show && (
          <>
            <h1 className="fullName">{this.state.person.fullName}</h1>
            <h1 className="bio">{this.state.person.bio}</h1>
            <img src={this.state.person.imgSrc} alt="Smith"></img>
            <h1 className="profession">{this.state.person.profession}</h1>
            <br></br>
          </>
        )}
        <div className="btn">
        <button onClick={this.handleSowPerson}>click here</button>
        </div>
        
      </div>
    );
  }
}
export default App;
