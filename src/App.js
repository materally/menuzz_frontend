
import { Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-select2-wrapper/css/select2.css';
import './css/App.css';

// screens import

// components
import Navbar from './components/Layout/Navbar/Navbar'

const App = () => {
  ReactGA.initialize('UA-178471960-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <div className="App">
      <Navbar />
      <Switch>
      {/* https://blog.logrocket.com/search-optimized-spas-react-helmet/ */}
          {/* <Route path="/" exact component={Index} />
          <Route path="/listing/:city" exact component={Listing} />
          <Route path="/restaurant/:slug" exact component={RestaurantPage} />

          <Route path="/miez" exact component={MiezPage} />
          <Route path="/kapcsolat" exact component={ContactPage} />

          <Route component={NotFound} />
 */}
      </Switch>
    </div>
  );
}

export default App;
