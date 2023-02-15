import {
  Routes,
  Route,
} from "react-router-dom";

import Home from './views/Home'
import Page1 from './views/Page1'
import Page2 from './views/Page2'
import './index.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/page1" element={ <Page1 /> } />
        <Route path="/page2" element={ <Page2 /> } />
        <Route path="/" element={ <Home /> } />
      </Routes>
    </div>
  );
}

export default App;
