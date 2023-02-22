import { Routes, Route } from 'react-router-dom';
import Main from './page/main/Main';
import Login from './page/login/login';
import Signup from './page/signup/signup';
import Detail from './page/detail/detail';
import Update from './page/update/update';
import Mypage from './page/mypage/mypage';
import Myprofil from './page/myprofil/myprofil';
import Repswd from './page/repassword/repasswd';
import WritePage from './page/write/writePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/update" element={<Update />} />
      <Route path="/mypage" element={<Mypage />} />
      <Route path="/myprofil" element={<Myprofil />} />
      <Route path="/repassword" element={<Repswd />} />
      <Route path="/writePage" element={<WritePage />} />
    </Routes>
  );
}

export default App;
