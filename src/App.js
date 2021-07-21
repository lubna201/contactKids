import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Wrapper from './Containers/Wrapper';

function App() {
  return (
    <div className="App">   
      <Router>
          <Switch>
            <Route path="/" exact component={Wrapper} />
            <Route path="*" component={Wrapper} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
