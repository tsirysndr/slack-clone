import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './Containers/Home';
import Login from './Containers/Login';
import { Provider } from './Providers';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <HashRouter hashType="hashbang">
        <Provider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
          </Switch>
        </Provider>
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
