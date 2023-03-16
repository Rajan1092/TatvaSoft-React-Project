
import './App.css';
import Reg from './components/Reg';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Logindtl from './components/Logindtl';
import Bookpage from './components/Bookpage';
import Shoppingcart from './components/Shoppingcart';
import Searchpage from './components/Searchpage';

  

function App() {
  return (
    <div className="App">
     
         <BrowserRouter>
      <Routes>
        
        <Route exact path="/" element={<Reg/>}/>
        <Route exact path="/loginreg" element={<Logindtl />}/>
        <Route exact path="/book" element={<Bookpage/>}/>
        <Route exact path="/cart" element={<Shoppingcart/>}/>
        <Route exact path="/search" element={<Searchpage/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
