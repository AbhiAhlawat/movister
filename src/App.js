import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App1 from './components1/App1';
import Home from './pages/Home';

import Catalog from './pages/Catalog'
import Detail from './pages/detail/Detail'
function App() {
    return (


    <Router>
      <Switch>
        <Route path="/home" >
          <Home />
        </Route>
        <Route path="/" exact>
          <App1 />
         </Route>
        <Switch>
            <Route
                path='/:category/search/:keyword'
                component={Catalog}
            />
            <Route
                path='/:category/:id'
                component={Detail}
            />
            <Route
                path='/:category'
                component={Catalog}
            />
            <Route
                path='/'
                exact
                component={Home}
            />
        </Switch>
      </Switch>
    </Router>
    );
}

export default App;
