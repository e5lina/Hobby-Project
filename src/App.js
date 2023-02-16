import { Routes, Route } from 'react-router-dom';
import Main from './page/main/Main';
import Login from './page/login/login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
