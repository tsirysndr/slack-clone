import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './Containers/Home';
import Login from './Containers/Login';

function App() {
  return (
    <HashRouter hashType='hashbang'>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/login' component={Login} />
      </Switch>
    </HashRouter>
  );
}

export default App;
