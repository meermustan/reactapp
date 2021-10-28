import './App.css';
import TopNavbar from './TopNavbar'
import AddList from './AddList';
import { useEffect,useState } from 'react';
import ShowList from './ShowList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <TopNavbar />
        
        <Switch>
          <Route path="/AddList">
            <AddList />
          </Route>
          <Route path="/ShowList">
            <ShowList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
