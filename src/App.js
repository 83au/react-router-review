import { Route, Switch, Link } from 'react-router-dom';
import About from './About';
import Dog from './Dog';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <Link to="/dog">Dog</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/">About</Link>
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
