import { Route, Switch, NavLink } from 'react-router-dom';
import About from './About';
import Dog from './Dog';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <NavLink exact activeClassName="active-link" to="/dog">Dog</NavLink>
        <NavLink exact activeClassName="active-link" to="/contact">Contact</NavLink>
        <NavLink exact activeClassName="active-link" to="/">About</NavLink>
      </nav>
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/dog" component={Dog} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
