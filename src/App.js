import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import HomePage from './Pages/HomePage'
import Info from './Pages/Info'
import Data from './Pages/Data'
import Map from './components/Map'

import './App.css';

//Importing data from the local JSON file
import data from './data'


class App extends Component {

  state = {
    data: [],
    reasonSelector: 'All',
    actionSelector: 'All',
  }

  //Setting data to state
  setData = () => {
    this.setState({ data: data })
  }

  componentDidMount() {
    this.setData()
  }

  //Storing filter selection in state 
  setReasonSelectorState = (e) => {
    this.setState({ reasonSelector: e })
  }

  setActionSelectorState = (e) => {
    this.setState({ actionSelector: e })
  }

  //Filtering data by selection
  filterData = (reasonSelector, actionSelector) => {
    if(reasonSelector && actionSelector === 'All') {
      return this.state.data
    } else {
      return this.state.data.filter(dataItem => dataItem.reason === reasonSelector || dataItem.action === actionSelector)
    }
  }


  render() {

    const { data, reasonSelector, actionSelector } = this.state
    const { setReasonSelectorState, setActionSelectorState, filterData } = this

    return (

      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/' component={props => <HomePage />} />
            <Route exact path='/info' component={props => <Info />} />
            <Route exact path='/data' component={props => <Data data={filterData(reasonSelector, actionSelector)} setReasonSelectorState={setReasonSelectorState}
              reasonSelector={reasonSelector} actionSelector={actionSelector}
              setActionSelectorState={setActionSelectorState} />} />
            <Route exact path='/map' component={props => <Map data={data} />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
