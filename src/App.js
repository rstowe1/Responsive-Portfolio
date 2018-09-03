import React, {Component} from 'react';
import './App.css';
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <div  id='body'>
        <Navigation/>
        <div className='container-fluid'>

          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Ryan W. Stowe</h1>
              <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its
                parent.</p>
            </div>
          </div>

        </div>
        <div className='row'>
          <div className='container-fluid' id='subBody'>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
