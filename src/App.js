import { Route } from "react-router"
import { BrowserRouter as Router} from "react-router-dom"
import GlobalStyles from './global-styles'

import Main from './pages/Main'
import Lesson1 from './pages/Lesson-1'


function App() {
  return (
      <>
  <GlobalStyles/>
    <Router>
      <Route exact path="/" component={Main}/>
      <Route exact path="/lesson-1" component={Lesson1}/>
    </Router>
          </>
  );
}

export default App;
