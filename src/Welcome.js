import React, { Component } from "react";
import ReactDOM from "react-dom";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      userId: "",
      name: "",
      email: "",
      picture: ""
    };
  }
  componentClicked = () => {
    console.log("component clicked");
  };
  responseGoogle = response => {
    console.log(response.tokenId);
    console.log(response);
  };
  render() {
    let googleContent;

    if (this.state.isLoggedIn) {
      googleContent = null;
    } else {
      googleContent = (
        <GoogleLogin
    clientId="Add your content id"
    buttonText="Login"
    redirectUri="https://localhost:3000/"
    onSuccess={this.responseGoogle}
    onFailure={this.responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
      );
    }
  
    return (
      <div>
        <h1>Kunal</h1>
        {googleContent}
      </div>
    );
  }
}
export default Welcome;
