import './App.css';
import Products from './components/container';
import Login from './components/container/login';
import Header from './components/header';
import {Switch,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Products />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
