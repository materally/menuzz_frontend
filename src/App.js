
import { Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import './css/MenuzzGlobal.css';

// screens import
import NotFoundScreen from './screens/NotFoundScreen';
import HomeScreen from './screens/HomeScreen';
import CityScreen from './screens/CityScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import ContactScreen from './screens/ContactScreen';
import PrivacyScreen from './screens/PrivacyScreen';

// components
import Layout from './components/Layout/Layout';

const App = () => {
  ReactGA.initialize('UA-178471960-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <Layout>
      <Switch>
          <Route path="/" exact><HomeScreen /></Route>
          <Route path="/city/:city" exact component={CityScreen} />
          <Route path="/restaurant/:slug" exact component={RestaurantScreen} />
          <Route path="/contact" exact component={ContactScreen} /> 
          <Route path="/privacy" exact component={PrivacyScreen} /> 
          <Route><NotFoundScreen /></Route>
      </Switch>
    </Layout>
  );
}

export default App;
