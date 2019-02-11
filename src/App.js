import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tab1: false,
      tab2: false
    };

    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(e) {
    const clickedTabId = e.currentTarget.id;
    let tab1 = false;
    let tab2 = false;
    if (clickedTabId === 'tab1') {
      if (!this.state.tab1) {
        // no estaba marcado antes del click
        tab1 = true;
        tab2 = false;
      } 
    } else {
      if (!this.state.tab2) {
        // no estaba marcado antes del click
        tab1 = false;
        tab2 = true;
      }
    }
    this.setState({
      tab1: tab1,
      tab2: tab2
    });
  }

  render() {
    const {tab1, tab2} = this.state;
    return (
      <div className="app">
        <ul className="tabs">
          <li className="tab">
            <label htmlFor="tab1" className={`tab__label ${tab1 ? 'tab__label--checked': ''}`}>
              <input type="checkbox" name="tab1" id="tab1" checked={tab1} onChange={this.handleTabChange} /> Opción 1
            </label>
          </li>
          <li className="tab">
          <label htmlFor="tab2" className={`tab__label ${tab2 ? 'tab__label--checked': ''}`}>
              <input type="checkbox" name="tab2" id="tab2" checked={tab2} onChange={this.handleTabChange} /> Opción 2
            </label>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
