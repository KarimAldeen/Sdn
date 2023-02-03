import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Qyeri from './Layout/Qyeri';
import HomePage from './page/Home/HomePage';
function App() {
  return (
    <BrowserRouter>
    <Qyeri/>
      <Routes>
      <Route  path='/' element={<HomePage/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
