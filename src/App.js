import {BrowserRouter,Route, Routes} from 'react-router-dom'
import HomePage from './page/Home/HomePage';
import ServicesPage from './page/Services/ServicesPage';
import ContactPage from './page/Contact/ContactPage';
import TeamPage from './page/Team/TeamPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route  path='/' element={<HomePage/>}/>
      <Route  path='/services' element={<ServicesPage/>}/>
      <Route  path='/contact' element={<ContactPage/>}/>
      <Route  path='/Team' element={<TeamPage/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
