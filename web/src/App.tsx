import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './Containers/Home';
import Login from './Containers/Login';
import { Provider } from './Providers';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Provider>
        <HashRouter hashType="hashbang">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
          </Switch>
        </HashRouter>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
