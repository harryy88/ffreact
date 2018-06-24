import { Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import Header from './Header';
// import Ticker from './Ticker';
// import Upper from './Upper';
// import Nav from './Nav';

import Landing from './Landing';
import Cat from './Cat';

class Main extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
               <Route exact path="/" component={ Landing } />
               <Route  path="/:catId" component={ Cat } />
          </div>
     </BrowserRouter>

    );
  }
}

export default Main;
