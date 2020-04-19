import React from 'react';
import {
  Route, Switch,
  BrowserRouter as Router,
} from 'react-router-dom'
import Questions from './pages/questions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Love language
      </header>
      <Router>
        <Switch>
          <Route path="/questions">
            <Questions></Questions>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
