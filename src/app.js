import React, { Component } from 'react';
import LoginLanding from './components/LoginLanding.jsx';

class App extends Component {
  render() {
    this.a = 'Hello';
    return (
        <div>
            {/* <h1>Hello team 4</h1> */}
            <LoginLanding
            />
        </div>
    );
  }
}

export default App;
