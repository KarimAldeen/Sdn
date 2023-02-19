import { React} from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import HomePage from './page/Home/HomePage';
import ServicesPage from './page/Services/ServicesPage';
import ContactPage from './page/Contact/ContactPage';
import TeamPage from './page/Team/TeamPage';
// const HomePage = lazy(() => import("./page/Home/HomePage"))
// const ServicesPage = lazy(() => import("./page/Services/ServicesPage"))
// const ContactPage = lazy(() => import("./page/Contact/ContactPage"))
// const TeamPage = lazy(() => import("./page/Team/TeamPage"))


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
