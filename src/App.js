import { Routes, Route } from 'react-router-dom';
import Main from './page/main/Main';
import Login from './page/login/login';
import Signup from './page/signup/signup';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
