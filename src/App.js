
import { Provider } from 'react-redux'
import store from './store'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' 

import Home from './containers/Home';
import Error404 from './containers/errors/Error404'


function App() {
  return (
    <Provider store={store}>
    <div>
      <Router>
       <Routes> 
        {/* Error Dysplay*/ } 
        <Route path='*' element={<Error404/>}/>

        <Route ecact path='/' element={<Home/>}/>
       </Routes>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
