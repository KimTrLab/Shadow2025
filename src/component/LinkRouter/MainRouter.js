
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import App from '../Home/Home';
import CS from '../cs/Cs'


function MainRouter (){
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<App />} />
        <Route path='/cs' element={<CS />} />
    </Routes>
    </BrowserRouter>
  )
}

export default MainRouter;