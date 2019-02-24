import React, {Component} from 'react';
import './App.css';
import {loadData} from './utils/ajax'

class App extends Component {
  state = {
    data: []
  }
  componentDidMount() {
    loadData((data) => {
      this.setState({ data })
    })
  }
  render() {
    const { data } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Users List
          </p>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Company</th>
              </tr>
            </thead>

            <tbody>
              {
                data.map(
                  ({ name, age, company }) => <tr key={name}>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{company}</td>
                  </tr>
                )
              }
            </tbody>

          </table>
        </header>
      </div>
    );
  }
}

export default App;
