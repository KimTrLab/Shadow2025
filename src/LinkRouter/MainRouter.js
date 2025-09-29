
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '../component/Home/Home';
import CS from '../component/CS/Cs';
import Lap from '../component/Lap/Lap';
import BBS from '../component/bbs/BBS';

function MainRouter (){
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cs' element={<CS />} />
        <Route path='/Lap' element={<Lap />} />
        <Route path='/bbs' element={<BBS />} />
    </Routes>
    </BrowserRouter>
  )
}
export default MainRouter;