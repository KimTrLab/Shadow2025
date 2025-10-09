
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '../component/Home/Home';
import CS from '../component/cs/Cs';
import Lap from '../component/Lap/Lap';
import BBS from '../component/bbs/BBS';
import WriteForm from '../component/bbs/WriteForm';

function MainRouter (){
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cs' element={<CS />} />
        <Route path='/Lap' element={<Lap />} />
        <Route path='/bbs' element={<BBS />} />
        <Route path='/bbs/wr' element={<WriteForm />} />
    </Routes>
    </BrowserRouter>
  )
}
export default MainRouter;