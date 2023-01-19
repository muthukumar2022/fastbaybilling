import './App.css';
import Paymentdone from './Pages/Paymentdone';
 import Header from './components/Header'
 import Bill from './Pages/Bill'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     
     <Routes>
      <Route path='/' element={<Paymentdone/>}/>
      <Route path='/Bill' element={<Bill/>}/>
     </Routes>
     </BrowserRouter> 
      {/* <Header/> 
      
        <Paymentdone/> 
       <Bill/>   */}
    </div>
  );
}

export default App;
