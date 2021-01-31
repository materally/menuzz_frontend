
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
          {/*<Route path="/restaurant/:slug" exact component={RestaurantPage} />

          <Route path="/miez" exact component={MiezPage} />
          <Route path="/kapcsolat" exact component={ContactPage} /> */}

          <Route><NotFoundScreen /></Route>

      </Switch>
    </Layout>
  );
}

export default App;
