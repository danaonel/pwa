import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import logo from './logo.svg';
import './App.css';

const Page = ({ title }) => (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{title}</h2>
      </div>
      <p className="App-intro">
        This is the {title} page.
      </p>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/amenities">Amenities</Link>
      </p>
      <p>
        <Link to="/car">Trips by car</Link>
      </p>
      <p>
        <Link to="/bus">Trips by bus</Link>
      </p>
      <p>
        <Link to="/hiking">Hiking trips</Link>
      </p>
      <p>
        <Link to="/outside">Trips outside LA</Link>
      </p>
      <p>
        <Link to="/neighborhood">Neighborhood info</Link>
      </p>
    </div>
);

const Home = (props) => (
  <Page title="Home"/>
);

const Amenities = (props) => (
  <Page title="Amenities"/>
);

const Car = (props) => (
  <Page title="Trips by car"/>
);

const Bus = (props) => (
  <Page title="Trips by bus"/>
);

const Hiking = (props) => (
  <Page title="Hiking trips"/>
);

const Outside = (props) => (
  <Page title="Trips outside LA"/>
);

const Neighborhood = (props) => (
  <Page title="Neighborhood info"/>
);

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/amenities" component={Amenities}/>
        <Route path="/bus" component={Bus}/>
        <Route path="/car" component={Car}/>
        <Route path="/hiking" component={Hiking}/>
        <Route path="/outside" component={Outside}/>
        <Route path="/neighborhood" component={Neighborhood}/>
      </Router>
    );
  }
}

export default App;